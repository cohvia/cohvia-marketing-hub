import SolutionPage from "@/components/solutions/SolutionPage";
import {
  SuccessPlanWithVisibility,
  OnboardingPlan,
  RenewalPlan,
} from "@/components/solutions/visuals";

const PlanningExecution = () => (
  <SolutionPage
    chip="Use Case"
    headline="Shared plans for every stage of the relationship."
    subheadline="Success plans, onboarding, renewals: structured, collaborative, visible to your customer. Informed by the Narrative, not built from scratch."
    pain={{
      headline: "Plans that live in a Google Doc nobody updates are not plans.",
      body: (
        <p>
          You start with the best intentions. A kickoff doc. A shared spreadsheet. Maybe a project in your PM tool. Three weeks later nobody's touched it, the customer has no visibility, and the next QBR is built from scratch. Again.
        </p>
      ),
    }}
    helpLabel="How Cohvia Helps"
    blocks={[
      {
        title: "Success Plans your customers can see and act on",
        body: (
          <>
            <p>
              Every account gets a Main Success Plan. Auto-suggested from sales handover data. Goals, milestones, and actions that ladder up to what the customer cares about.
            </p>
            <p>
              Two views: internal (full detail) and customer (curated by the CSM). Toggle visibility per milestone. Share through the portal. Customers check off actions, edit shared goals, manage who in their org has access.
            </p>
          </>
        ),
        visual: <SuccessPlanWithVisibility />,
      },
      {
        title: "Onboarding without reinventing the wheel",
        body: (
          <p>
            AI suggests an Onboarding Plan from the sales conversations. Your CS Leader defines the default template. The CSM adjusts and activates. The customer sees what's coming, what they need to do, and where things stand. No more "when does onboarding end?" because it's visible to everyone.
          </p>
        ),
        visual: <OnboardingPlan />,
      },
      {
        title: "Renewals without surprises",
        body: (
          <>
            <p>
              Renewal Plans auto-activate when the renewal window opens. Default milestones: executive alignment, ROI summary, expansion opportunities, resolve open issues, commercial terms, contract sent, contract signed.
            </p>
            <p>
              Countdown colors track urgency: grey → blue → amber → red. If the plan stalls for 14+ days, it surfaces in Needs Attention. Internal by default. The CSM decides when and whether to share it.
            </p>
          </>
        ),
        visual: <RenewalPlan />,
      },
    ]}
    cta={{ headline: "Plans informed by understanding, executed together." }}
  />
);

export default PlanningExecution;
