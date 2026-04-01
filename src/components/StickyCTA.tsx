import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t p-3 flex gap-2">
      <Button className="flex-1 font-semibold" asChild>
        <a
          href="https://www.kiesopmaat.nl/modules/avans/ATD/140782/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(translations.hero.ctaEnroll)}
        </a>
      </Button>
      <Button variant="outline" className="flex-1 font-semibold" asChild>
        <a href="#contact">{t(translations.nav.cta)}</a>
      </Button>
    </div>
  );
};

export default StickyCTA;
