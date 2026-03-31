import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Building2, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fieldColors: Record<string, string> = {
  ICT: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  Design: "bg-pink-100 text-pink-800 hover:bg-pink-200",
  Engineering: "bg-amber-100 text-amber-800 hover:bg-amber-200",
  Business: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
};

const allFields = ["ICT", "Design", "Engineering", "Business"];

const Projects = () => {
  const { t } = useLanguage();
  const pt = translations.projects;
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get("field") || "";
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const filtered = useMemo(() => {
    if (!activeFilter) return projects;
    return projects.filter((p) => p.fields.includes(activeFilter));
  }, [activeFilter]);

  const handleFilter = (field: string) => {
    const next = activeFilter === field ? "" : field;
    setActiveFilter(next);
    if (next) {
      setSearchParams({ field: next });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-8 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground">
                <ArrowLeft size={16} className="mr-1" />
                {t(pt.back)}
              </Button>
            </Link>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {t(pt.heading)}
            </h1>
            <p className="text-muted-foreground text-lg mt-3 max-w-2xl">
              {t(pt.sub)}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Filter size={16} className="text-muted-foreground" />
            <Button
              variant={activeFilter === "" ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilter("")}
              className="rounded-full"
            >
              {t(pt.all)}
            </Button>
            {allFields.map((field) => (
              <Button
                key={field}
                variant={activeFilter === field ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilter(field)}
                className="rounded-full"
              >
                {field}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Card
                key={project.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all group"
              >
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.fields.map((f) => (
                      <Badge
                        key={f}
                        variant="secondary"
                        className={`text-xs font-medium ${fieldColors[f] || ""}`}
                      >
                        {f}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Building2 size={14} />
                      {project.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                    {project.context}
                  </p>
                  <details className="group/details">
                    <summary className="text-primary text-sm font-medium cursor-pointer hover:underline">
                      {t(pt.readMore)}
                    </summary>
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground animate-fade-in">
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{t(pt.problemLabel)}</h4>
                        <p className="leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{t(pt.goalsLabel)}</h4>
                        <p className="leading-relaxed">{project.goals}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{t(pt.resultsLabel)}</h4>
                        <p className="leading-relaxed">{project.results}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{t(pt.conclusionLabel)}</h4>
                        <p className="leading-relaxed">{project.conclusion}</p>
                      </div>
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">{t(pt.noResults)}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
