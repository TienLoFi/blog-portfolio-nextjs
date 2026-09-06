"use client";

import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";
import { useTranslation } from "@/hooks/use-translation";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  const { t } = useTranslation();

  return (
    <Panel id="about" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>{t("profile.about.title")}</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <Markdown>{t("about")}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
