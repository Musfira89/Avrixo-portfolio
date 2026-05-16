import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { standaloneRoutes } from "@/lib/site-data";

export default function InvestorsPage() {
  return <EnterpriseRoutePage route={standaloneRoutes.investors} />;
}
