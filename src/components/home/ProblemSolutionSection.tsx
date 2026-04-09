const ProblemSolutionSection = () => (
  <section className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border">
        {/* Problem side */}
        <div className="relative p-10 md:p-12 bg-background">
          {/* Subtle warm/warning radial glow */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_20%,hsl(var(--danger)/0.06),transparent_60%)]" />
          </div>

          <div className="relative">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4">
              The problem
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              You know their name. But do you know their why?
            </h2>
            <p className="text-secondary-foreground leading-relaxed mb-6">
              Why did they choose you over everyone else? Why do they keep
              renewing — or why are they quietly pulling away? Why does this
              metric matter to them this quarter?
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              You can't make your customer a superstar if you don't understand
              what drives them.
            </p>
          </div>
        </div>

        {/* Divider — vertical on desktop, horizontal on mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="md:hidden h-px bg-border" />

        {/* Solution side */}
        <div className="relative p-10 md:p-12 bg-card">
          {/* Teal glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_80%_20%,hsl(var(--primary)/0.08),transparent_60%)]" />
          </div>

          <div className="relative">
            <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">
              The solution
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              The why, always within reach.
            </h2>
            <p className="text-secondary-foreground leading-relaxed mb-6">
              Cohvia connects to your CRM, call recordings, email, and support
              tickets — and builds a living account narrative for every customer.
              Not a dashboard. Not a health score. A real, structured
              understanding of who they are and why they're here.
            </p>
            <p className="text-secondary-foreground leading-relaxed font-medium text-foreground">
              Your team stops guessing and starts knowing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
