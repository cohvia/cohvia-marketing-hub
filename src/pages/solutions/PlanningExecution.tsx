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
    subheadline="Success plans, onboarding, and renewals that are structured, collaborative, and visible to the customer. Informed by the Narrative, not built from scratch every time."
    seoPath="/solutions/planning-execution"
    pain={{
      headline: "A plan in a Google Doc nobody updates isn't really a plan.",
      body: (
        <p>
          You start with the best intentions: a kickoff doc, a shared spreadsheet, maybe a project in your PM tool. Three weeks later nobody has touched it, the customer has no visibility, and the next QBR slides get built from a blank page. Again.
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
              Every account gets a Main Success Plan that's auto-suggested from the sales handover data, with goals, milestones, and actions that ladder up to what the customer actually cares about.
            </p>
            <p>
              There are two views of the plan: the internal one with full detail, and a customer view that the CSM curates by toggling visibility per milestone. The shared version goes through the portal, where customers check off actions, edit the goals you share with them, and manage who in their organization has access.
            </p>
          </>
        ),
        visual: <SuccessPlanWithVisibility />,
      },
      {
        title: "Onboarding without reinventing the wheel",
        body: (
          <p>
            Cohvia suggests an Onboarding Plan from the sales conversations. Your CS Leader defines the default template, the CSM adjusts and activates it, and the customer sees what's coming, what they need to do, and where things stand. The "when does onboarding actually end?" question stops happening because the answer is visible to everyone.
          </p>
        ),
        visual: <OnboardingPlan />,
      },
      {
        title: "Renewals without the surprises",
        body: (
          <>
            <p>
              Renewal Plans auto-activate when the renewal window opens, with default milestones for executive alignment, ROI summary, expansion opportunities, resolving open issues, commercial terms, contract sent, and contract signed.
            </p>
            <p>
              Countdown colors track urgency from grey through blue and amber to red, and if the plan stalls for 14 days or more it surfaces in Needs Attention. Internal by default; the CSM decides when, and whether, to share it with the customer.
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
