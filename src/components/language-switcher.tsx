"use client";

import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "vi" ? "en" : "vi";
    setLanguage(newLanguage);
  };

  return (
    <Button
      variant="outline"
      size="default"
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === "vi" ? "EN" : "VI"}</span>
    </Button>
  );
}
