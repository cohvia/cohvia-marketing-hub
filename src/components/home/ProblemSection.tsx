const ProblemSection = () => (
  <section className="py-24 md:py-32">
    <div className="mx-auto max-w-[680px] px-6">
      <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4 text-center">
        The problem
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-center">
        Deals close. Context disappears.
      </h2>

      <div className="space-y-6 text-lg text-secondary-foreground leading-relaxed">
        <p>
          Your AE knows everything — why they bought, what was promised, what
          matters most. But when the deal closes, that knowledge doesn't follow.
          The CSM starts the relationship half-blind, re-asking questions the
          customer already answered.
        </p>
        <p>
          From there, it's 40 accounts, six tools, and never enough time to be
          truly present for any of them.
        </p>
        <p>
          Customer Success was supposed to be about growing together. Somewhere
          along the way, it became about tabs and spreadsheets.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
