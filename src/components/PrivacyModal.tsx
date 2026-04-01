import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const PrivacyModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const p = translations.privacy;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            {t(p.title)}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          {p.sections.map((s, i) => (
            <div key={i}>
              <h3 className="font-semibold text-sm text-foreground">
                {t(s.heading)}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{t(s.text)}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyModal;
