import { Section } from "@/components/ui-kit";

/**
 * Answer-first lead paragraph for the homepage.
 * One-sentence definition for AI extraction, then a short bulleted expansion.
 */
const DefinitionLead = () => (
  <Section pad="sm" width="default">
    <div className="max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-4">
        What is Cohvia?
      </h2>
      <p className="text-lg md:text-xl text-foreground leading-relaxed mb-5">
        <strong>
          Cohvia is a Customer Context Platform that turns scattered customer data
          into a clear, AI-generated Customer Narrative for every account.
        </strong>
      </p>
      <p className="text-base md:text-lg text-secondary-foreground leading-relaxed mb-4">
        Built for B2B SaaS Customer Success. From the calls, emails, tickets, and CRM activity you already have, Cohvia assembles a cited story for every customer and then:
      </p>
      <ul className="space-y-2 text-base md:text-lg text-secondary-foreground">
        {[
          "Captures why they bought and what success means in their words",
          "Auto-generates Success Plans and surfaces risk signals early",
          "Gives customers a branded portal where they can see progress",
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default DefinitionLead;
