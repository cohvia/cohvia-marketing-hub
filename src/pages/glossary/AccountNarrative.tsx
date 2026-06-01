import GlossaryPage from "@/components/glossary/GlossaryPage";

const AccountNarrative = () => (
  <GlossaryPage
    slug="account-narrative"
    term="Account Narrative"
    title="Account Narrative"
    metaDescription="An Account Narrative is a Customer Narrative scoped to a single B2B SaaS account: the AI-generated strategic story of one customer relationship."
    shortDefinition="An Account Narrative is a Customer Narrative scoped to a single account: an AI-generated strategic story of one B2B SaaS customer relationship."
    updated="2026-06-01"
    body={
      <>
        <p>
          Account Narrative and Customer Narrative are used interchangeably in
          most Cohvia contexts. The Account Narrative framing is what a CSM,
          AE, or CS leader sees inside the product: open one account, read its
          narrative, take action. It is the unit of understanding a Customer
          Context Platform delivers, account by account, across the entire book
          of business.
        </p>
        <p>
          Each Account Narrative is structured into sections that answer
          questions nobody else in the stack is asking — why they bought, what
          success looks like in their words, who the champion and the skeptic
          are, what is changing this quarter — with every claim cited back to
          the source it came from.
        </p>
      </>
    }
    whyItMatters={
      <>
        <p>
          CS teams operate at the account level: one renewal, one expansion
          conversation, one QBR at a time. An Account Narrative meets the team
          where the work actually happens. The CSM walking into a call does not
          need a dashboard of 200 accounts; they need to know this account
          better than anyone in the room.
        </p>
        <p>
          When the same artifact follows the account through handovers,
          reassignments, and reorgs, the relationship stops resetting every
          time the org chart changes. That is what institutional memory is
          supposed to feel like.
        </p>
      </>
    }
    relatedTerms={[
      {
        label: "Customer Narrative",
        to: "/glossary/customer-narrative",
        description: "The same concept at the category level.",
      },
      {
        label: "Customer Context Platform",
        to: "/glossary/customer-context-platform",
        description: "Software that produces Account Narratives.",
      },
      {
        label: "AI Success Plans",
        to: "/glossary/ai-success-plans",
        description: "Plans auto-generated from each Account Narrative.",
      },
    ]}
    faqs={[
      {
        question: "What is included in an Account Narrative?",
        answer:
          "A typical Cohvia Account Narrative has eight sections: Why they bought, What success looks like, Key people and champions, Current state, Risk signals, Recent changes, Expansion opportunities, and Renewal posture. Each section pulls from connected data sources and updates continuously as new calls, emails, and tickets arrive.",
      },
      {
        question: "Can I edit the Account Narrative manually?",
        answer:
          "Yes. The CSM owns the narrative and can edit any section directly, add notes the AI could not infer, and mark verbal commitments. The AI proposes updates as new data comes in; the human accepts, rejects, or modifies. The narrative is collaborative between the AI and the team, not autonomous.",
      },
      {
        question: "Does the Account Narrative replace a CRM account record?",
        answer:
          "No, it complements it. The CRM remains the system of record for structured fields like ARR, contract terms, and stage. The Account Narrative is the system of understanding for everything that does not fit cleanly into a field: motivations, relationships, context, risk.",
      },
    ]}
  />
);

export default AccountNarrative;
