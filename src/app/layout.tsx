"use client";

import "@/styles/globals.css";

import { useEffect, useState } from "react";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";
import { LanguageProvider } from "@/hooks/use-language";
import { fontMono, fontSans } from "@/lib/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState("en"); // Default language is 'en'

  useEffect(() => {
    // Lấy cookie từ document.cookie
    const getUserLang = () => {
      const cookies = document.cookie
        .split("; ")
        .reduce((acc: Record<string, string>, cookie) => {
          const [key, value] = cookie.split("=");
          acc[key] = value;
          return acc;
        }, {});
      return cookies["NEXT_LOCALE"] || "en"; // Default to 'en' if no cookie is found
    };

    setLang(getUserLang());
  }, []);

  return (
    <html
      lang={lang}
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Thanks @shadcn-ui */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage['ngoctien.theme'] === 'dark' ||
                    ((!('ngoctien.theme' in localStorage) || localStorage['ngoctien.theme'] === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>

      <body>
        <LanguageProvider>
          <Providers>{children}</Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}
