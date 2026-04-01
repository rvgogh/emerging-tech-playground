import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const DeadlineBanner = () => {
  const { t } = useLanguage();
  const d = translations.deadline;

  return (
    <div className="bg-primary text-primary-foreground py-4 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <div className="text-center sm:text-left">
          <p className="text-base sm:text-lg font-bold">
            {t(d.main)}
          </p>
          <p className="text-xs sm:text-sm opacity-80 mt-0.5">
            {t(d.late)}
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="shrink-0 font-semibold"
          asChild
        >
          <a
            href="https://www.kiesopmaat.nl/modules/avans/ATD/140782/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(translations.hero.ctaEnroll)}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default DeadlineBanner;
