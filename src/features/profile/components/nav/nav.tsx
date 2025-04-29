"use client";

import React from "react";

import { useTranslation } from "@/hooks/use-translation"; // thêm import useTranslation
import { cn } from "@/lib/cn";

import { NAV_LINKS } from "../../config/nav";
import { NavItem } from "./nav-item";

export function Nav({
  className,
  activeId,
}: {
  className?: string;
  activeId?: string | null;
}) {
  const { t } = useTranslation(); // lấy hook dịch ngôn ngữ

  return (
    <nav
      className={cn(
        "flex h-8 items-center gap-3 font-mono text-sm text-muted-foreground",
        className
      )}
    >
      {NAV_LINKS.map(({ key, href }) => {
        const itemId = href?.split("#")[1] ?? "";
        const active = itemId === activeId;

        return (
          <NavItem key={href} href={href} active={active}>
            {t(`navigation.${key}`)} {/* dịch dựa theo key */}
          </NavItem>
        );
      })}
    </nav>
  );
}
