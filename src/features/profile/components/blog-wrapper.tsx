import { getAllPosts } from "@/data/blog";

import { Blog } from "./blog";

export function BlogWrapper() {
  const allPosts = getAllPosts();
  return <Blog posts={allPosts} />;
}
