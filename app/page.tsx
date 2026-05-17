import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Services } from "@/components/home/Services";
import { Projects } from "@/components/home/Projects";
import { Methodology } from "@/components/home/Methodology";
import { Impact } from "@/components/home/Impact";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <Services />
      <Projects />
      <Methodology />
      <Impact />
      <CTASection />
    </>
  );
}
