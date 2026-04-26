import SolutionPage from "@/components/solutions/SolutionPage";
import {
  RiskInNarrative,
  CustomSignal,
  PortfolioHealth,
  NeedsAttention,
} from "@/components/solutions/visuals";

const BookHealth = () => (
  <SolutionPage
    chip="Use Case"
    headline="See across your book. Act before things break."
    subheadline="Risk signals, portfolio visibility, and health monitoring for CS Leaders and CSMs. Not health scores in a vacuum: signals with context."
    pain={{
      headline: "Health scores without context aren't a strategy.",
      body: (
        <p>
          A red dot tells you an account is at risk. It doesn't tell you why, or what to do, or whether the issue is the champion who left or the ticket that never got resolved. By the time you figure it out, you're already in a save motion you should never have needed.
        </p>
      ),
    }}
    helpLabel="How Cohvia Helps"
    blocks={[
      {
        title: "Risk in context, not in isolation",
        body: (
          <>
            <p>
              Auto-detected from ingested data: stakeholder transitions, ticket spikes, negative sentiment, engagement drops, competitor mentions, renewals without a plan.
            </p>
            <p>
              Flagged manually by CSMs: budget pressure, internal politics, executive misalignment. Every signal lives inside the Narrative next to the strategic context that explains why.
            </p>
          </>
        ),
        visual: <RiskInNarrative />,
      },
      {
        title: "Custom AI signals you define in plain language",
        body: (
          <p>
            Describe a pattern. "Alert me when a decision-maker hasn't attended the last three calls." "Flag when a customer mentions evaluating competitors." Test against 30 days of data. Tune the description. Deploy. No data science team. No engineering ticket.
          </p>
        ),
        visual: <CustomSignal />,
      },
      {
        title: "Portfolio visibility without dashboards",
        body: (
          <p>
            Accounts grouped by CSM, health, lifecycle stage, or tag. AI Field columns surface structured insights. Risk indicators show which accounts need attention. Sort by renewal, ARR, or last activity. Table view for power users. List view for everyone else.
          </p>
        ),
        visual: <PortfolioHealth />,
      },
      {
        title: "Needs Attention: the accounts that need you right now",
        body: (
          <p>
            One view. Stalled plans, overdue milestones, approaching renewals, risk signals, unassigned accounts. Rolled up per account. Critical: red. Warning: amber. Sorted by severity. The sidebar badge is your morning check-in.
          </p>
        ),
        visual: <NeedsAttention />,
      },
      {
        title: "Understanding is the best churn prevention",
        body: (
          <p>
            You don't prevent churn with health scores. You prevent it by knowing why a customer bought, what success looks like for them, and when something changes. A champion leaving is a data point. Knowing that champion was the only person who believed in you is understanding. The difference determines whether you save the account.
          </p>
        ),
      },
    ]}
    cta={{ headline: "See risk. Understand why. Act in time." }}
  />
);

export default BookHealth;
