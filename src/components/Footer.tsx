import { Linkedin, Mail } from "lucide-react";
import logo from "@/assets/ETP_logo_transparant.png";

const obfuscatedEmail = () => {
  const parts = ["rwa.vangogh", "avans.nl"];
  return parts.join("@");
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/70 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ETP Logo" className="h-8 w-auto brightness-0 invert" />
            <span className="font-heading font-bold text-white text-sm">
              Emerging Technologies Playground
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            {[
              { label: "Interessegebieden", href: "#interessegebieden" },
              { label: "Waarom deze minor?", href: "#waarom" },
              { label: "Praktisch", href: "#praktisch" },
              { label: "Ervaringen", href: "#ervaringen" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/avans-minor-etp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${obfuscatedEmail()}`;
              }}
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Emerging Technologies Playground. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
