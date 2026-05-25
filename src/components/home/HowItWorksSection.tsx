import { Link2, Sparkles, UserCheck, Share2 } from "lucide-react";
import { Section, SectionHeader, StepCard } from "@/components/ui-kit";

const steps = [
  {
    icon: Link2,
    title: "Connect your tools",
    description:
      "Cohvia pulls from your CRM, call recordings, email, and support tickets.",
  },
  {
    icon: Sparkles,
    title: "AI builds the understanding",
    description:
      "Every account gets a structured narrative: why they bought, what success looks like, where things stand.",
  },
  {
    icon: UserCheck,
    title: "Your team takes ownership",
    description:
      "CSMs review, edit, and approve. AI proposes updates. Humans decide.",
  },
  {
    icon: Share2,
    title: "Customers see the progress",
    description:
      "Share plans and goals through a branded portal your customers actually use.",
  },
];

const HowItWorksSection = () => (
  <Section pad="sm">
    <SectionHeader eyebrow="How it works" title="How Cohvia works" />
    <div className="grid md:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <StepCard key={i} step={i + 1} {...step} />
      ))}
    </div>
  </Section>
);

export default HowItWorksSection;
