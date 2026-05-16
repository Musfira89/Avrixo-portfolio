import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { sectionOverviewRoutes, serviceRoutes } from "@/lib/site-data";

export default function ServicesPage() {
  return <EnterpriseRoutePage route={sectionOverviewRoutes.services} related={serviceRoutes} />;
}
