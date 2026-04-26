const SolutionSection = () => (
  <section className="py-24 md:py-32 relative">
    <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
    <div className="mx-auto max-w-[680px] px-6 relative">
      <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4 text-center">
        The solution
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-center">
        The why, always within reach.
      </h2>
      <p className="text-lg text-secondary-foreground leading-relaxed mb-6 text-left">
        Cohvia connects to your CRM, call recordings, email, and support
        tickets — and builds a living account narrative for every customer. Not
        a dashboard. Not a health score. A real, structured understanding of who
        they are and why they're here.
      </p>
      <p className="text-lg text-secondary-foreground leading-relaxed text-left">
        Your team stops guessing and starts knowing.
      </p>
    </div>
  </section>
);

export default SolutionSection;
