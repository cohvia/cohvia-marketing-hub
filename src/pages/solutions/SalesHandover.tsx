import SolutionPage from "@/components/solutions/SolutionPage";
import {
  StepIngest,
  StepNarrativeDraft,
  StepAEEnrich,
  StepCSMOpen,
} from "@/components/solutions/visuals";

const SalesHandover = () => (
  <SolutionPage
    chip="Use Case"
    headline="No more lost context at close."
    subheadline="The AE spent months understanding this customer. That understanding should transfer completely, not evaporate into a CRM field and a 5-minute call."
    pain={{
      headline: "The handover is where the why dies.",
      body: (
        <>
          <p>
            The AE knows why the customer bought. What was promised. Who the champion is. What keeps them up at night.
          </p>
          <p>
            The CSM gets a CRM record and a Slack message. They start the relationship half-blind. They re-ask questions the customer already answered. The customer notices. (Customers always notice.)
          </p>
        </>
      ),
    }}
    helpLabel="How Cohvia Solves It"
    blocks={[
      {
        step: 1,
        title: "Deal closes. Cohvia ingests everything.",
        body: (
          <p>
            Call recordings, email threads, CRM deal history. Everything the AE touched during the sales process.
          </p>
        ),
        visual: <StepIngest />,
      },
      {
        step: 2,
        title: "AI generates the first Narrative.",
        body: (
          <p>
            Why they bought. What success looks like. Who the key people are. Every claim cited to its source. Not a summary: an understanding.
          </p>
        ),
        visual: <StepNarrativeDraft />,
      },
      {
        step: 3,
        title: "The AE reviews and enriches.",
        body: (
          <p>
            The AE adds what the AI couldn't know: verbal commitments, internal politics, the real reason the champion pushed for the deal. This replaces the handover call. (The one that always got rescheduled twice anyway.)
          </p>
        ),
        visual: <StepAEEnrich />,
      },
      {
        step: 4,
        title: "The CSM starts with the full picture.",
        body: (
          <p>
            Day one. A 2-page strategic story. Suggested plans pre-populated from sales conversations. No Slack archaeology. No re-asking at kickoff.
          </p>
        ),
        visual: <StepCSMOpen />,
      },
    ]}
    cta={{ headline: "The context should outlast the handover." }}
  />
);

export default SalesHandover;
