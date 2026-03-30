import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <T extends string | Record<string, string>>(obj: T | Record<Lang, T extends Record<string, string> ? string : string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("nl");

  const t = (obj: any): string => {
    if (typeof obj === "string") return obj;
    if (obj && typeof obj === "object" && lang in obj) return obj[lang];
    return String(obj ?? "");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
