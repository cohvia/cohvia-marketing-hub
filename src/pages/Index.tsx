import Layout from "@/components/layout/Layout";
import { ArrowRight, ArrowRightLeft, BookOpen, Users, Shield, MessageSquare, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

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

const Index = () => {
  return (
    <Layout>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-32 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-8 opacity-0 animate-fade-in-up">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-secondary-foreground">
              AI-native Customer Success Platform
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            Put the human back{" "}
            <span className="text-primary">into Customer Success</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
            AI handles the context. Your team handles the relationship.
            Cohvia gives CSMs everything they need to know about every account — 
            so they can spend time with customers, not searching for answers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Request Early Access
              <ArrowRight size={16} />
            </a>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* ─── The Core Problem ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 text-center">
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-center">
            When deals close, critical context dies
          </h2>

          <div className="space-y-6 text-lg text-secondary-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              Your AE just closed a six-figure deal. They know{" "}
              <span className="text-foreground font-medium">why</span> the customer bought,{" "}
              <span className="text-foreground font-medium">what</span> was promised, and{" "}
              <span className="text-foreground font-medium">what success looks like</span>.
            </p>
            <p>
              But that knowledge? It dies in a CRM notes field. Or a rushed 15-minute
              Slack summary. Or worse — it lives only in the AE's head.
            </p>
            <p>
              The CSM starts every new relationship{" "}
              <span className="text-foreground font-medium">half-blind</span>. Re-asking
              questions the customer already answered. Missing context that changes
              everything. Starting from zero when they should be starting from trust.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The Cohvia Solution ─── */}
      <section className="py-20 md:py-28 relative">
        <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              The solution
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Cohvia turns handover into a head start
            </h2>
            <p className="text-lg text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
              Give AEs a structured, fast way to capture what they know at close.
              Then AI enriches that handover with data from your CRM, call recordings,
              and emails — so the CSM walks into the relationship already understanding the customer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ArrowRightLeft,
                title: "Structured handover",
                description:
                  "AEs capture deal context in minutes — not hours. What was promised, who the champions are, what risks exist. All in a format CSMs can actually use.",
              },
              {
                icon: Sparkles,
                title: "AI-enriched narrative",
                description:
                  "Cohvia pulls from your CRM, call transcripts, and emails to build a complete account narrative — filling gaps the AE didn't even know existed.",
              },
              {
                icon: BookOpen,
                title: "Living context, always current",
                description:
                  "The narrative doesn't stop at handover. AI keeps it updated as the relationship evolves — every call, every ticket, every milestone.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="surface-card rounded-xl p-8 transition-all hover:border-primary/30"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "rgba(26, 158, 143, 0.08)" }}
                >
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-secondary-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Beyond Handover ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            And then it keeps going
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Less time searching. More time with customers.
          </h2>
          <p className="text-lg text-secondary-foreground leading-relaxed max-w-3xl mx-auto">
            Handover is just the start. As the relationship grows, Cohvia keeps your team 
            informed — auto-generating success plans, flagging risk before renewals, and 
            giving customers a portal that makes them feel seen.
          </p>
        </div>
      </section>

      {/* ─── Feature Walkthrough ─── */}
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
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(26, 158, 143, 0.08)" }}
                >
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

      {/* ─── Social Proof ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Trusted by
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Built for CS teams who care deeply about their customers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="surface-card rounded-xl p-8">
                <p className="text-secondary-foreground leading-relaxed mb-6 italic">
                  "Placeholder testimonial — this is where a real customer quote
                  will go. The product transformed how our CS team operates."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary" />
                  <div>
                    <p className="text-sm font-medium">CS Leader Name</p>
                    <p className="text-xs text-muted-foreground">
                      VP of Customer Success, Company
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA / Waitlist ─── */}
      <section id="waitlist" className="py-20 md:py-28 relative">
        <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-3xl px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Ready to bring clarity to your CS team?
          </h2>
          <p className="text-lg text-secondary-foreground mb-10 leading-relaxed">
            Cohvia is currently in early access. Join the waitlist to be among
            the first to experience AI-native Customer Success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="w-full sm:w-auto whitespace-nowrap rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
