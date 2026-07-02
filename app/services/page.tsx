import { ServicesPage } from "@/components/pages/ServicesPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services — AI, SaaS, Data & Cloud Engineering",
  description:
    "AI automation, RAG products, SaaS product engineering, data platforms, cloud/DevOps, and product design — planned and built together by one team.",
  path: "/services",
});

export default function Services() {
  return <ServicesPage />;
}
