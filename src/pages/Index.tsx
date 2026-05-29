import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SharpEdgeSection from "@/components/home/SharpEdgeSection";
import ValuePillarsSection from "@/components/home/ValuePillarsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhyNowSection from "@/components/home/WhyNowSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import FounderSection from "@/components/home/FounderSection";
import { CTASection } from "@/components/ui-kit";

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
      <CTASection title={<>Put the human back into <span className="gradient-brand">Customer Success.</span></>} />
    </Layout>
  );
};

export default Index;
