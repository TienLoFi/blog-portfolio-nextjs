import fs from "node:fs";
import path from "node:path";

import type { Root } from "hast";
import type { Plugin } from "unified";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import { Index } from "@/__registry__/index";
import { UnistNode, UnistTree } from "@/types/unist";

export const rehypeComponent: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "component") {
        const name = node.properties?.name as string;
        if (!name) return;

        const component = Index[name];
        if (!component) return;

        const files = component.files;
        if (!files || !files.length) return;

        const src = files[0]?.path;
        if (!src) return;

        // Read the source file.
        const filePath = src;

        // Replace the component node with the source code.
        node.tagName = "pre";
        node.properties = {
          className: "language-tsx",
        };
        node.children = [
          {
            type: "text",
            value: filePath,
          },
        ];
      }
    });
  };
};

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}
