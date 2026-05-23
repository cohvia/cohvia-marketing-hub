import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For small teams getting started with structured CS.",
    features: [
      "Up to 25 accounts",
      "Account Narratives (AI-generated)",
      "Basic Success Plans",
      "1 team member",
      "Community support",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per user / month",
    description: "For growing CS teams that need full visibility and control.",
    features: [
      "Unlimited accounts",
      "Advanced Narratives + AI Chat",
      "Collaborative Success Plans",
      "Risk Signals & Alerts",
      "Customer Portal (branded)",
      "Workflows & Automations",
      "Integrations (Salesforce, Slack, etc.)",
      "Priority support",
    ],
    cta: "Request Early Access",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to your org",
    description: "For teams that need enterprise-grade security, compliance, and scale.",
    features: [
      "Everything in Pro",
      "SSO / SAML",
      "Custom integrations",
      "Dedicated CSM",
      "SLA & uptime guarantees",
      "Advanced analytics",
      "Custom onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="gradient-hero absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-10 md:pt-20 md:pb-12 text-center relative">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Simple pricing, no surprises
          </h1>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
            Start free. Scale when you're ready. No credit card required.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-8 flex flex-col transition-all ${
                  tier.highlighted
                    ? "border-2 border-primary bg-card relative"
                    : "surface-card"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full gradient-brand-bg px-3 py-1 text-xs font-semibold text-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.period !== "forever" && tier.period !== "tailored to your org" && (
                    <span className="text-sm text-muted-foreground">/ {tier.period.replace("per ", "")}</span>
                  )}
                </div>
                <p className="text-sm text-secondary-foreground mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-secondary-foreground">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist"
                  className={`w-full text-center rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                    tier.highlighted
                      ? "gradient-brand-bg text-foreground hover:brightness-110"
                      : "border border-border text-secondary-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
