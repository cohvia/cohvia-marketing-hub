import { X, Check } from "lucide-react";

const WhyNowSection = () => (
  <section className="relative pt-10 pb-12 md:pt-12 md:pb-16 overflow-hidden border-y border-border">
    <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.08),transparent_60%)] pointer-events-none" />

    <div className="mx-auto max-w-6xl px-6 relative">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        <span className="h-px w-8 bg-primary/60" />
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.25em]">
          Why now
        </p>
      </div>

      {/* Headline */}
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 mb-10 md:mb-12 items-end">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-2xl">
          The industry wants AI to replace your CS team.{" "}
          <span className="gradient-brand">We're doing the opposite.</span>
        </h2>
        <p className="text-lg text-secondary-foreground leading-relaxed max-w-md lg:justify-self-end lg:text-right">
          AI should make your team{" "}
          <span className="text-foreground font-medium">more present</span>, not absent. We automate the busywork so humans can do the human work.
        </p>
      </div>

      {/* Contrast cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* What everyone else does */}
        <article className="surface-card rounded-2xl p-7 md:p-8 relative">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-muted-foreground/10 flex items-center justify-center">
              <X size={16} className="text-muted-foreground" />
            </div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
              The industry approach
            </p>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-muted-foreground">
            Automate the relationship.
          </h3>
          <ul className="space-y-2.5">
            {[
              "AI chatbots replacing CSMs",
              "Auto-generated QBR decks",
              "Templated check-in emails",
              "Health scores in place of judgment",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        {/* What Cohvia does */}
        <article className="surface-card rounded-2xl p-7 md:p-8 relative border-primary/30 shadow-xl overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <Check size={16} className="text-primary" />
              </div>
              <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                The Cohvia approach
              </p>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Automate the busywork. <span className="gradient-brand">Deepen the relationship.</span>
            </h3>
            <ul className="space-y-2.5">
              {[
                "AI surfaces context, humans build trust",
                "Narratives that capture the why, not just the what",
                "Plans tailored to each account, not templates",
                "Your team shows up sharper, every conversation",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <Check size={14} className="text-primary mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default WhyNowSection;
