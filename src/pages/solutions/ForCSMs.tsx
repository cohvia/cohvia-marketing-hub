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
    subheadline="You're managing 40 accounts. You care about every one. The math just doesn't work. Cohvia holds the understanding you can't."
    pain={{
      headline: "You're not bad at your job. You're just doing three people's jobs.",
      body: (
        <p>
          You know you should re-read that Gong transcript before the call. You know you should check the tickets before the QBR. But you have 45 accounts and three hours of admin before you can talk to a single customer.
        </p>
      ),
    }}
    blocks={[
      {
        title: "The Narrative is your daily companion",
        body: (
          <p>
            Open any account. Read the strategic story in two minutes. Why they bought. Who matters. What's changed. You didn't write it. AI built it from your calls, emails, and CRM. But it's your document: edit any section inline.
          </p>
        ),
        visual: <NarrativeWhy />,
      },
      {
        title: "Ask Cohvia before every call",
        body: (
          <p>
            Five minutes before a call, ask Cohvia. It knows who you're meeting, what's changed, and what signals are active. You walk in prepared. Your customer can tell.
          </p>
        ),
        visual: <AskCohviaPrep />,
      },
      {
        title: "Plans your customers co-own",
        body: (
          <p>
            Build plans. Share them. Customers see progress, check off their items, edit shared goals. You stop writing "just checking in on the status of..." emails. Everyone wins.
          </p>
        ),
        visual: <PortalCheckoff />,
      },
      {
        title: "New accounts without the panic",
        body: (
          <p>
            Sales handover or CSM transfer: the Narrative is already there. You read it, you understand the relationship, you skip the part where you re-ask questions the customer already answered three months ago.
          </p>
        ),
        visual: <NewAccountReady />,
      },
      {
        title: "Risk signals with context, not just color",
        body: (
          <p>
            "This account is at risk" is useless without knowing why. Cohvia shows you the signal next to the strategic context: a stakeholder left, sentiment dropped, the plan stalled. You know what happened and what to do.
          </p>
        ),
        visual: <RiskInContext />,
      },
    ]}
    cta={{ headline: "Spend time with customers, not searching for answers." }}
  />
);

export default ForCSMs;
