import SolutionPage from "@/components/solutions/SolutionPage";
import {
  NarrativeWhy,
  AskCohviaPrep,
  PortalCheckoff,
  NewAccountReady,
  RiskInContext,
} from "@/components/solutions/visuals";

const ForCSMs = () => (
  <SolutionPage
    chip="For CSMs"
    headline="Know every account like it's your only one."
    subheadline="You're managing 40 accounts and you care about every one of them. The math doesn't add up, so Cohvia holds the understanding you can't."
    pain={{
      headline: "You're not bad at your job. You're doing three jobs at once.",
      body: (
        <p>
          You know you should re-read the Gong transcript before the call, and check the tickets before the QBR. But you have 45 accounts and three hours of admin standing between you and the first customer conversation of the day. Something always gets skipped.
        </p>
      ),
    }}
    blocks={[
      {
        title: "The Narrative is your daily companion",
        body: (
          <p>
            Open any account and read the strategic story in two minutes: why they bought, who matters, what's changed lately. You didn't write it. Cohvia built it from your calls, emails, and CRM. But it's still your document, and you can edit any section inline.
          </p>
        ),
        visual: <NarrativeWhy />,
      },
      {
        title: "Ask Cohvia before every call",
        body: (
          <p>
            Five minutes before a call, ask Cohvia. It already knows who you're meeting, what's changed since last time, and which signals are currently active. You walk in actually prepared, and the customer can tell the difference.
          </p>
        ),
        visual: <AskCohviaPrep />,
      },
      {
        title: "Plans your customers co-own",
        body: (
          <p>
            Build the plan, share it, and the customer sees the progress, checks off their items, and edits the shared goals with you. You stop writing the "just checking in on the status of..." emails because the status is already there.
          </p>
        ),
        visual: <PortalCheckoff />,
      },
      {
        title: "New accounts without the panic",
        body: (
          <p>
            Whether it's a sales handover or a CSM transfer, the Narrative is already there. You read it, you understand the relationship, and you skip the part where you re-ask the customer the questions they already answered three months ago.
          </p>
        ),
        visual: <NewAccountReady />,
      },
      {
        title: "Risk signals with context, not just a color",
        body: (
          <p>
            "This account is at risk" tells you nothing useful on its own. Cohvia shows you the signal alongside the strategic context that explains it: a stakeholder left, sentiment dropped, the plan has stalled. You know what happened and you know what to do next.
          </p>
        ),
        visual: <RiskInContext />,
      },
    ]}
    cta={{ headline: "Spend the time with your customers, not hunting for context." }}
  />
);

export default ForCSMs;
