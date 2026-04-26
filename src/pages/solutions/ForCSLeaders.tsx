import SolutionPage from "@/components/solutions/SolutionPage";
import {
  PortfolioByCSM,
  NeedsAttention,
  CustomSignal,
  HandoverEnrich,
} from "@/components/solutions/visuals";

const ForCSLeaders = () => (
  <SolutionPage
    chip="For CS Leaders"
    headline="Scale your team without losing the human touch."
    subheadline="More accounts, fewer people, same expectation of quality. Cohvia gives you visibility across your book through understanding, not dashboards."
    pain={{
      headline: "You shouldn't have to ask your CSMs what's going on.",
      body: (
        <p>
          The only way to know where an account stands is to ask. The CSM gives you the highlight reel. You get it once a week. If they're sick, you're blind. If they leave, you're starting over.
        </p>
      ),
    }}
    blocks={[
      {
        title: "See every account's story",
        body: (
          <p>
            Open any account, read the Narrative in two minutes. No meeting required. Group by CSM, filter by health, sort by renewal. AI Fields show structured insights as sortable columns: champion name, competitors mentioned, sentiment.
          </p>
        ),
        visual: <PortfolioByCSM />,
      },
      {
        title: "One view for everything that needs you",
        body: (
          <p>
            Stalled plans, approaching renewals, risk signals, unassigned accounts: all rolled up per account, sorted by severity. The sidebar badge is your daily pulse check.
          </p>
        ),
        visual: <NeedsAttention />,
      },
      {
        title: "Risk signals you define",
        body: (
          <p>
            Describe patterns in plain language. "Alert me when a champion hasn't been on the last three calls." Test against 30 days of data. Deploy. Adjust if it's too noisy. No data science team, no ticket to engineering.
          </p>
        ),
        visual: <CustomSignal />,
      },
      {
        title: "Handovers you can trust",
        body: (
          <p>
            Every sales handover generates a full Narrative before the CSM sees it. The AE reviews and enriches it. When CSMs transfer accounts, the Narrative stays. The understanding doesn't walk out the door at 5pm on someone's last day.
          </p>
        ),
        visual: <HandoverEnrich />,
      },
      {
        title: "Team templates and promoted workflows",
        body: (
          <p>
            Standard Success Plan, Onboarding, and Renewal templates. Promote what your best CSMs do to the whole team. Consistency without micromanagement.
          </p>
        ),
      },
    ]}
    cta={{ headline: "Lead with understanding, not spreadsheets." }}
  />
);

export default ForCSLeaders;
