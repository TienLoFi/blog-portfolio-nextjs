"use client";

import { AppProgressProvider } from "@bprogress/next";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";
import { PostHogProvider } from "./posthog-provider";
import { LanguageProvider } from "@/hooks/use-language";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <LanguageProvider>
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
            storageKey="chanhdai.theme"
          >
            <AppProgressProvider
              color="#2563eb"
              height="2px"
              delay={500}
              options={{ showSpinner: false }}
            >
              {children}
            </AppProgressProvider>
            <Toaster />
          </ThemeProvider>
        </PostHogProvider>
      </LanguageProvider>
    </JotaiProvider>
  );
}
