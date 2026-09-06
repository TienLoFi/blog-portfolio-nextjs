import dayjs from "dayjs";
import type { Metadata } from "next";

import { getAllPosts } from "@/data/blog";
import { KnowledgePage } from "@/features/portfolio-site/components/pages";
export const metadata: Metadata = { title: "Kho kiến thức | Ngọc Tiến" };
export default function Page() {
  const posts = getAllPosts()
    .slice()
    .sort((a, b) =>
      dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
    )
    .map((post) => ({
      slug: post.slug,
      title: post.metadata.title,
      description: post.metadata.description,
      date: dayjs(post.metadata.createdAt).format("DD.MM.YYYY"),
    }));
  return <KnowledgePage posts={posts} />;
}
