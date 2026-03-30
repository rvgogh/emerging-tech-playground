import { BookOpen, Users, Layers, Rocket } from "lucide-react";

const advantages = [
  {
    icon: BookOpen,
    title: "Geen Tentamens",
    description:
      "Wordt beoordeeld op projectwerk, presentaties en portfolio — niet op multiple choice.",
  },
  {
    icon: Users,
    title: "Echte Klanten",
    description:
      "Werk aan opdrachten van echte bedrijven en organisaties met concrete impact.",
  },
  {
    icon: Layers,
    title: "Multidisciplinair",
    description:
      "Combineer vaardigheden uit ICT, Design, Engineering en Business in één team.",
  },
  {
    icon: Rocket,
    title: "Kickstart Carrière",
    description:
      "Na de minor stromen studenten door naar (afstudeer)stages bij onze opdrachtgevers — met een portfolio vol echte projecten.",
  },
];

const WhyThisMinor = () => {
  return (
    <section id="waarom" className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(127 40% 54%) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Voordelen
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Waarom deze minor?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advantages.map((a) => (
            <div key={a.title} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <a.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {a.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisMinor;
