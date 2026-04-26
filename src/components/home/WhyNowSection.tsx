const WhyNowSection = () => (
  <section className="relative py-32 md:py-48 overflow-hidden">
    {/* Backdrop */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,hsl(var(--primary)/0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-secondary/30" />
    </div>

    {/* Massive faded number watermark */}
    <div
      aria-hidden
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[28rem] md:text-[40rem] font-bold leading-none text-primary/[0.04] tracking-tighter"
    >
      03
    </div>

    <div className="mx-auto max-w-5xl px-6 relative">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-primary">03 ·</span>
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.25em]">
          Why now
        </p>
        <span className="flex-1 h-px bg-border" />
      </div>

      <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-12">
        Everyone else is{" "}
        <span className="text-muted-foreground/60 line-through decoration-2 decoration-muted-foreground/40">
          automating
        </span>{" "}
        the relationship away.
      </h2>

      <div className="grid md:grid-cols-[auto_1fr] gap-x-8 gap-y-4 items-start max-w-3xl">
        <span className="text-3xl md:text-4xl font-bold gradient-brand leading-none">→</span>
        <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          Cohvia uses AI to do the opposite: deepen human understanding so your team can be more
          present, not less.
        </p>
      </div>

      <p className="mt-12 text-base text-secondary-foreground leading-relaxed max-w-2xl">
        AI chatbots. Auto-generated QBRs. Automated check-in emails. The industry is using AI to
        remove humans from Customer Success. We think that's the wrong move.
      </p>
    </div>
  </section>
);

export default WhyNowSection;
