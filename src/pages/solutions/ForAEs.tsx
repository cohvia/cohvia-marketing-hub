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
    headline="Five minutes of your time, a faster-growing account."
    subheadline="You spent months getting to know this customer. Cohvia is how that understanding actually reaches the CSM — so the account ramps faster, renews cleaner, and stays open to the next conversation with you."
    seoPath="/solutions/aes"
    pain={{
      headline: "The handover format was never built for what you actually know.",
      body: (
        <>
          <p>
            You closed the deal, so you know why they bought, what got promised, who the champion is, and what keeps them up at night. You try to pass it along through a CRM note, a Slack message, maybe a quick call if the CSM has the time.
          </p>
          <p>
            Three weeks later the customer tells you the CSM just asked them to "walk through their goals again." Trust takes a hit, the relationship cools, and the expansion conversation you were lining up for month six suddenly feels a lot further away.
          </p>
        </>
      ),
    }}
    blocks={[
      {
        title: "Cohvia does the heavy lifting",
        body: (
          <p>
            When the deal closes, Cohvia ingests your call recordings, emails, and CRM history, and drafts a full Narrative from them: why they bought, what success looks like, who the key people are. You didn't have to write any of it.
          </p>
        ),
        visual: <AENarrativeAutoDraft />,
      },
      {
        title: "You review and enrich",
        body: (
          <p>
            You get notified to review the draft before the CSM sees it, and Ask Cohvia helps you add the parts the AI couldn't see: the verbal commitments, the office politics, the real reason the champion pushed for this. Five minutes of review, not the handover call that always got rescheduled twice.
          </p>
        ),
        visual: <HandoverEnrich />,
      },
      {
        title: "Then you're done",
        body: (
          <p>
            Your view stays simple: just the accounts pending your review. Once you've enriched the Narrative and the CSM is assigned, the account drops off your list. No ongoing access to Plans, Portfolio, or anything else meant for the CS team. Clean separation.
          </p>
        ),
        visual: <AEReviewQueue />,
      },
      {
        title: "The account grows faster — and you stay in the picture",
        body: (
          <p>
            On day one, the CSM opens a complete strategic picture instead of a CRM record. Onboarding is shorter, value lands sooner, and the customer doesn't get re-asked the questions they already answered. That means cleaner renewals, warmer references when you need them, and an expansion path that's actually ready when you come back for it.
          </p>
        ),
        visual: <StepCSMOpen />,
      },
    ]}
    cta={{ headline: "Your account context is worth more than a Slack message." }}
  />
);

export default ForAEs;
