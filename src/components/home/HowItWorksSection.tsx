import { Link2, Layers, Heart, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Link2,
    label: "Connect",
    description:
      "Link your CRM, calls, email, and tickets through secure integrations.",
  },
  {
    icon: Layers,
    label: "Build",
    description:
      "AI generates a structured narrative for every account from day one.",
  },
  {
    icon: Heart,
    label: "Nurture",
    description:
      "Your team reviews, refines, and owns the story. AI proposes updates. Humans decide.",
  },
  {
    icon: TrendingUp,
    label: "Grow",
    description:
      "Customers see their progress through a branded portal. Aligned, informed, mutual.",
  },
];

const HowItWorksSection = () => (
  <section className="py-24 md:py-32 relative">
    <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
    <div className="mx-auto max-w-6xl px-6 relative">
      <div className="text-center mb-16">
        <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">
          How it works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          From connected to cultivated
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="surface-card rounded-xl p-8 text-center">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 bg-primary/10">
              <step.icon size={22} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.label}</h3>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
