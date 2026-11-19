import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ValueProposition from "@/components/sections/ValueProposition";
import ConfiguratorPreview from "@/components/sections/ConfiguratorPreview";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import BrandStory from "@/components/sections/BrandStory";
import Testimonials from "@/components/sections/Testimonials";
import ScarcityBanner from "@/components/sections/ScarcityBanner";
import TrustBar from "@/components/sections/TrustBar";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ValueProposition />
      <ConfiguratorPreview />
      <FeaturedCollection />
      <BrandStory />
      <Testimonials />
      <ScarcityBanner />
      <TrustBar />
      <FinalCTA />
    </>
  );
}
