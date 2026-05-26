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
      "Each account gets a structured narrative: the context behind the facts, written up and kept current as new calls and emails come in.",
  },
  {
    icon: UserCheck,
    title: "Your team takes ownership",
    description:
      "The AI proposes updates as new data comes in, and your CSMs decide what's true. Nothing changes without a human signing off.",
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
