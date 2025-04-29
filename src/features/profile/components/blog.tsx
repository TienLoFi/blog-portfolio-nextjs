"use client";
import dayjs from "dayjs";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { PostItem } from "@/components/post-item";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { Post } from "@/types/blog";

import { Panel, PanelHeader, PanelTitle } from "./panel";

interface BlogProps {
  posts: Post[];
}

export function Blog({ posts }: BlogProps) {
  const { t } = useTranslation();

  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Blog</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-grid"></div>
          <div className="border-l border-grid"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {posts
            .slice()
            .sort((a, b) =>
              dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
            )
            .slice(0, 4)
            .map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
        </div>
      </div>

      <div className="screen-line-before flex justify-center">
        <Button asChild>
          <Link href="/blog">
            <span>{t("allPosts")}</span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
