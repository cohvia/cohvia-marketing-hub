import { ArrowRightLeft, BookOpen, Users, Shield, MessageSquare } from "lucide-react";
import { Section, SectionHeader, FeatureCard } from "@/components/ui-kit";

const features = [
  {
    icon: ArrowRightLeft,
    label: "Sales Handover",
    title: "The why starts at close.",
    description:
      "AEs capture why the customer bought, what was promised, and what success looks like. AI enriches it from every connected source. The CSM inherits understanding, not a Slack message.",
  },
  {
    icon: BookOpen,
    label: "Account Narratives",
    title: "A living record of why.",
    description:
      "Eight structured sections — why they bought, what success looks like, where things stand, what you're worried about — built from real data, updated automatically, owned by your team. The whole story, always current.",
  },
  {
    icon: Users,
    label: "Success Plans",
    title: "Grow together, visibly.",
    description:
      "Collaborative plans with shared milestones and goals. Customers see progress, check off actions, and co-own outcomes through their own branded portal. Aligned, supported, and continuously progressing — together.",
  },
  {
    icon: Shield,
    label: "Risk Signals",
    title: "Know why before it's too late.",
    description:
      "AI surfaces declining engagement, negative sentiment, support spikes, and stalled plans. You see the warning signs while there's still time to act — and the narrative gives you the context to understand what's actually going wrong.",
  },
  {
    icon: MessageSquare,
    label: "Customer Portal",
    title: "Give every customer a home.",
    description:
      "A branded space where customers see their plan, their goals, their team, and their progress. Not a login to your internal tools. A shared space where the relationship lives.",
  },
];

const FeatureWalkthroughSection = () => (
  <Section pad="lg">
    <SectionHeader
      eyebrow="Features"
      title="Built for how CS teams actually work"
    />
    <div className="space-y-6">
      {features.map((feature, i) => (
        <FeatureCard key={i} {...feature} />
      ))}
    </div>
  </Section>
);

export default FeatureWalkthroughSection;
