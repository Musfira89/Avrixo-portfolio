import { AboutPage } from "@/components/pages/AboutPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Avrixo — One Team, Strategy to Deploy",
  description:
    "Avrixo combines product strategy, design, AI engineering, data, and cloud under one roof to ship production-grade software end to end.",
  path: "/about",
});

export default function About() {
  return <AboutPage />;
}
