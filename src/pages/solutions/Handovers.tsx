import SolutionPage from "@/components/solutions/SolutionPage";
import {
  HandoverFourSteps,
  ReassignedAccount,
} from "@/components/solutions/visuals";

const Handovers = () => (
  <SolutionPage
    chip="Use Case"
    headline="Context that transfers completely."
    subheadline="Sales to CS. CSM to CSM. Every handover is a moment where understanding either survives or dies. Cohvia makes sure it survives."
    pain={{
      headline: "Handovers are where the why dies.",
      body: (
        <p>
          The AE knows why the customer bought. What was promised. Who the champion is. The CSM gets a CRM record and a Slack message. Three months later the relationship gets reassigned and the new CSM starts from zero. The customer notices every time.
        </p>
      ),
    }}
    helpLabel="How Cohvia Solves It"
    blocks={[
      {
        title: "Sales Handover: no more lost context at close",
        body: (
          <>
            <p>
              Deal closes. Cohvia ingests calls, emails, and CRM history. AI generates the first Narrative. The AE reviews and enriches it: verbal commitments, politics, the real reason the champion pushed.
            </p>
            <p>
              Five minutes, not thirty. (Replaces the handover call that always got rescheduled twice.) The CSM starts day one with a strategic understanding and suggested plans pre-populated from sales conversations.
            </p>
          </>
        ),
        visual: <HandoverFourSteps />,
      },
      {
        title: "Account Transfers: the story continues",
        body: (
          <>
            <p>
              When a CSM leaves, gets promoted, or their book gets rebalanced, the Narrative stays. The new CSM reads, not asks. Plans and history transfer completely.
            </p>
            <p>
              The customer's portal doesn't change: same plans, same goals, same progress. The only difference is the CSM's name. And that CSM already understands them. That's what institutional memory should feel like.
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
