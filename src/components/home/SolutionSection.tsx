import { ArrowRightLeft, Sparkles, BookOpen } from "lucide-react";

const SolutionSection = () => (
  <section className="py-20 md:py-28 relative">
    <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
    <div className="mx-auto max-w-6xl px-6 relative">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
          The solution
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Cohvia turns handover into a head start
        </h2>
        <p className="text-lg text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
          Give AEs a structured, fast way to capture what they know at close.
          Then AI enriches that handover with data from your CRM, call recordings,
          and emails — so the CSM walks into the relationship already understanding the customer.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: ArrowRightLeft,
            title: "Structured handover",
            description:
              "AEs capture deal context in minutes — not hours. What was promised, who the champions are, what risks exist. All in a format CSMs can actually use.",
          },
          {
            icon: Sparkles,
            title: "AI-enriched narrative",
            description:
              "Cohvia pulls from your CRM, call transcripts, and emails to build a complete account narrative — filling gaps the AE didn't even know existed.",
          },
          {
            icon: BookOpen,
            title: "Living context, always current",
            description:
              "The narrative doesn't stop at handover. AI keeps it updated as the relationship evolves — every call, every ticket, every milestone.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="surface-card rounded-xl p-8 transition-all hover:border-primary/30"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-primary/10">
              <item.icon size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
