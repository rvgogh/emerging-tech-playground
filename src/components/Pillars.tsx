import { Link } from "react-router-dom";
import pillarTech from "@/assets/pillar-tech.jpg";
import pillarDesign from "@/assets/pillar-design.jpg";
import pillarEngineering from "@/assets/pillar-engineering.jpg";
import pillarBusiness from "@/assets/pillar-business.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const fieldNames = ["ICT", "Design", "Engineering", "Business"];

const Pillars = () => {
  const { t } = useLanguage();
  const p = translations.pillars;

  return (
    <section id="interessegebieden" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            {t(p.heading)}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t(p.sub)}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {p.items.map((item, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={images[i]}
                  alt={t(item.title)}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {t(item.title)}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-2">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
