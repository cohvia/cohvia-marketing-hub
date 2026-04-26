import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="gradient-hero absolute inset-0 pointer-events-none" />
    <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-32 text-center relative">
      <div className="relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 opacity-0 animate-fade-in-up border border-border bg-card">
        <Sparkles size={14} className="text-primary" />
        <span className="text-xs font-medium text-secondary-foreground">
          Customer Context Platform
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-in-up animation-delay-100">
        Put the human back{" "}
        <span className="gradient-brand">into Customer Success.</span>
      </h1>

      <div className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
        <p>
          Your CRM tracks what happened. Your call tool tracks when. Cohvia captures <em className="italic">why</em>: why they chose you, why they stay, what drives them. So your team can scale without losing the relationships that matter.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
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
  </section>
);

export default HeroSection;
