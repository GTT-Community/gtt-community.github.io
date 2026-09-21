import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.problem": "Problem",
    "nav.approach": "Approach",
    "nav.ecosystem": "Ecosystem",
    "nav.methodology": "Methodology",
    "nav.gttmethod21": "GTT-method 2.1",
    "nav.faq": "FAQ",
    "nav.manual": "Manual",
    "nav.github": "GitHub",
    "nav.docs": "GTT-method Docs",
    "lang.es": "Español",
    "lang.en": "English",
    "footer.text": "GTT-method — Governance Through Thinking",
    "footer.tags": "Open Source • AI-Assisted Software Development • SDD • Context Engineering • AI Coding Agents",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.problem": "Problema",
    "nav.approach": "Enfoque",
    "nav.ecosystem": "Ecosistema",
    "nav.methodology": "Metodología",
    "nav.gttmethod21": "GTT-method 2.1",
    "nav.faq": "Preguntas",
    "nav.manual": "Manual",
    "nav.github": "GitHub",
    "nav.docs": "GTT-method Docs",
    "lang.es": "Español",
    "lang.en": "English",
    "footer.text": "GTT-method — Governance Through Thinking",
    "footer.tags": "Código Abierto • Desarrollo de Software Asistido por IA • SDD • Context Engineering • Agentes de IA",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
