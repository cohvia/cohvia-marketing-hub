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
    subheadline="Risk signals and portfolio visibility for CS Leaders and CSMs, with the context that explains why each signal matters."
    seoPath="/solutions/book-health"
    pain={{
      headline: "A health score on its own isn't a strategy.",
      body: (
        <p>
          A red dot tells you an account is at risk. It doesn't tell you the champion left, or that the ticket from three weeks ago never got resolved, or what you should actually do about it. By the time you've pieced the story together, you're running a save motion that should never have been needed.
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
              Some risks Cohvia catches on its own from the data already flowing in: a stakeholder leaving, a spike in support tickets, sentiment turning, engagement falling off, a competitor name showing up in a call, a renewal with no plan attached.
            </p>
            <p>
              Others your team flags by hand, like budget pressure, internal politics, or an executive who's gone quiet. Either way, the signal lives inside the Narrative, right next to the context that explains why it matters.
            </p>
          </>
        ),
        visual: <RiskInNarrative />,
      },
      {
        title: "Custom signals you describe in plain language",
        body: (
          <p>
            Describe a pattern the way you'd say it out loud. "Alert me when a decision-maker hasn't been on the last three calls." "Flag when a customer mentions evaluating someone else." Test it against the last 30 days of your data, tune the wording until it's catching the right things, and turn it on. No data science team, no ticket to engineering.
          </p>
        ),
        visual: <CustomSignal />,
      },
      {
        title: "Portfolio visibility without dashboards",
        body: (
          <p>
            Group accounts by CSM, health, lifecycle stage, or tag, and surface AI Fields as sortable columns. Risk indicators show which accounts need attention, and you can sort by renewal, ARR, or last activity. Table view if you live in spreadsheets, list view if you don't.
          </p>
        ),
        visual: <PortfolioHealth />,
      },
      {
        title: "Needs Attention: one view for the accounts that need you today",
        body: (
          <p>
            Stalled plans, overdue milestones, renewals coming up, risk signals, accounts with no owner: all of it rolled up per account and sorted by severity, with critical in red and warning in amber. The sidebar badge is your morning check-in.
          </p>
        ),
        visual: <NeedsAttention />,
      },
      {
        title: "Understanding is the best churn prevention",
        body: (
          <p>
            You don't prevent churn with a health score. You prevent it by knowing why a customer bought, what success looks like in their words, and noticing the moment something changes. A champion leaving is a data point. Knowing that champion was the only person in the room who actually believed in you is understanding. The difference is whether you save the account.
          </p>
        ),
      },
    ]}
    cta={{ headline: "See the risk. Understand the why. Act in time." }}
  />
);

export default BookHealth;
