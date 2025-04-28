import React from "react";

import { SOCIAL_LINKS } from "../../data/social-links";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Find My With Me</PanelTitle>
      </PanelHeader>
      <h2 className="sr-only">Social Links</h2>
      <div className="flex flex-wrap justify-center gap-2 py-1">
        {SOCIAL_LINKS.map((link, index) => (
          <SocialLinkItem key={index} {...link} />
        ))}
      </div>
    </Panel>
  );
}
