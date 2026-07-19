import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Projects } from "@/components/home/Projects";
import { Services } from "@/components/home/Services";
import { Methodology } from "@/components/home/Methodology";
import { Industries } from "@/components/home/Industries";
import { TechStack } from "@/components/home/TechStack";
import { Insights } from "@/components/home/Insights";
import { Impact } from "@/components/home/Impact";
import { Testimonial } from "@/components/home/Testimonial";
import { RiskReversal } from "@/components/home/RiskReversal";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      {/* Hook: a specific, differentiated promise */}
      <HeroSection />
      {/* Honest signal: the production stack we build on */}
      <TrustedBy />
      {/* "What exactly do you offer?" */}
      <Services />
      {/* "How do you work?" the core differentiator */}
      <Methodology />
      {/* "Can you actually build this?" real StructumAI proof */}
      <Projects />
      {/* "Who do you serve?" */}
      <Industries />
      {/* "What's actually under the hood?" */}
      <TechStack />
      {/* Thought leadership, drives to real /resources content */}
      <Insights />
      {/* Credibility: verifiable numbers + why teams choose Avrixo */}
      <Impact />
      {/* Working philosophy, framed honestly (not a borrowed client quote) */}
      <Testimonial />
      {/* "What if it goes wrong?" risk reversal (canonical commitments section) */}
      <RiskReversal />
      {/* Convert */}
      <CTASection />
    </>
  );
}
