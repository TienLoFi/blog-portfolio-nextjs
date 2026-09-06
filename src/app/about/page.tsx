import type { Metadata } from "next";

import { AboutPage } from "@/features/portfolio-site/components/pages";
export const metadata: Metadata = { title: "Về mình | Ngọc Tiến" };
export default function Page() {
  return <AboutPage />;
}
