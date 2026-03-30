import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Testimonials = () => {
  const { t } = useLanguage();
  const s = translations.testimonials;

  return (
    <section id="ervaringen" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            {t(s.label)}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            {t(s.heading)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {s.items.map((item, i) => (
            <Card
              key={i}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{t(item.quote)}"
                </p>
                <div>
                  <p className="font-heading font-bold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{t(item.study)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
