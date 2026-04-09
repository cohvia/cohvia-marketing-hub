import { ArrowRightLeft, BookOpen, Users, Shield, MessageSquare } from "lucide-react";

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
  <section className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-center mb-16">
        <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Built for how CS teams actually work
        </h2>
      </div>

      <div className="space-y-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="surface-card rounded-xl p-8 md:p-10 transition-all hover:border-primary/30"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary/10">
                <feature.icon size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-primary uppercase tracking-[0.15em] mb-1">
                  {feature.label}
                </p>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary-foreground leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureWalkthroughSection;
