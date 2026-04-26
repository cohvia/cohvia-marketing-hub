import SolutionPage from "@/components/solutions/SolutionPage";
import {
  AENarrativeAutoDraft,
  HandoverEnrich,
  AEReviewQueue,
  StepCSMOpen,
} from "@/components/solutions/visuals";

const ForAEs = () => (
  <SolutionPage
    chip="For AEs"
    headline="Five minutes of your time. Five hours saved for CS."
    subheadline="You spent months understanding this customer. Cohvia makes sure that understanding actually makes it to the CSM."
    pain={{
      headline: "You know the handover doesn't work.",
      body: (
        <>
          <p>
            You closed the deal. You know why the customer bought, what was promised, who the champion is, what keeps them up at night. You try to pass it along: a CRM note, a Slack message, maybe a quick call with the CSM.
          </p>
          <p>
            Three weeks later, the customer tells you the CSM asked them to "walk through their goals again." You cringe. They cringe. Everyone cringes.
          </p>
        </>
      ),
    }}
    blocks={[
      {
        title: "AI does the heavy lifting",
        body: (
          <p>
            When the deal closes, Cohvia ingests your call recordings, emails, and CRM history. AI generates a full Narrative draft: why they bought, what success looks like, who the key people are. You didn't have to write any of it.
          </p>
        ),
        visual: <AENarrativeAutoDraft />,
      },
      {
        title: "You review and enrich",
        body: (
          <p>
            You get notified to review the Narrative before the CSM sees it. Use Ask Cohvia to add what the AI couldn't know: verbal commitments, internal politics, the real reason the champion pushed for the deal. Five minutes, not thirty.
          </p>
        ),
        visual: <HandoverEnrich />,
      },
      {
        title: "Then you're done",
        body: (
          <p>
            Your view is simple: accounts pending your review. Once you've enriched the Narrative and the CSM is assigned, the account disappears from your list. No ongoing access to Plans, Portfolio, or anything else. Clean separation.
          </p>
        ),
        visual: <AEReviewQueue />,
      },
      {
        title: "The CSM starts informed",
        body: (
          <p>
            The CSM opens a complete strategic understanding on day one. Your months of relationship-building didn't evaporate into a CRM field. The customer doesn't get re-asked. You look good. They look good. Everyone looks good.
          </p>
        ),
        visual: <StepCSMOpen />,
      },
    ]}
    cta={{ headline: "Your deal context deserves better than a Slack message." }}
  />
);

export default ForAEs;
