import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { aboutRoutes } from "@/lib/site-data";

export default function AboutPage() {
  return <EnterpriseRoutePage route={aboutRoutes[0]} related={aboutRoutes} />;
}
