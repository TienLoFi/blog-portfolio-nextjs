import type { Metadata } from "next";

import { PortfolioPage } from "@/features/portfolio-site/components/pages";
export const metadata: Metadata = { title: "Portfolio | Ngọc Tiến" };
export default function Page() {
  return <PortfolioPage />;
}
