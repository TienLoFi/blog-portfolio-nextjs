"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "vi" | "en";

export const DEFAULT_LANGUAGE: Language = "vi";

export function parseLanguage(value: string | null): Language | null {
  return value === "vi" || value === "en" ? value : null;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const storedLanguage = parseLanguage(localStorage.getItem("language"));

    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const updateLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
    document.cookie = `NEXT_LOCALE=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = nextLanguage;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
