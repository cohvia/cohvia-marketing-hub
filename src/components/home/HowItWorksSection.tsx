import { Link2, Sparkles, UserCheck, Share2 } from "lucide-react";

const steps = [
  {
    icon: Link2,
    label: "Connect your tools",
    description:
      "Cohvia pulls from your CRM, call recordings, email, and support tickets.",
  },
  {
    icon: Sparkles,
    label: "AI builds the understanding",
    description:
      "Every account gets a structured narrative: why they bought, what success looks like, where things stand.",
  },
  {
    icon: UserCheck,
    label: "Your team takes ownership",
    description:
      "CSMs review, edit, and approve. AI proposes updates. Humans decide.",
  },
  {
    icon: Share2,
    label: "Customers see the progress",
    description:
      "Share plans and goals through a branded portal your customers actually use.",
  },
];

const HowItWorksSection = () => (
  <section className="py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-6 relative">
      <div className="text-center mb-16">
        <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">
          How it works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          How Cohvia works
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="surface-card rounded-xl p-8 relative">
            <div className="text-xs font-mono text-muted-foreground mb-4">
              0{i + 1}
            </div>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-primary/10">
              <step.icon size={20} className="text-primary" />
            </div>
            <h3 className="text-base font-semibold mb-2">{step.label}</h3>
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
