import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";

const PrivacyModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  const content =
    lang === "nl"
      ? {
          title: "Privacyverklaring",
          sections: [
            {
              heading: "Welke gegevens verzamelen wij?",
              text: "Wanneer je het contactformulier invult, verzamelen wij je e-mailadres en eventueel je vraag. We gebruiken geen tracking cookies of analysetools van derden.",
            },
            {
              heading: "Waarvoor gebruiken wij je gegevens?",
              text: "Je gegevens worden uitsluitend gebruikt om je vraag te beantwoorden en je te informeren over de minor Emerging Technologies Playground.",
            },
            {
              heading: "Delen met derden",
              text: "Wij delen je gegevens niet met derden, tenzij dit noodzakelijk is voor de uitvoering van onze dienstverlening of wettelijk verplicht is.",
            },
            {
              heading: "Bewaartermijn",
              text: "Je gegevens worden niet langer bewaard dan noodzakelijk voor het doel waarvoor ze zijn verzameld.",
            },
            {
              heading: "Je rechten",
              text: "Je hebt het recht om je gegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact op via het contactformulier.",
            },
          ],
        }
      : {
          title: "Privacy Statement",
          sections: [
            {
              heading: "What data do we collect?",
              text: "When you fill in the contact form, we collect your email address and optionally your question. We do not use tracking cookies or third-party analytics.",
            },
            {
              heading: "How do we use your data?",
              text: "Your data is only used to answer your question and inform you about the Emerging Technologies Playground minor.",
            },
            {
              heading: "Sharing with third parties",
              text: "We do not share your data with third parties unless required for our services or by law.",
            },
            {
              heading: "Retention period",
              text: "Your data is not stored longer than necessary for the purpose it was collected.",
            },
            {
              heading: "Your rights",
              text: "You have the right to view, correct, or delete your data. Contact us through the contact form.",
            },
          ],
        };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            {content.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          {content.sections.map((s) => (
            <div key={s.heading}>
              <h3 className="font-semibold text-sm text-foreground">
                {s.heading}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{s.text}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyModal;
