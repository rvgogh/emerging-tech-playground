import { Link } from "react-router-dom";
import { ArrowRight, Building2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { projects } from "@/data/projects";

const featured = [projects[0], projects[3], projects[4]];

const fieldColors: Record<string, string> = {
  ICT: "bg-blue-100 text-blue-800",
  Design: "bg-pink-100 text-pink-800",
  Engineering: "bg-amber-100 text-amber-800",
  Business: "bg-emerald-100 text-emerald-800",
};

const FeaturedProjects = () => {
  const { t } = useLanguage();
  const f = translations.featured;
  const pt = translations.projects;

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
          {featured.map((project) => (
            <Card
              key={project.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all group"
            >
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.fields.map((field) => (
                    <Badge
                      key={field}
                      variant="secondary"
                      className={`text-xs font-medium ${fieldColors[field] || ""}`}
                    >
                      {field}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Building2 size={14} />
                    {project.clientUrl ? (
                      <a href={project.clientUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline transition-colors">
                        {project.client}
                      </a>
                    ) : project.client}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {project.year}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {t(project.context)}
                </p>
                <details className="group/details">
                  <summary className="text-primary text-sm font-medium cursor-pointer hover:underline">
                    {t(pt.readMore)}
                  </summary>
                  <div className="mt-4 space-y-3 text-sm text-muted-foreground animate-fade-in">
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{t(pt.problemLabel)}</h4>
                      <p className="leading-relaxed">{t(project.problem)}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{t(pt.goalsLabel)}</h4>
                      <p className="leading-relaxed">{t(project.goals)}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{t(pt.resultsLabel)}</h4>
                      <p className="leading-relaxed">{t(project.results)}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{t(pt.conclusionLabel)}</h4>
                      <p className="leading-relaxed">{t(project.conclusion)}</p>
                    </div>
                  </div>
                </details>
              </CardContent>
            </Card>
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
