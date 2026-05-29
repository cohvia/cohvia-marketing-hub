import SolutionPage from "@/components/solutions/SolutionPage";
import {
  HandoverFourSteps,
  ReassignedAccount,
} from "@/components/solutions/visuals";

const Handovers = () => (
  <SolutionPage
    chip="Use Case"
    headline="Context that actually transfers."
    subheadline="Sales to CS, and CSM to CSM. Every handover is a moment where the understanding either survives or quietly dies. Cohvia is how it survives."
    pain={{
      headline: "The handover is where the why goes to die.",
      body: (
        <p>
          The AE knows why the customer bought, what got promised, and who the real champion is. The CSM inherits a CRM record and a Slack message. Three months later the account gets reassigned and the next CSM starts from zero. The customer notices every time, because they're the only one carrying the story.
        </p>
      ),
    }}
    helpLabel="How Cohvia Solves It"
    blocks={[
      {
        title: "Sales handover, without the lost context at close",
        body: (
          <>
            <p>
              When the deal closes, Cohvia ingests the calls, emails, and CRM history, and drafts the first version of the Narrative. The AE reviews it and adds what the AI couldn't see: the verbal commitments, the office politics, the real reason the champion pushed for this.
            </p>
            <p>
              Five minutes of review, not the handover call that always got rescheduled twice. The CSM starts day one with a full strategic picture and suggested plans already pulled from the sales conversations.
            </p>
          </>
        ),
        visual: <HandoverFourSteps />,
      },
      {
        title: "Account transfers, where the story continues",
        body: (
          <>
            <p>
              When a CSM leaves, gets promoted, or the book gets rebalanced, the Narrative stays with the account. The new CSM reads instead of asks, and the plans and history transfer with them.
            </p>
            <p>
              The customer's portal doesn't change either. Same plans, same goals, same progress, with a different name at the top. And that name already understands them. That's what institutional memory is supposed to feel like.
            </p>
          </>
        ),
        visual: <ReassignedAccount />,
      },
    ]}
    cta={{ headline: "The context should outlast the handover." }}
  />
);

export default Handovers;
