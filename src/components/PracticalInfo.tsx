import { GraduationCap, CalendarDays, Clock, UserCheck, Globe, FlaskConical, Building2, Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [GraduationCap, CalendarDays, Clock, UserCheck, Globe];

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

        {/* Fact cards */}
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
                  <span className="text-muted-foreground text-xs mt-1">
                    {t(sub)}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Locations */}
        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="font-heading font-bold text-foreground text-xl text-center mb-6">
            {t(p.locations.heading)}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-secondary border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <FlaskConical className="text-primary" size={24} />
              </div>
              <h4 className="font-heading font-bold text-foreground text-lg mb-2">
                {t(p.locations.lab.title)}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(p.locations.lab.description)}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="text-primary" size={24} />
              </div>
              <h4 className="font-heading font-bold text-foreground text-lg mb-2">
                {t(p.locations.client.title)}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(p.locations.client.description)}
              </p>
            </div>
          </div>
        </div>

        {/* Week overview */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="rounded-2xl bg-secondary border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="text-primary" size={20} />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">
                {t(p.weekOverview.heading)}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="shrink-0 font-heading font-bold text-primary text-sm mt-0.5">
                  {t(p.weekOverview.weekdays)}
                </span>
                <span className="text-muted-foreground text-sm">
                  {t(p.weekOverview.weekdaysDesc)}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 font-heading font-bold text-primary text-sm mt-0.5">
                  {t(p.weekOverview.friday)}
                </span>
                <span className="text-muted-foreground text-sm">
                  {t(p.weekOverview.fridayDesc)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
