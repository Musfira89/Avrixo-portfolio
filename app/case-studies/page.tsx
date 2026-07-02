import { CaseStudyIndex } from "@/components/common/CaseStudyIndex";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies — How We Build Production SaaS",
  description:
    "Detailed technical case studies of the StructumAI platforms we engineered — architecture, stack decisions, and scope.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return <CaseStudyIndex />;
}
