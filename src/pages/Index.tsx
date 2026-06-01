import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import DefinitionLead from "@/components/home/DefinitionLead";
import ProblemSection from "@/components/home/ProblemSection";
import SharpEdgeSection from "@/components/home/SharpEdgeSection";
import ValuePillarsSection from "@/components/home/ValuePillarsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhyNowSection from "@/components/home/WhyNowSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import FounderSection from "@/components/home/FounderSection";
import FAQSection from "@/components/home/FAQSection";
import { CTASection } from "@/components/ui-kit";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Cohvia — The Customer Context Platform for Customer Success"
        description="Cohvia is the Customer Context Platform for B2B SaaS. AI-generated Customer Narratives, collaborative success plans, risk signals, and a branded customer portal."
        path="/"
      />
      <HeroSection />
      <DefinitionLead />
      <ProblemSection />
      <SharpEdgeSection />
      <ValuePillarsSection />
      <HowItWorksSection />
      <WhyNowSection />
      <IntegrationsSection />
      <FounderSection />
      <FAQSection />
      <CTASection title={<>Put the human back into <span className="gradient-brand">Customer Success.</span></>} />
    </Layout>
  );
};

export default Index;
