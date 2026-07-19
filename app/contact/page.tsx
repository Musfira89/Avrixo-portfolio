import { ContactPage } from "@/components/pages/ContactPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Avrixo: Start Your AI or SaaS Project",
  description:
    "Tell us what you need to build. Get a fixed-scope path to production, a recommended next step, and a strategy-call agenda within 24 hours.",
  path: "/contact",
});

export default function Contact() {
  return <ContactPage />;
}
