"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { CollapsibleList } from "@/components/collapsible-list";
import { useTranslation } from "@/hooks/use-translation";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  const { t } = useTranslation();
  return (
    <Panel id="projects" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>{t("profile.projects.title")}</PanelTitle>
      </PanelHeader>

      <AccordionPrimitive.Root
        type="single"
        defaultValue="portfolio-website"
        collapsible
      >
        <CollapsibleList
          items={PROJECTS}
          renderItem={(item) => <ProjectItem project={item} />}
        />
      </AccordionPrimitive.Root>
    </Panel>
  );
}
