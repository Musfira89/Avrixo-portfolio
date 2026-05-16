import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { resourceRoutes } from "@/lib/site-data";

export default function ResourcesPage() {
  const route = resourceRoutes.find((item) => item.href === "/resources") ?? resourceRoutes[0];

  return <EnterpriseRoutePage route={route} related={resourceRoutes} />;
}
