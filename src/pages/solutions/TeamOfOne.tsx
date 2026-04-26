import SolutionPage from "@/components/solutions/SolutionPage";
import {
  NarrativeWhy,
  AskCohviaPrep,
  SuccessPlanWithVisibility,
  AENarrativeAutoDraft,
  RenewalPlan,
  RiskInNarrative,
} from "@/components/solutions/visuals";

const TeamOfOne = () => (
  <SolutionPage
    chip="For Teams of One"
    headline="You are the CS team. Cohvia is your second pair of hands."
    subheadline="No CS Leader above you. No CSM below you. Just you, your accounts, and a product that holds the understanding you don't have time to maintain yourself."
    pain={{
      headline: "You're doing the job of four people. You know it. Your customers feel it.",
      body: (
        <>
          <p>
            You own the handover from Sales. You build the success plans. You run the QBRs. You monitor renewals. You're the first person they email when something breaks and the last person who gets to eat lunch.
          </p>
          <p>
            You care deeply about every customer. But you have 30 accounts, no team, and no system beyond your memory, your calendar, and a spreadsheet that stopped being accurate in February.
          </p>
          <p>
            The worst part: you know things are slipping. You just can't see where fast enough.
          </p>
        </>
      ),
    }}
    blocks={[
      {
        title: "The Narrative remembers so you don't have to",
        body: (
          <p>
            You can't hold 30 relationships in your head. You don't need to. Every account has a living Narrative: why they bought, what they care about, where things stand. Open any account and get the full picture in two minutes. Even the one you haven't touched in three weeks. (Especially that one.)
          </p>
        ),
        visual: <NarrativeWhy />,
      },
      {
        title: "Ask Cohvia instead of searching",
        body: (
          <p>
            No time to dig through Gong, Salesforce, Gmail, and Zendesk before every call. Ask Cohvia. It knows every account, cross-references everything, and gives you answers with sources. Five minutes of prep instead of twenty.
          </p>
        ),
        visual: <AskCohviaPrep />,
      },
      {
        title: "Plans that don't live in your head",
        body: (
          <p>
            When you're a team of one, the plans are in your head and nowhere else. Cohvia gives every account a structured plan your customer can see and act on. They check off their items. You stop carrying everything alone.
          </p>
        ),
        visual: <SuccessPlanWithVisibility />,
      },
      {
        title: "Sales handover without a CSM to hand to",
        body: (
          <p>
            At most companies, the AE hands over to a CSM. At yours, the AE hands over to you. And you're also handling five other things. Cohvia generates the Narrative from the sales data automatically. You review it when you have time. The context doesn't wait for you to be free.
          </p>
        ),
        visual: <AENarrativeAutoDraft />,
      },
      {
        title: "Renewals you actually see coming",
        body: (
          <p>
            When there's no CS Leader watching the book, renewals sneak up on you. Cohvia auto-activates renewal plans at the threshold you set. Countdown colors in the Portfolio. Needs Attention flags if the plan stalls. You stop being surprised by renewal dates you technically knew about but forgot.
          </p>
        ),
        visual: <RenewalPlan />,
      },
      {
        title: "Risk signals when nobody else is watching",
        body: (
          <p>
            There's no CS Leader reviewing your book. Cohvia watches it for you. Stakeholder changes, engagement drops, sentiment shifts, competitor mentions: surfaced inside the Narrative with context. Including the honest signal: "You haven't touched this account in 21 days." Sometimes you need the nudge.
          </p>
        ),
        visual: <RiskInNarrative />,
      },
    ]}
    cta={{ headline: "You don't need a bigger team. You need a smarter system." }}
  />
);

export default TeamOfOne;
