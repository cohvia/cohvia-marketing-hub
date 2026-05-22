import { ArrowRight, Sparkles, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const NarrativePreview = () => (
  <div className="relative">
    {/* Glow under the card */}
    <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

    <div className="relative surface-card rounded-2xl shadow-2xl overflow-hidden border-primary/20">
      {/* Mock chrome */}
      <div className="flex items-center justify-between gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <span className="text-[10px] text-muted-foreground font-mono">cohvia / acme corp</span>
        <span className="flex items-center gap-1.5 text-[10px] text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Live
        </span>
      </div>

      <div className="p-6 md:p-7 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-1">
              Account Narrative
            </p>
            <h3 className="text-lg font-bold">Acme Corp</h3>
          </div>
          <span className="text-[10px] text-muted-foreground">Updated 2h ago</span>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium mb-2">
            Why they bought
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            Switched from Gainsight after RevOps determined the new motion needed tighter sales→CS
            context transfer
            <span className="inline-flex items-center justify-center w-4 h-4 rounded text-[9px] font-bold bg-primary/20 text-primary ml-1 align-middle">
              1
            </span>
            .
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium mb-2">
            What success looks like
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            30% faster onboarding by Q3. Champion Sarah Chen promoted to VP
            <span className="inline-flex items-center justify-center w-4 h-4 rounded text-[9px] font-bold bg-primary/20 text-primary ml-1 align-middle">
              2
            </span>
            .
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
          {["Why they bought", "Success", "People", "Risk", "Renewal"].map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Floating callout: source citation */}
    <div className="hidden lg:flex absolute -left-10 top-32 items-center gap-2 surface-card rounded-lg px-3 py-2 shadow-lg animate-fade-in animation-delay-300">
      <Quote size={12} className="text-primary shrink-0" />
      <div className="text-left">
        <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
          Source
        </div>
        <div className="text-[11px] font-medium">Gong call · Mar 14</div>
      </div>
    </div>

    {/* Floating callout: AI-proposed edit */}
    <div className="hidden lg:flex absolute -right-8 bottom-20 items-center gap-2 surface-card rounded-lg px-3 py-2 shadow-lg border-primary/30 animate-fade-in animation-delay-500">
      <div className="w-6 h-6 rounded-md gradient-brand-bg flex items-center justify-center shrink-0">
        <Sparkles size={11} className="text-foreground" />
      </div>
      <div className="text-left">
        <div className="text-[9px] uppercase tracking-wider text-primary font-semibold">
          AI proposed edit
        </div>
        <div className="text-[11px] font-medium">+ Add Sarah Chen as champion</div>
      </div>
    </div>
  </div>
);

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="gradient-hero absolute inset-0 pointer-events-none" />

    {/* Subtle grid backdrop */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:48px_48px]" />

    <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-36 relative">
      <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Copy column */}
        <div className="text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-8 opacity-0 animate-fade-in-up border border-border bg-card">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-secondary-foreground">
              Customer Context Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            Put the human back{" "}
            <span className="gradient-brand">into Customer Success.</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
            Your CRM tracks what happened. Your call tool tracks when. Cohvia captures{" "}
            <em className="italic text-foreground">why</em>: why they chose you, why they stay, what
            drives them. So your team can scale without losing the relationships that matter.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-lg gradient-brand-bg px-6 py-3 text-sm font-semibold text-foreground transition-all hover:brightness-110"
            >
              Request Early Access
              <ArrowRight size={16} />
            </a>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Visual column */}
        <div className="opacity-0 animate-fade-in-up animation-delay-400">
          <NarrativePreview />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
