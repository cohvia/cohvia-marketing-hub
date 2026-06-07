import SolutionPage from "@/components/solutions/SolutionPage";
import {
  NarrativeWhy,
  AskCohviaPrep,
  PortalCheckoff,
  NewAccountReady,
  RiskInContext,
  ReassignedAccount,
} from "@/components/solutions/visuals";

const ForCSMs = () => (
  <SolutionPage
    chip="For CSMs"
    headline="Know every account like it's your only one."
    subheadline="You care about every account you manage. Cohvia helps you show up for each one like it's the only one."
    seoPath="/solutions/csms"
    pain={{
      headline: "You'd prep for every call if you had the time.",
      body: (
        <p>
          Re-reading Gong transcripts. Checking support tickets before the QBR. Keeping the success plan current. You know what good looks like, but with forty accounts and a calendar full of back-to-backs, the prep time just isn't there. Cohvia surfaces the context you need so you can walk into every conversation informed and ready.
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
        title: "Take over an account without starting from zero",
        body: (
          <p>
            When you're assigned an account from another CSM, you don't need to watch four years of Gong recordings to manage it well. The Narrative covers why they bought, who the key people are, what's gone wrong before, and where things stand today. You walk into your first call sounding like you've been there all along.
          </p>
        ),
        visual: <ReassignedAccount />,
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
