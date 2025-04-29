"use client";

import React from "react";

import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/cn";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";
import { TeckStackContent } from "./teck-stack-content";

export function TeckStack() {
  const { t } = useTranslation();
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>{t("techStack.title")}</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[image:radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <TeckStackContent />
      </PanelContent>
    </Panel>
  );
}
