"use client";

import { Suspense } from "react";
import MarkdownAsync from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export function Markdown(props: React.ComponentProps<typeof MarkdownAsync>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MarkdownAsync
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          [
            rehypeRaw,
            {
              passThrough: [
                "mdxFlowExpression",
                "mdxJsxFlowElement",
                "mdxJsxTextElement",
                "mdxTextExpression",
                "mdxjsEsm",
              ],
            },
          ],
          rehypeSanitize,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["subheading-anchor"],
                ariaLabel: "Link to section",
              },
            },
          ],
        ]}
        {...props}
      />
    </Suspense>
  );
}
