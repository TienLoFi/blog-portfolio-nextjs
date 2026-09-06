"use client";

import { MoonStar, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { useLanguage } from "@/hooks/use-language";

import { SITE_NAV } from "../data/site-content";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <div className="np-page">
      <header className="np-nav">
        <Link className="np-brand" href="/" aria-label="Ngọc Tiến">
          <span className="np-mark">NT</span>
          <span>Ngọc Tiến</span>
        </Link>
        <nav className="np-links" aria-label="Điều hướng chính">
          {SITE_NAV.map((item) => (
            <Link
              className={pathname === item.href ? "active" : ""}
              href={item.href}
              key={item.href}
            >
              {item.label[language]}
            </Link>
          ))}
        </nav>
        <div className="np-controls">
          <button
            type="button"
            onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
            aria-label="Đổi ngôn ngữ"
          >
            {language.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Đổi giao diện"
          >
            {isMounted && resolvedTheme === "dark" ? <MoonStar /> : <Sun />}
          </button>
        </div>
      </header>
      {children}
      <footer className="np-footer">
        <span>© 2026 Ngọc Tiến</span>
        <span>AI-Powered Digital Marketer</span>
        <span>Việt Nam</span>
      </footer>
    </div>
  );
}

export function TechBackground() {
  return (
    <>
      <span className="np-grid" aria-hidden="true" />
      <span className="np-network" aria-hidden="true" />
    </>
  );
}

export function Chips({ items }: { items: readonly string[] }) {
  return (
    <div className="np-chips">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
