import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ] as const;

  return (
    <div className="flex items-center gap-2">
      <div className="hidden sm:flex items-center gap-1 bg-secondary rounded-lg p-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1 rounded text-sm font-medium transition-all ${
              language === lang.code
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-background"
            }`}
            title={lang.name}
          >
            {lang.flag}
          </button>
        ))}
      </div>

      {/* Mobile dropdown */}
      <div className="sm:hidden relative group">
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
          <Globe size={20} className="text-foreground" />
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                language === lang.code
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
