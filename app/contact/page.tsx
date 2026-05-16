import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { LeadCapture } from "@/components/home/LeadCapture";
import { standaloneRoutes } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <EnterpriseRoutePage route={standaloneRoutes.contact} />
      <LeadCapture />
    </>
  );
}
