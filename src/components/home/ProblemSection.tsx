const ProblemSection = () => (
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
);

export default ProblemSection;
