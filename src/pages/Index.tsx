import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import FeatureWalkthroughSection from "@/components/home/FeatureWalkthroughSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import WaitlistSection from "@/components/home/WaitlistSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <FeatureWalkthroughSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <SocialProofSection />
      <WaitlistSection />
    </Layout>
  );
};

export default Index;
