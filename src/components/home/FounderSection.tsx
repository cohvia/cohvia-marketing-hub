const FounderSection = () => (
  <section className="py-24 md:py-32">
    <div className="mx-auto max-w-3xl px-6">
      <div className="text-center mb-12">
        <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">
          Founder
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Built by someone who's lived this.
        </h2>
      </div>

      <figure className="relative">
        {/* Subtle teal accent bar */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

        <blockquote className="pl-8 text-xl md:text-2xl leading-relaxed text-foreground font-medium">
          "I've been the overwhelmed CS leader three times. Three companies,
          same problem every time: the deeper you scale, the more you lose the
          why behind your customer relationships. I built Cohvia because I got
          tired of watching it happen."
        </blockquote>

        <figcaption className="pl-8 mt-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
            S
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Sarah</div>
            <div className="text-xs text-muted-foreground">Founder, Cohvia</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default FounderSection;
