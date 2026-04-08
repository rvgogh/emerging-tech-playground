import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Images } from "lucide-react";

interface Props {
  images: string[];
  alt: string;
  /** If true, only render the lightbox (no thumbnail). Use openLightbox to trigger. */
  renderMode?: "full" | "lightbox-only";
  isOpen?: boolean;
  onClose?: () => void;
}

const ProjectImageCarousel = ({ images, alt, renderMode = "full", isOpen = false, onClose }: Props) => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const open = renderMode === "lightbox-only" ? isOpen : lightbox;
  const close = () => {
    setLightbox(false);
    onClose?.();
  };

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, prev, next]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const lightboxEl = open ? (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={close}
    >
      <button
        onClick={close}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      <img
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}

      <span className="absolute bottom-6 right-6 text-white/60 text-sm">
        {current + 1} / {images.length}
      </span>
    </div>
  ) : null;

  if (renderMode === "lightbox-only") {
    return lightboxEl;
  }

  return (
    <>
      <div className="relative group/carousel cursor-pointer" onClick={() => setLightbox(true)}>
        <img
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="w-full h-56 object-cover rounded-t-lg transition-opacity"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {lightboxEl}
    </>
  );
};

/** A small button overlay to open a photo lightbox on a video card */
export const PhotoButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 flex items-center gap-1 text-xs font-medium px-2.5 transition-colors"
    aria-label="View photos"
  >
    <Images size={14} />
    Foto's
  </button>
);

export default ProjectImageCarousel;
