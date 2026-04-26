import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SharpEdgeSection from "@/components/home/SharpEdgeSection";
import ValuePillarsSection from "@/components/home/ValuePillarsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhyNowSection from "@/components/home/WhyNowSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import FounderSection from "@/components/home/FounderSection";
import WaitlistSection from "@/components/home/WaitlistSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <SharpEdgeSection />
      <ValuePillarsSection />
      <HowItWorksSection />
      <WhyNowSection />
      <IntegrationsSection />
      <FounderSection />
      <WaitlistSection />
    </Layout>
  );
};

export default Index;
