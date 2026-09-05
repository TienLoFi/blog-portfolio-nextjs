"use client";

import Link from "next/link";

import { NgocTienMark } from "@/components/ngoc-tien-mark";
import { LanguageSwitcher } from "@/components/language-switcher";
import { NavItemGitHub } from "@/components/nav-item-github";
import { NavItemRSS } from "@/components/nav-item-rss";
import { ToggleTheme } from "@/components/toggle-theme";
import { useTranslation } from "@/hooks/use-translation";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link
            href="/"
            aria-label="Ngọc Tiến"
            className="mr-6 flex items-center space-x-2"
          >
            <NgocTienMark className="h-6" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/blog"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {t("common.blog")}
            </Link>
            <Link
              href="/projects"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {t("common.projects")}
            </Link>
            <Link
              href="/about"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {t("common.about")}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add search component here if needed */}
          </div>
          <nav className="flex items-center space-x-2">
            <LanguageSwitcher />
            <NavItemRSS />
            <NavItemGitHub />
            <ToggleTheme />
          </nav>
        </div>
      </div>
    </header>
  );
}
