const WaitlistSection = () => (
  <section id="waitlist" className="py-16 md:py-24 relative">
    <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
    <div className="mx-auto max-w-[680px] px-6 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-center">
        Customer Success should be mutual.
      </h2>
      <p className="text-lg text-secondary-foreground mb-10 leading-relaxed text-left">
        Cohvia is in early access. We're building this with CS teams who believe
        the best customer relationships aren't managed — they're nurtured. If
        that sounds like your team, we should talk.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button className="w-full sm:w-auto whitespace-nowrap rounded-lg gradient-brand-bg px-6 py-3 text-sm font-semibold text-foreground transition-all hover:brightness-110">
          Join Waitlist
        </button>
      </div>
    </div>
  </section>
);

export default WaitlistSection;
