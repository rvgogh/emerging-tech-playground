import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import logo from "@/assets/ETP_logo_transparant.png";
import PrivacyModal from "@/components/PrivacyModal";

const obfuscatedEmail = () => {
  const parts = ["rwa.vangogh", "avans.nl"];
  return parts.join("@");
};

const Footer = () => {
  const { t } = useLanguage();
  const nav = translations.nav;
  const f = translations.footer;

  const footerLinks = [
    { label: t(nav.interests), href: "#interessegebieden" },
    { label: t(translations.nav2.projects), href: "/projecten", isRoute: true },
    { label: t(nav.why), href: "#waarom" },
    { label: t(nav.practical), href: "#praktisch" },
    { label: t(nav.experiences), href: "#ervaringen" },
    { label: t(nav.contact), href: "#contact" },
  ];

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
            {footerLinks.map((l) =>
              (l as any).isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              )
            )}
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

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Emerging Technologies Playground. {t(f.rights)}</span>
          <PrivacyModal>
            <button className="hover:text-white transition-colors underline">
              {t(translations.privacy.title)}
            </button>
          </PrivacyModal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
