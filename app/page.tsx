import { HeroSection } from "@/components/home/HeroSection";
import { Projects } from "@/components/home/Projects";
import { TrustedBy } from "@/components/home/TrustedBy";
import {Services} from "@/components/home/Services"
import {Methodology} from "@/components/home/Methodology"
import { StrategyProcess } from "@/components/home/StrategyProcess";
import { EnterpriseTrust } from "@/components/home/EnterpriseTrust";
import { LeadCapture } from "@/components/home/LeadCapture";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <Services />
      <Projects />
      <Methodology />
      <EnterpriseTrust />

      <StrategyProcess />
      <LeadCapture />
    </>
  );
}
