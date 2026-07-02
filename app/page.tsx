import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Projects } from "@/components/home/Projects";
import { Services } from "@/components/home/Services";
import { Methodology } from "@/components/home/Methodology";
import { Impact } from "@/components/home/Impact";
import { RiskReversal } from "@/components/home/RiskReversal";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      {/* Hook: a specific, differentiated promise */}
      <HeroSection />
      {/* Honest signal: the production stack we build on */}
      <TrustedBy />
      {/* "Can you actually build this?" — real StructumAI proof */}
      <Projects />
      {/* "What exactly do you offer?" */}
      <Services />
      {/* "How do you work?" — process with SOW baked in */}
      <Methodology />
      {/* Credibility: how we work + verifiable numbers */}
      <Impact />
      {/* "What if it goes wrong?" — risk reversal */}
      <RiskReversal />
      {/* Convert */}
      <CTASection />
    </>
  );
}
