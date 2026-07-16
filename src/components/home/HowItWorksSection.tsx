import { Link2, Sparkles, UserCheck, Share2 } from "lucide-react";
import { Section, SectionHeader, StepCard } from "@/components/ui-kit";

const steps = [
  {
    icon: Link2,
    title: "Connect your tools",
    description:
      "CRM, calls, email, and support tickets — pulled in automatically.",
  },
  {
    icon: Sparkles,
    title: "AI builds the understanding",
    description:
      "A structured, cited narrative per account, kept current as new signals arrive.",
  },
  {
    icon: UserCheck,
    title: "Your team takes ownership",
    description:
      "AI proposes updates. CSMs approve. Nothing ships without a human sign-off.",
  },
  {
    icon: Share2,
    title: "Customers see the progress",
    description:
      "Plans and goals shared through a branded portal customers actually use.",
  },
];

const HowItWorksSection = () => (
  <Section pad="lg">
    <SectionHeader eyebrow="How it works" title="How Cohvia works" />
    <div className="grid md:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <StepCard key={i} step={i + 1} {...step} />
      ))}
    </div>
  </Section>
);

export default HowItWorksSection;
