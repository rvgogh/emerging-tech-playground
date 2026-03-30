import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();

  const options: { value: Lang; label: string }[] = [
    { value: "nl", label: "NL" },
    { value: "en", label: "EN" },
  ];

  return (
    <div className="flex items-center rounded-full border border-border bg-secondary p-0.5 gap-0.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setLang(opt.value)}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
            lang === opt.value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
