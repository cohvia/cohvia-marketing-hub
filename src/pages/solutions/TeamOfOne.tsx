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
    headline={
      <>
        You <em className="italic underline decoration-primary decoration-2 underline-offset-4">are</em> the CS team. Cohvia is your second pair of hands.
      </>
    }
    subheadline="You're the entire CS function, and you need a system that holds the context a whole team would normally carry."
    pain={{
      headline: "You're doing the job of four people, and your customers can feel it.",
      body: (
        <>
          <p>
            You own the handover from Sales, build the success plans, run the QBRs, watch the renewals, and you're also the first person customers email when something breaks. The job has expanded to fill every hour, and then some.
          </p>
          <p>
            You care about every account. But there are 30 of them, there's no team behind you, and the system holding it all together is your memory, your calendar, and a spreadsheet that stopped being accurate in February.
          </p>
          <p>
            The worst part is that you know things are slipping. You just can't see where fast enough to do anything about it.
          </p>
        </>
      ),
    }}
    blocks={[
      {
        title: "The Narrative remembers so you don't have to",
        body: (
          <p>
            You can't hold 30 relationships in your head, and you don't need to. Every account has a living Narrative that covers why they bought, what they care about, and where things stand. Open any account and you've got the full picture in two minutes, even the account you haven't touched in three weeks. Especially that one.
          </p>
        ),
        visual: <NarrativeWhy />,
      },
      {
        title: "Ask Cohvia instead of going hunting",
        body: (
          <p>
            There's no time to dig through Gong, Salesforce, Gmail, and Zendesk before every call. So ask Cohvia instead. It knows every account, cross-references the sources, and gives you answers with the citations attached. Five minutes of prep, not twenty.
          </p>
        ),
        visual: <AskCohviaPrep />,
      },
      {
        title: "Plans that don't live in your head",
        body: (
          <p>
            When you're a team of one, the plans tend to live in your head and nowhere else. Cohvia gives every account a structured plan your customer can see and act on, so they check off their own items and you stop carrying the whole thing alone.
          </p>
        ),
        visual: <SuccessPlanWithVisibility />,
      },
      {
        title: "Sales handover without a CSM to hand to",
        body: (
          <p>
            At most companies the AE hands the account to a CSM. At yours, they hand it to you, and you're already handling five other things. Cohvia generates the Narrative from the sales data automatically, ready for you to review when you've got the time. The context stops waiting for you to be free.
          </p>
        ),
        visual: <AENarrativeAutoDraft />,
      },
      {
        title: "Renewals you actually see coming",
        body: (
          <p>
            When there's no CS Leader watching the book, renewals have a habit of sneaking up. Cohvia auto-activates the renewal plan at the threshold you set, surfaces the countdown in the Portfolio, and flags it in Needs Attention if the plan stalls. You stop being surprised by renewal dates you technically knew about and forgot.
          </p>
        ),
        visual: <RenewalPlan />,
      },
      {
        title: "Risk signals when nobody else is watching",
        body: (
          <p>
            There's no CS Leader reviewing your book, so Cohvia watches it for you. Stakeholder changes, engagement drops, sentiment shifts, and competitor mentions all surface inside the Narrative with the context that explains them. Including the honest one: "You haven't touched this account in 21 days." Sometimes you need the nudge.
          </p>
        ),
        visual: <RiskInNarrative />,
      },
    ]}
    cta={{ headline: "You don't need a bigger team. You need a system that carries the context with you." }}
  />
);

export default TeamOfOne;
