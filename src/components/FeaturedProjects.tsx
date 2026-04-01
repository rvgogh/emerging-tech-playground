import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { projects } from "@/data/projects";

const featured = [projects[0], projects[3], projects[4]]; // Healthy Workplace, AI against Litter, Interactive Light

const FeaturedProjects = () => {
  const { t } = useLanguage();
  const f = translations.featured;

  return (
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            {t(f.label)}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            {t(f.heading)}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t(f.sub)}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featured.map((project, i) => (
            <Link
              key={i}
              to={`/projecten?field=${project.fields[0]}`}
              className="group block rounded-2xl bg-background border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.fields.map((field) => (
                    <span
                      key={field}
                      className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full"
                    >
                      {field}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                  {t(project.context)}
                </p>
                <span className="text-primary text-sm font-medium mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t(translations.projects.readMore)} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/projecten">
              {t(f.viewAll)} <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
