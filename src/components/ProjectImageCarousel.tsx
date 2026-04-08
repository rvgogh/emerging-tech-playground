import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  alt: string;
}

const ProjectImageCarousel = ({ images, alt }: Props) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 1) {
    return (
      <img src={images[0]} alt={alt} className="w-full h-56 object-cover rounded-t-lg" />
    );
  }

  return (
    <div className="relative group/carousel">
      <img
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        className="w-full h-56 object-cover rounded-t-lg transition-opacity"
      />
      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
        aria-label="Previous"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); }}
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
    </div>
  );
};

export default ProjectImageCarousel;
