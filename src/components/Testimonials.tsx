import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    stars: 5,
    quote:
      "De beste minor die ik heb gedaan. Je leert zoveel meer dan in een gewone minor omdat je écht bouwt aan projecten voor echte klanten.",
    name: "Lisa van Dijk",
    study: "HBO-ICT",
  },
  {
    stars: 5,
    quote:
      "Eindelijk een minor waar je niet de hele dag in een boek zit. Hands-on werken met nieuwe technologieën en een super team.",
    name: "Tom Bakker",
    study: "Technische Bedrijfskunde",
  },
  {
    stars: 5,
    quote:
      "Als design-student leerde ik hier samenwerken met developers en business-studenten. Dat had ik nergens anders kunnen doen.",
    name: "Priya Sharma",
    study: "Communication & Multimedia Design",
  },
];

const Testimonials = () => {
  return (
    <section id="ervaringen" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Ervaringen
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Wat studenten zeggen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-heading font-bold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{t.study}</p>
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
