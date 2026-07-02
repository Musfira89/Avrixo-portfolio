import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { standaloneRoutes } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy",
  description:
    "How Avrixo handles confidential client strategy, technical material, and operational context.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <EnterpriseRoutePage route={standaloneRoutes.privacy} />;
}
