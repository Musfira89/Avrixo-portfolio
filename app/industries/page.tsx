import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { industryRoutes, sectionOverviewRoutes } from "@/lib/site-data";

export default function IndustriesPage() {
  return <EnterpriseRoutePage route={sectionOverviewRoutes.industries} related={industryRoutes} />;
}
