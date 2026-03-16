import { Code2, Palette, Cpu, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Code2,
    title: "Technology",
    description:
      "Leer werken met AI, IoT, blockchain en andere emerging technologies die de toekomst vormgeven.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Ontwerp gebruiksvriendelijke interfaces en ervaringen met design thinking en UX-methoden.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Cpu,
    title: "Engineering",
    description:
      "Bouw werkende prototypes en systemen met moderne tools en frameworks.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Briefcase,
    title: "Business",
    description:
      "Ontwikkel business cases, pitches en strategieën voor innovatieve producten en diensten.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const Pillars = () => {
  return (
    <section id="disciplines" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Vier disciplines
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Eén minor, vier perspectieven
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Je werkt multidisciplinair samen aan echte uitdagingen en leert van
            elkaars expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((p) => (
            <Card
              key={p.title}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <CardContent className="p-8">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${p.bg} mb-5 group-hover:scale-110 transition-transform`}
                >
                  <p.icon className={`${p.color}`} size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
