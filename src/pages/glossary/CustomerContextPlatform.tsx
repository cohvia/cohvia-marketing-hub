import GlossaryPage from "@/components/glossary/GlossaryPage";

const CustomerContextPlatform = () => (
  <GlossaryPage
    slug="customer-context-platform"
    term="Customer Context Platform"
    title="Customer Context Platform"
    metaDescription="A Customer Context Platform turns scattered customer data into a single, AI-generated narrative for every B2B SaaS account. Definition, examples, and how it differs from a CDP."
    shortDefinition="A Customer Context Platform is software that turns scattered customer data into a single, AI-generated narrative for every B2B SaaS account."
    updated="2026-06-01"
    body={
      <>
        <p>
          A Customer Context Platform (CCP) is a new category of B2B SaaS tool
          built specifically for Customer Success teams. Instead of organizing
          work around health scores, tasks, and playbooks the way a legacy
          Customer Success Platform does, a CCP organizes understanding. It
          ingests the calls, emails, tickets, and CRM activity that already
          exist around an account and assembles a structured, cited Customer
          Narrative that explains the relationship.
        </p>
        <p>
          Cohvia is the first software vendor to define and build for this
          category. The bet behind the term is that the bottleneck in modern
          Customer Success is not workflow — it is shared understanding between
          the customer, the CSM, and the rest of the company.
        </p>
        <h3 className="text-xl font-semibold text-foreground pt-2">
          How is a Customer Context Platform different from a Customer Data Platform (CDP)?
        </h3>
        <p>
          A Customer Data Platform (CDP) like Segment or mParticle is a
          marketing-and-analytics layer: it unifies event-level behavioral data
          (page views, product usage, identity) so marketers can segment
          audiences and trigger campaigns. The output is structured data ready
          for activation in other tools.
        </p>
        <p>
          A Customer Context Platform is a Customer Success layer. It unifies
          unstructured relationship data — recorded conversations, written
          correspondence, support history — and produces a narrative artifact a
          human CSM uses to manage the relationship. A CDP answers "what did
          this user do?" A CCP answers "why does this customer care, and what
          is at risk?"
        </p>
      </>
    }
    whyItMatters={
      <>
        <p>
          CS teams are being asked to cover more accounts with the same
          headcount, and the industry response has been to automate the
          relationship itself — chatbots in front of customers, auto-generated
          QBR slides, scheduled check-in emails. That trade quietly erodes the
          one thing customers actually pay for: feeling understood.
        </p>
        <p>
          A Customer Context Platform takes the opposite bet. It uses AI to
          deepen the understanding behind the relationship so a smaller team
          can be more present with customers, not less. The result is
          shorter onboarding, cleaner renewals, and handovers that survive.
        </p>
      </>
    }
    relatedTerms={[
      {
        label: "Customer Narrative",
        to: "/glossary/customer-narrative",
        description: "The artifact a Customer Context Platform produces.",
      },
      {
        label: "Account Narrative",
        to: "/glossary/account-narrative",
        description: "The account-scoped version of the narrative.",
      },
      {
        label: "AI Success Plans",
        to: "/glossary/ai-success-plans",
        description: "Plans auto-generated from the Customer Narrative.",
      },
    ]}
    faqs={[
      {
        question: "Is a Customer Context Platform the same as a Customer Success Platform?",
        answer:
          "No. A Customer Success Platform like Gainsight or ChurnZero organizes the work — health scores, playbooks, and tasks. A Customer Context Platform organizes the understanding — a cited narrative of why each customer bought, what success means to them, and where the relationship is at risk. The two are complementary, but a CCP replaces the strategic layer most legacy CSPs never delivered.",
      },
      {
        question: "What data does a Customer Context Platform use?",
        answer:
          "It uses the unstructured relationship data your team already records: call transcripts from tools like Gong or Chorus, email and calendar activity, support tickets, CRM notes, and contract terms. It does not require new data entry or new logging discipline from CSMs. Every claim in the generated narrative is cited to its source so the team can verify.",
      },
      {
        question: "Who is a Customer Context Platform for?",
        answer:
          "B2B SaaS Customer Success teams, especially those running on a high-touch or hybrid motion where understanding the customer's strategic context drives retention and expansion. It is also valuable for AEs handing accounts off to CS, and for CS leaders who need visibility across the book without asking CSMs to constantly update dashboards.",
      },
    ]}
  />
);

export default CustomerContextPlatform;
