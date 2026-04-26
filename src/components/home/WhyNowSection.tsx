const WhyNowSection = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    {/* Top gradient divider */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

    {/* Subtle backdrop */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-secondary/20" />
    </div>

    <div className="mx-auto max-w-3xl px-6 relative text-center">
      <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">
        Why now
      </p>
      <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
        Everyone else is automating the relationship away.
      </h2>
      <div className="space-y-6 text-lg text-secondary-foreground leading-relaxed">
        <p>
          AI chatbots. Auto-generated QBRs. Automated check-in emails. The
          industry is using AI to remove humans from Customer Success.
        </p>
        <p className="text-foreground font-medium">
          Cohvia uses AI to do the opposite: deepen human understanding so your
          team can be more present, not less.
        </p>
      </div>
    </div>
  </section>
);

export default WhyNowSection;
