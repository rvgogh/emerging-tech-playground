import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { reviews } from "@/data/reviews";

const Testimonials = () => {
  const { t } = useLanguage();
  const s = translations.testimonials;
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const handleManualNav = (dir: "prev" | "next") => {
    setIsAutoPlaying(false);
    dir === "prev" ? prev() : next();
  };

  const visibleReviews = reviews.slice(current, current + itemsPerView);
  // Handle wrap-around
  if (visibleReviews.length < itemsPerView) {
    visibleReviews.push(...reviews.slice(0, itemsPerView - visibleReviews.length));
  }

  return (
    <section id="ervaringen" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            {t(s.label)}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            {t(s.heading)}
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto px-0 sm:px-8 lg:px-16">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md bg-background hidden sm:flex"
            onClick={() => handleManualNav("prev")}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md bg-background hidden sm:flex"
            onClick={() => handleManualNav("next")}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </Button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((review, i) => (
              <Card
                key={`${current}-${i}`}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          size={16}
                          className={
                            j < review.stars
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground/30"
                          }
                        />
                      ))}
                    </div>
                    <Quote size={20} className="text-primary/20" />
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 text-sm line-clamp-4">
                    "{t(review.quote)}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-heading font-bold text-foreground text-sm">
                      {review.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {t(review.study)} · {t(review.country)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile nav */}
          <div className="flex justify-center gap-3 mt-6 sm:hidden">
            <Button variant="outline" size="icon" className="rounded-full" onClick={() => handleManualNav("prev")}>
              <ChevronLeft size={18} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={() => handleManualNav("next")}>
              <ChevronRight size={18} />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: Math.min(Math.ceil(reviews.length / itemsPerView), 12) }).map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(current / itemsPerView) === i
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(i * itemsPerView);
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
