import React from "react";

import { useTranslation } from "@/hooks/use-translation";

import { SOCIAL_LINKS } from "../../data/social-links";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  const { t } = useTranslation();

  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>{t("profile.socialLinks.title")}</PanelTitle>
      </PanelHeader>
      <h2 className="sr-only">{t("profile.socialLinks.ariaLabel")}</h2>
      <div className="flex flex-wrap justify-center gap-2 py-1">
        {SOCIAL_LINKS.map((link, index) => (
          <SocialLinkItem key={index} {...link} />
        ))}
      </div>
    </Panel>
  );
}
