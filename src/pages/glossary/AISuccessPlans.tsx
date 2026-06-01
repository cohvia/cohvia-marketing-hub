import GlossaryPage from "@/components/glossary/GlossaryPage";

const AISuccessPlans = () => (
  <GlossaryPage
    slug="ai-success-plans"
    term="AI Success Plans"
    title="AI Success Plans"
    metaDescription="AI Success Plans are customer success plans auto-generated from the data your team already records — calls, emails, contracts — then refined and shared by the CSM."
    shortDefinition="AI Success Plans are customer success plans auto-generated from the data your team already records, then refined and shared by the CSM."
    updated="2026-06-01"
    body={
      <>
        <p>
          A traditional success plan is a Google Doc or spreadsheet a CSM
          builds from scratch after onboarding, populates with goals pulled
          from memory, and then mostly forgets about. AI Success Plans flip
          that workflow. When the deal closes, Cohvia reads the sales
          conversations and contract and proposes a Main Success Plan: the
          goals the customer actually articulated, milestones tied to them,
          and the actions both sides need to take.
        </p>
        <p>
          The CSM reviews, edits, and activates. Once active, the plan has two
          views: an internal one with full detail, and a curated customer-facing
          view shared through a branded portal. Visibility is toggled per
          milestone, so the team always knows what the customer can see.
        </p>
        <h3 className="text-xl font-semibold text-foreground pt-2">
          How is a Success Plan different from a playbook?
        </h3>
        <p>
          A playbook is an internal recipe — the standard steps your team runs
          for onboarding, QBRs, EBRs, or renewals. It is one-to-many and lives
          inside the CS organization. A success plan is one-to-one: the
          specific goals, milestones, and actions agreed with a single
          customer. Playbooks scale your process across the team. Success
          plans align you with one customer on what we are accomplishing
          together and by when. AI Success Plans are auto-generated from the
          customer's own data; playbooks are authored by the CS leader.
        </p>
      </>
    }
    whyItMatters={
      <>
        <p>
          Most success plans die for the same reason: the CSM never had time
          to write a good one, the customer never had a reason to look at it,
          and three weeks later it was stale. AI generation kills the
          first-draft tax. The CSM walks into the kickoff with a plan that
          already reflects what was said in the sales cycle, edits it in
          minutes instead of hours, and ships it.
        </p>
        <p>
          The shared customer portal solves the second half: customers can see
          their goals, check off their actions, edit the goals shared with
          them, and bring more people from their org into the loop. The plan
          stays alive because both sides are looking at the same one.
        </p>
      </>
    }
    relatedTerms={[
      {
        label: "Customer Narrative",
        to: "/glossary/customer-narrative",
        description: "The understanding AI Success Plans are generated from.",
      },
      {
        label: "Customer Context Platform",
        to: "/glossary/customer-context-platform",
        description: "The category of software that produces AI Success Plans.",
      },
      {
        label: "Account Narrative",
        to: "/glossary/account-narrative",
        description: "The per-account context behind each Success Plan.",
      },
    ]}
    faqs={[
      {
        question: "Can AI really write a customer success plan?",
        answer:
          "AI can produce a strong first draft when it has access to the right data — sales call transcripts, email exchanges, the signed contract, and onboarding kickoff notes. Cohvia uses that data to propose goals in the customer's own words, milestones with realistic timing, and concrete actions. The CSM still reviews, edits, and owns the plan. AI handles the blank-page problem; the human handles the relationship.",
      },
      {
        question: "What types of success plans does Cohvia generate?",
        answer:
          "Cohvia generates three plan types out of the box: a Main Success Plan that tracks the customer's primary outcomes for the contract, an Onboarding Plan that activates at kickoff and ends when value is realized, and a Renewal Plan that activates when the renewal window opens and tracks executive alignment, ROI summary, expansion, and contract steps. CS leaders define default templates; CSMs adjust per account.",
      },
      {
        question: "Do customers see the AI-generated success plan?",
        answer:
          "Only the parts the CSM chooses to share. Every plan has an internal view with full detail and a curated customer view, with visibility toggled per milestone. The shared version goes through Cohvia's branded customer portal, where the customer can check off actions, edit shared goals, and manage who in their organization has access.",
      },
      {
        question: "Will AI Success Plans replace CSMs?",
        answer:
          "No. The bet behind AI Success Plans, and Cohvia more broadly, is the opposite: AI should remove the admin work so the CSM can be more present with the customer, not less. The plan is a draft and a shared artifact. The relationship is still a human one.",
      },
    ]}
  />
);

export default AISuccessPlans;
