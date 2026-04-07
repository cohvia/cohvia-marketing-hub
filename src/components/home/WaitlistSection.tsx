const WaitlistSection = () => (
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
        <button className="w-full sm:w-auto whitespace-nowrap rounded-lg gradient-brand-bg px-6 py-3 text-sm font-semibold text-foreground transition-all hover:brightness-110">
          Join Waitlist
        </button>
      </div>
    </div>
  </section>
);

export default WaitlistSection;
