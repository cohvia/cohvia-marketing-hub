import { Section } from "@/components/ui-kit";

/**
 * Answer-first lead paragraph for the homepage.
 * One-sentence definition for AI extraction, then a short expansion.
 */
const DefinitionLead = () => (
  <Section pad="sm" width="default">
    <div className="max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-4">
        What is Cohvia?
      </h2>
      <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
        <strong>
          Cohvia is a Customer Context Platform that turns scattered customer data
          into a clear, AI-generated Customer Narrative for every account.
        </strong>
      </p>
      <p className="text-base md:text-lg text-secondary-foreground leading-relaxed">
        Built for B2B SaaS Customer Success teams, Cohvia reads the calls, emails,
        tickets, and CRM activity you already have and assembles a cited strategic
        story for every customer — why they bought, what success looks like, who
        the champion is, and what is quietly putting the relationship at risk.
        From that narrative, Cohvia auto-generates Success Plans, surfaces risk
        signals, and gives customers a branded portal they can actually see
        progress in.
      </p>
    </div>
  </Section>
);

export default DefinitionLead;
