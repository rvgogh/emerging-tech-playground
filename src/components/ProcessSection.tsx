import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ProcessSection = () => {
  const { t } = useLanguage();
  const p = translations.process;

  return (
    <section id="werkwijze" className="py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            {t(p.label)}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            {t(p.heading)}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t(p.sub)}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {p.iterations.map((item, i) => (
                <div key={i} className="relative flex gap-6 items-start">
                  {/* Circle */}
                  <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-heading font-bold text-lg z-10">
                    {i + 1}
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-background rounded-xl p-6 border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="md:hidden shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                        {i + 1}
                      </span>
                      <h3 className="font-heading font-bold text-foreground text-lg">
                        {t(item.title)}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(item.description)}
                    </p>
                    <span className="inline-block mt-2 text-xs text-muted-foreground/60 font-medium">
                      {t(item.duration)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
