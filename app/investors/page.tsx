import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { standaloneRoutes } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "For Investors: Technical Partnership",
  description:
    "Technical due diligence, architecture review, and post-investment delivery support for investors backing AI and SaaS companies.",
  path: "/investors",
});

export default function InvestorsPage() {
  return <EnterpriseRoutePage route={standaloneRoutes.investors} />;
}
