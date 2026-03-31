import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-primary-foreground p-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/80">
          {lang === "nl"
            ? "Deze website gebruikt alleen functionele cookies voor een optimale ervaring. Geen tracking, geen advertenties."
            : "This website only uses functional cookies for an optimal experience. No tracking, no ads."}
        </p>
        <Button onClick={accept} size="sm" className="shrink-0">
          {lang === "nl" ? "Akkoord" : "Accept"}
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
