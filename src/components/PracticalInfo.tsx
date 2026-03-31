import { Link } from "react-router-dom";
import { GraduationCap, CalendarDays, Clock, MapPin, UserCheck, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [GraduationCap, CalendarDays, Clock, MapPin, UserCheck, Globe];

const PracticalInfo = () => {
  const { t } = useLanguage();
  const p = translations.practical;

  return (
    <section id="praktisch" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            {t(p.label)}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            {t(p.heading)}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.items.map((item, i) => {
            const Icon = icons[i];
            const sub = (item as any).sub;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                  {t(item.label)}
                </span>
                <span className="font-heading font-bold text-foreground text-lg leading-snug">
                  {t(item.value)}
                </span>
                {sub && (
                  i === 3 ? (
                    <Link to="/projecten" className="text-primary text-xs mt-1 hover:underline">
                      {t(sub)}
                    </Link>
                  ) : (
                    <span className="text-muted-foreground text-xs mt-1">
                      {t(sub)}
                    </span>
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
