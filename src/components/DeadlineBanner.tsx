import { CalendarClock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const DeadlineBanner = () => {
  const { t } = useLanguage();
  const d = translations.deadline;

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm font-medium">
      <div className="container mx-auto flex items-center justify-center gap-2 flex-wrap">
        <CalendarClock size={16} className="shrink-0" />
        <span>
          {t(d.main)}{" "}
          <span className="opacity-80">{t(d.late)}</span>
        </span>
      </div>
    </div>
  );
};

export default DeadlineBanner;
