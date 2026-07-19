import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { standaloneRoutes } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Engagement terms for Avrixo strategy, design, and engineering delivery: scope, milestones, and acceptance criteria.",
  path: "/terms",
});

export default function TermsPage() {
  return <EnterpriseRoutePage route={standaloneRoutes.terms} />;
}
