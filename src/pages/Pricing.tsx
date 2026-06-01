import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";
import { PageHero, Section, BrandLink, CTASection } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For a small team starting to build a real CS practice.",
    features: [
      "Up to 25 accounts",
      "Account Narratives (AI-generated)",
      "Basic Success Plans",
      "1 team member",
      "Community support",
    ],
    cta: "Get started free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per user / month",
    description: "For a growing CS team that needs visibility across the whole book.",
    features: [
      "Unlimited accounts",
      "Advanced Narratives + Ask Cohvia",
      "Collaborative Success Plans",
      "Risk Signals & Alerts",
      "Customer Portal (branded)",
      "Workflows & Automations",
      "Integrations (Salesforce, Slack, and more)",
      "Priority support",
    ],
    cta: "Sign up free",
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
    cta: "Contact sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Pricing"
        title="Start free. Pay when the book grows."
        subtitle="No credit card to begin, and no surprise line items later. The Free tier is a real product, not a trial."
      />

      <Section pad="md">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "rounded-xl p-8 flex flex-col transition-all",
                tier.highlighted
                  ? "border-2 border-primary bg-card relative"
                  : "surface-card",
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full gradient-brand-bg px-3 py-1 text-xs font-semibold text-foreground">
                    Recommended
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold">{tier.price}</span>
                {tier.period !== "forever" && tier.period !== "tailored to your org" && (
                  <span className="text-sm text-muted-foreground">
                    / {tier.period.replace("per ", "")}
                  </span>
                )}
              </div>
              <p className="text-sm text-secondary-foreground mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-secondary-foreground"
                  >
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <BrandLink
                href={tier.name === "Enterprise" ? "mailto:hello@cohvia.com" : "https://app.cohvia.com/sign-up"}
                variant={tier.highlighted ? "brand" : "ghost"}
                className="w-full"
              >
                {tier.cta}
              </BrandLink>
            </div>
          ))}
        </div>
      </Section>

      <CTASection title={<>Put the why back into the relationship.</>} />
    </Layout>
  );
};

export default Pricing;
