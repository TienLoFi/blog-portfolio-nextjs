"use client";

import { useLanguage } from "@/hooks/use-language";
import enMessages from "@/messages/en.json";
import viMessages from "@/messages/vi.json";
import { useMemo } from "react";

type Messages = typeof enMessages;

export function useTranslation() {
  const { language } = useLanguage();
  const messages: Messages = useMemo(
    () => (language === "en" ? enMessages : viMessages),
    [language]
  );

  const t = (key: string) => {
    if (!key) return "";

    const keys = key.split(".");
    let value: Record<string, unknown> | string = messages;

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k] as Record<string, unknown> | string;
      } else {
        return key;
      }
    }

    return (value as string) || key;
  };
  return useMemo(() => ({ t, language }), [language, messages]);
}
