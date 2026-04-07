import Layout from "@/components/layout/Layout";
import { ArrowRight, BookOpen, Shield, Users, MessageSquare, BarChart3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BookOpen,
    title: "Account Narratives",
    description: "AI writes and maintains a living summary of every customer relationship — what happened, what matters, and what's next.",
  },
  {
    icon: Users,
    title: "Success Plans",
    description: "Collaborative, milestone-driven plans that your customers can actually see and contribute to.",
  },
  {
    icon: Shield,
    title: "Risk Signals",
    description: "Proactive alerts surface churn risk before it becomes a conversation. No more surprises.",
  },
  {
    icon: MessageSquare,
    title: "Customer Portal",
    description: "A branded, self-service portal where customers track progress, view plans, and stay aligned.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-32 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-8 opacity-0 animate-fade-in-up">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-secondary-foreground">AI-native Customer Success Platform</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            Customer Success,{" "}
            <span className="text-primary">finally clear</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
            Cohvia gives CS teams a single source of truth — AI-generated narratives, 
            collaborative success plans, and proactive risk signals — so nothing falls through the cracks.
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

      {/* Problem Statement */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">The problem</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            CS teams are drowning in tabs and spreadsheets
          </h2>
          <p className="text-lg text-secondary-foreground leading-relaxed max-w-2xl mx-auto">
            Your team manages dozens of accounts across Salesforce, Slack, spreadsheets, and docs. 
            Context lives in people's heads. When someone leaves, institutional knowledge walks out the door. 
            Renewals sneak up. Risk signals get missed. Sound familiar?
          </p>
        </div>
      </section>

      {/* How Cohvia Solves It */}
      <section className="py-20 md:py-28 relative">
        <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">The solution</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              One platform. Total clarity.
            </h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
              Cohvia connects to your existing tools and uses AI to create a living, breathing 
              picture of every customer relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "AI writes the narrative",
                description: "Cohvia synthesizes data from your CRM, calls, emails, and tickets into a continuously updated account narrative.",
              },
              {
                icon: BarChart3,
                title: "Plans keep everyone aligned",
                description: "Auto-generated success plans with milestones your team and your customers can track together.",
              },
              {
                icon: Shield,
                title: "Risk surfaces early",
                description: "AI-powered signals flag at-risk accounts before anyone asks — so your team can act, not react.",
              },
            ].map((item, i) => (
              <div key={i} className="surface-card rounded-xl p-8 transition-all hover:border-primary/30">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: "rgba(26, 158, 143, 0.08)" }}>
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-secondary-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Walkthrough */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Features</p>
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(26, 158, 143, 0.08)" }}>
                  <feature.icon size={22} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-secondary-foreground leading-relaxed">{feature.description}</p>
                </div>
                <div className="w-full md:w-80 h-44 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                  <span className="text-xs text-muted-foreground">Screenshot coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Trusted by</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              CS leaders who refuse to fly blind
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="surface-card rounded-xl p-8">
                <p className="text-secondary-foreground leading-relaxed mb-6 italic">
                  "Placeholder testimonial — this is where a real customer quote will go. The product transformed how our CS team operates."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary" />
                  <div>
                    <p className="text-sm font-medium">CS Leader Name</p>
                    <p className="text-xs text-muted-foreground">VP of Customer Success, Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="py-20 md:py-28 relative">
        <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-3xl px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Ready to bring clarity to your CS team?
          </h2>
          <p className="text-lg text-secondary-foreground mb-10 leading-relaxed">
            Cohvia is currently in early access. Join the waitlist to be among the first to experience 
            AI-native Customer Success.
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
