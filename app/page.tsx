import { HeroSection } from "@/components/home/HeroSection";
import { Projects } from "@/components/home/Projects";
import { TrustedBy } from "@/components/home/TrustedBy";
import {Services} from "@/components/home/Services"
import {Methodology} from "@/components/home/Methodology"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <Services />
      <Projects />
      <Methodology />
    </>
  );
}
