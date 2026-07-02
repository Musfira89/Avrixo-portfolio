import { ResourcesPage } from "@/components/pages/ResourcesPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Resources — AI & SaaS Build Insights",
  description:
    "Playbooks and frameworks for leaders building AI-native products: transformation, technical due diligence, and readiness.",
  path: "/resources",
});

export default function Resources() {
  return <ResourcesPage />;
}
