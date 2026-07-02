import { PortfolioPage } from "@/components/pages/PortfolioPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio — Products We've Designed & Engineered",
  description:
    "Real, production-grade SaaS platforms we built, broken down as technical case studies: problem, architecture, stack, and scope.",
  path: "/portfolio",
});

export default function Portfolio() {
  return <PortfolioPage />;
}
