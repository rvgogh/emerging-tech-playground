import { GraduationCap, CalendarDays, Clock, MapPin, UserCheck } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    label: "Omvang",
    value: "30 EC",
  },
  {
    icon: CalendarDays,
    label: "Periode",
    value: "Voor- en najaar",
  },
  {
    icon: Clock,
    label: "Vorm",
    value: "Voltijd",
  },
  {
    icon: MapPin,
    label: "Locatie",
    value: "Op locatie bij een bedrijf of organisatie",
    sub: "Zie projecten voor meer info",
  },
  {
    icon: UserCheck,
    label: "Toelating",
    value: "3e jaars studenten met een opleiding in het domein techniek, design of innovatie",
  },
];

const PracticalInfo = () => {
  return (
    <section id="praktisch" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Praktisch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Op een rij
          </h2>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                {item.label}
              </span>
              <span className="font-heading font-bold text-foreground text-lg leading-snug">
                {item.value}
              </span>
              {item.sub && (
                <span className="text-muted-foreground text-xs mt-1">
                  {item.sub}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
