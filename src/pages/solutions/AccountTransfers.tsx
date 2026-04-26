import SolutionPage from "@/components/solutions/SolutionPage";
import {
  ReassignedAccount,
  KeyPeopleRead,
  PlansHistory,
} from "@/components/solutions/visuals";

const AccountTransfers = () => (
  <SolutionPage
    chip="Use Case"
    headline="The story continues without interruption."
    subheadline="When a CSM leaves, gets promoted, or their book gets rebalanced, the customer relationship shouldn't start over."
    pain={{
      headline: "When your CSM leaves, the understanding leaves with them.",
      body: (
        <>
          <p>
            Your best CSM can tell you in two minutes why a customer bought, what drives their champion, where the relationship is strong, and where it's fragile.
          </p>
          <p>
            That understanding lives in their head. When they leave, it's gone. The new CSM gets a 30-minute briefing that covers maybe 10% of what the last CSM knew. The customer gets another round of "so tell me about your goals."
          </p>
          <p>They've done this before. They're tired of it.</p>
        </>
      ),
    }}
    helpLabel="How Cohvia Solves It"
    blocks={[
      {
        title: "The Narrative stays.",
        body: (
          <p>
            Every account's strategic story lives in Cohvia, not in someone's head. Vacations, turnover, reorgs: the understanding stays.
          </p>
        ),
        visual: <ReassignedAccount />,
      },
      {
        title: "The new CSM reads, not asks.",
        body: (
          <p>
            Open the account. Read the Narrative. Know who the champion is, who the skeptic is, what was promised, what's at risk. No briefing call. No "I'm still getting up to speed" for three weeks.
          </p>
        ),
        visual: <KeyPeopleRead />,
      },
      {
        title: "Plans and history transfer completely.",
        body: (
          <p>
            Active plans with full milestone history. Completed plans archived with outcomes. The new CSM sees what's been done, what's in progress, and what's next.
          </p>
        ),
        visual: <PlansHistory />,
      },
      {
        title: "The customer doesn't feel the gap.",
        body: (
          <>
            <p>
              Their portal stays the same. Their plans stay the same. Their goals stay the same. The only thing that changes is the name of their CSM. And that CSM already understands them.
            </p>
            <p>That's what institutional memory should feel like.</p>
          </>
        ),
      },
    ]}
    cta={{ headline: "Relationships are too valuable to start over." }}
  />
);

export default AccountTransfers;
