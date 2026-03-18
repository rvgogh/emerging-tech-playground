import pillarTech from "@/assets/pillar-tech.jpg";
import pillarDesign from "@/assets/pillar-design.jpg";
import pillarEngineering from "@/assets/pillar-engineering.jpg";
import pillarBusiness from "@/assets/pillar-business.jpg";

const pillars = [
  {
    image: pillarTech,
    title: "Tech",
    description:
      "Codeer je ideeën en bouw werkende prototypes. Van front-end tot complexe algoritmen.",
  },
  {
    image: pillarDesign,
    title: "Design",
    description:
      "Vorm de ultieme gebruikerservaring. Leer design thinking, prototyping en visual design.",
  },
  {
    image: pillarEngineering,
    title: "Engineering",
    description:
      "Breng je ontwerpen tot leven. Werk met hardware, elektronica en robotica.",
  },
  {
    image: pillarBusiness,
    title: "Business",
    description:
      "Maak je concepten winstgevend. Ontwikkel business modellen en pitch je startup.",
  },
];

const Pillars = () => {
  return (
    <section id="interessegebieden" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            De Vier Interessegebieden
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            In deze minor leer je samenwerken op het snijvlak van vier werelden
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pillars.map((p) => (
            <div key={p.title} className="group">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-2">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
