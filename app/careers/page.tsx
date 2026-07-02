import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { aboutRoutes } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers — Build Meaningful AI Products",
  description:
    "Join a lean, craft-focused team building production AI and SaaS across product strategy, design, engineering, data, and cloud.",
  path: "/careers",
});

export default function CareersPage() {
  const route = aboutRoutes.find((item) => item.slug === "careers") ?? aboutRoutes[0];

  return <EnterpriseRoutePage route={route} related={aboutRoutes} />;
}
