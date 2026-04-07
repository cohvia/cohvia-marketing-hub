import { ArrowRightLeft, BookOpen, Users, Shield, MessageSquare } from "lucide-react";

const features = [
  {
    icon: ArrowRightLeft,
    title: "Sales → CS Handover",
    description:
      "AEs capture what they know at close — why the customer bought, what was promised, what success looks like — in a structured, fast flow. No more context lost in CRM notes.",
  },
  {
    icon: BookOpen,
    title: "Account Narratives",
    description:
      "AI enriches every handover with CRM data, call recordings, and emails to build a living account narrative the CSM can trust from day one — and that stays current as the relationship evolves.",
  },
  {
    icon: Users,
    title: "Success Plans",
    description:
      "Auto-generated, collaborative plans with milestones your team and your customers can track together. Everyone stays aligned on what 'success' actually looks like.",
  },
  {
    icon: Shield,
    title: "Risk Signals",
    description:
      "AI monitors engagement, sentiment, and usage to surface churn risk before renewals — so your team can act while there's still time.",
  },
  {
    icon: MessageSquare,
    title: "Customer Portal",
    description:
      "A branded, self-service portal where customers see their success plan, track milestones, and stay connected to their CS team — no more one-way reporting.",
  },
];

const FeatureWalkthroughSection = () => (
  <section className="py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Built for how CS teams actually work
        </h2>
      </div>

      <div className="space-y-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="surface-card rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 transition-all hover:border-primary/30"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary/10">
              <feature.icon size={22} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div className="w-full md:w-80 h-44 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
              <span className="text-xs text-muted-foreground">
                Screenshot coming soon
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureWalkthroughSection;
