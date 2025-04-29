"use client";
import { CollapsibleList } from "@/components/collapsible-list";
import { useTranslation } from "@/hooks/use-translation";

import { CERTIFICATIONS } from "../../data/certifications";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { CertificationItem } from "./certification-item";

export function Certifications() {
  const { t } = useTranslation();
  return (
    <Panel id="certs" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>{t("profile.certifications.title")}</PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        renderItem={(item) => <CertificationItem certification={item} />}
      />
    </Panel>
  );
}
