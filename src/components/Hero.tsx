import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="over"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(160 60% 45%) 0%, hsl(127 40% 54%) 50%, hsl(100 50% 50%) 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium tracking-wide backdrop-blur-sm">
          HBO Minor — Semester 2
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
          Combineer Tech, Engineering, Design & Business
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          In één semester werk je met echte opdrachtgevers aan innovatieve
          projecten. Geen tentamens, wel hands-on ervaring met emerging
          technologies.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold text-base px-8"
            asChild
          >
            <a href="#contact">Schrijf je in</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 font-semibold text-base px-8"
            asChild
          >
            <a href="#disciplines">Ontdek de disciplines</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#disciplines"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce"
        aria-label="Scroll naar beneden"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
