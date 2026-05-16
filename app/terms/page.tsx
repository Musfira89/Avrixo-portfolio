import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { standaloneRoutes } from "@/lib/site-data";

export default function TermsPage() {
  return <EnterpriseRoutePage route={standaloneRoutes.terms} />;
}
