import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import heroPhoto from "@/assets/hero-photo.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const h = translations.hero;

  return (
    <section
      id="over"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroPhoto}
          alt={t(h.imgAlt)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 text-center flex flex-col items-center">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {t(h.title1)}
            <span className="text-primary">ICT</span>{t(h.title2)}
            <span className="text-primary">Design</span>{t(h.title3)}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t(h.subtitle)}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold text-base px-8" asChild>
              <a
                href="https://www.kiesopmaat.nl/modules/avans/ATD/140782/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(h.ctaEnroll)}
              </a>
            </Button>
            <Button
              size="lg"
              className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10 font-semibold text-base px-8"
              asChild
            >
              <a href="#contact">{t(h.ctaPrimary)}</a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#interessegebieden"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce"
        aria-label={t(h.scrollLabel)}
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
