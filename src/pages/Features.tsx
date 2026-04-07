import Layout from "@/components/layout/Layout";
import { BookOpen, Users, Shield, MessageSquare, Sparkles } from "lucide-react";

const features = [
  {
    id: "narratives",
    icon: BookOpen,
    title: "Account Narratives",
    subtitle: "AI-written. Always current.",
    description:
      "Cohvia automatically synthesizes every touchpoint — emails, calls, support tickets, CRM updates — into a continuously updated account narrative. No more asking 'what's the latest with this account?'",
    details: [
      "AI-generated summaries updated in real time",
      "Full history of relationship context",
      "Handoff-ready — new CSMs get up to speed instantly",
    ],
  },
  {
    id: "plans",
    icon: Users,
    title: "Success Plans",
    subtitle: "Collaborative. Customer-facing.",
    description:
      "Build milestone-driven success plans that both your team and your customers can see. Track progress together, assign actions, and ensure everyone stays aligned on outcomes.",
    details: [
      "Shared visibility between CS team and customers",
      "Template-driven with full customization",
      "Milestone tracking with automated reminders",
    ],
  },
  {
    id: "risk",
    icon: Shield,
    title: "Risk Signals",
    subtitle: "Proactive alerts. No surprises.",
    description:
      "Cohvia monitors engagement patterns, sentiment, and usage data to surface risk before it becomes a problem. Your team gets alerted early — so they can act, not react.",
    details: [
      "AI-powered risk scoring across all signals",
      "Customizable alert thresholds",
      "Integrated with workflows and notifications",
    ],
  },
  {
    id: "portal",
    icon: MessageSquare,
    title: "Customer Portal",
    subtitle: "Branded. Self-service.",
    description:
      "Give your customers a branded portal where they can track their success plans, see key milestones, access resources, and communicate with their CS team — all in one place.",
    details: [
      "Fully branded with your company's identity",
      "Self-service access for customer stakeholders",
      "Built-in commenting and collaboration",
    ],
  },
  {
    id: "ai-chat",
    icon: Sparkles,
    title: "AI Chat",
    subtitle: "Contextual. Per-account.",
    description:
      "Ask questions about any account and get instant, context-aware answers. Cohvia's AI chat understands the full history of each relationship and gives you actionable intelligence.",
    details: [
      "Natural language queries about any account",
      "Grounded in real data — not hallucinations",
      "Suggests next best actions automatically",
    ],
  },
];

const Features = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="gradient-hero absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-16 md:pt-32 md:pb-20 text-center relative">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Features</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Everything your CS team needs, nothing it doesn't
          </h1>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
            Cohvia replaces the patchwork of spreadsheets, docs, and disconnected tools 
            with a single, AI-powered platform purpose-built for Customer Success.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className="surface-card rounded-xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-start transition-all hover:border-primary/30"
            >
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(26, 158, 143, 0.08)" }}>
                  <feature.icon size={22} className="text-primary" />
                </div>
                <p className="text-sm font-medium text-primary mb-1">{feature.subtitle}</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h2>
                <p className="text-secondary-foreground leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-secondary-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-[420px] h-56 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                <span className="text-xs text-muted-foreground">Screenshot coming soon</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Features;
