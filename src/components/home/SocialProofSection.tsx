const SocialProofSection = () => (
  <section className="py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
          Trusted by
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Built for CS teams who care deeply about their customers
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="surface-card rounded-xl p-8">
            <p className="text-secondary-foreground leading-relaxed mb-6 italic">
              "Placeholder testimonial — this is where a real customer quote
              will go. The product transformed how our CS team operates."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary" />
              <div>
                <p className="text-sm font-medium">CS Leader Name</p>
                <p className="text-xs text-muted-foreground">
                  VP of Customer Success, Company
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
