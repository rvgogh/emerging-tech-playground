import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import logo from "@/assets/ETP_logo_transparant.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t(translations.nav.interests), href: "#interessegebieden" },
    { label: t(translations.nav2.projects), href: "/projecten", isRoute: true },
    { label: t(translations.nav.why), href: "#waarom" },
    { label: t(translations.nav.practical), href: "#praktisch" },
    { label: t(translations.nav.experiences), href: "#ervaringen" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="ETP Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <LanguageSelector />
          <Button asChild>
            <a href="#contact">{t(translations.nav.cta)}</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button className="w-full" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>
              {t(translations.nav.cta)}
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
