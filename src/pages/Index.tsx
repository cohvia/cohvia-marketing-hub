import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import BeyondHandoverSection from "@/components/home/BeyondHandoverSection";
import FeatureWalkthroughSection from "@/components/home/FeatureWalkthroughSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import WaitlistSection from "@/components/home/WaitlistSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BeyondHandoverSection />
      <FeatureWalkthroughSection />
      <SocialProofSection />
      <WaitlistSection />
    </Layout>
  );
};

export default Index;
