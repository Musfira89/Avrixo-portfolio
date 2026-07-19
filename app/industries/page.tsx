import { IndustriesPage } from "@/components/pages/IndustriesPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries: Domain-Aware AI & Software",
  description:
    "Transformation patterns for data-heavy, workflow-heavy markets, built around real domain constraints, not generic AI demos.",
  path: "/industries",
});

export default function Industries() {
  return <IndustriesPage />;
}
