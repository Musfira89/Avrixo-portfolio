import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { aboutRoutes } from "@/lib/site-data";

export default function CareersPage() {
  const route = aboutRoutes.find((item) => item.slug === "careers") ?? aboutRoutes[0];

  return <EnterpriseRoutePage route={route} related={aboutRoutes} />;
}
