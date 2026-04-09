const ProblemSection = () => (
  <section className="py-24 md:py-32">
    <div className="mx-auto max-w-[680px] px-6">
      <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4 text-center">
        The problem
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-center">
        You know their name. But do you know their why?
      </h2>

      <div className="space-y-6 text-lg text-secondary-foreground leading-relaxed">
        <p>
          Why did they choose you over everyone else? Why do they keep renewing —
          or why are they quietly pulling away? Why does this metric matter to
          them this quarter? You can't make your customer a superstar if you
          don't understand what drives them.
        </p>
        <p>This is the heart of Customer Success. And it's the first thing that gets lost.</p>
        <p>
          It gets lost in the handover from Sales, when the AE's understanding
          of the customer disappears into a CRM field. It gets lost at scale,
          when a CSM goes from 15 accounts to 45. It gets lost across teams,
          when everyone holds a fragment of the picture but nobody has the whole
          story.
        </p>
        <p>Without the why, everything else is guesswork.</p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
