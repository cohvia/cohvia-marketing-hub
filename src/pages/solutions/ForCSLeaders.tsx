import SolutionPage from "@/components/solutions/SolutionPage";
import {
  PortfolioByCSM,
  NeedsAttention,
  CustomSignal,
  HandoverEnrich,
  TeamBookDistribution,
  ReassignedAccount,
} from "@/components/solutions/visuals";

const ForCSLeaders = () => (
  <SolutionPage
    chip="For CS Leaders"
    headline="Scale the team without losing the human touch."
    subheadline="More accounts, fewer people, same expectation of quality. Cohvia gives you visibility across the book through understanding, not another dashboard."
    pain={{
      headline: "You shouldn't have to ask a CSM what's going on with their accounts.",
      body: (
        <p>
          Right now, the only way to know where an account stands is to ask the CSM, and you get the highlight reel once a week. If they're out sick you're blind, and if they leave you're starting from scratch. The understanding lives in their head, not the system.
        </p>
      ),
    }}
    blocks={[
      {
        title: "Read any account's story in two minutes",
        body: (
          <p>
            Open any account and read the Narrative without scheduling a meeting. Group by CSM, filter by health, sort by renewal. AI Fields surface structured insights as sortable columns, like champion name, competitors mentioned, and sentiment.
          </p>
        ),
        visual: <PortfolioByCSM />,
      },
      {
        title: "One view for everything that needs you",
        body: (
          <p>
            Stalled plans, renewals coming up, risk signals, accounts with no owner: all of it rolled up per account and sorted by severity. The sidebar badge is your daily pulse check.
          </p>
        ),
        visual: <NeedsAttention />,
      },
      {
        title: "Balance the book across your team",
        body: (
          <p>
            See account counts, health scores, and renewal dates grouped by CSM at a glance. Spot overloaded team members, uneven risk concentration, and upcoming coverage gaps before they become problems. Reassign accounts in seconds, and the Narrative travels with them.
          </p>
        ),
        visual: <TeamBookDistribution />,
      },
      {
        title: "Risk signals you define yourself",
        body: (
          <p>
            Describe the pattern the way you'd say it out loud: "Alert me when a champion hasn't been on the last three calls." Test it against 30 days of data, tune the wording if it's too noisy, and turn it on. No data science team, no ticket to engineering.
          </p>
        ),
        visual: <CustomSignal />,
      },
      {
        title: "Handovers you can trust",
        body: (
          <p>
            Every sales handover generates a full Narrative before the CSM sees it, and the AE reviews and enriches it. When CSMs transfer accounts, the Narrative stays with the account. The understanding doesn't walk out the door at 5pm on someone's last day.
          </p>
        ),
        visual: <HandoverEnrich />,
      },
      {
        title: "CSM-to-CSM handovers without the scramble",
        body: (
          <p>
            When a CSM takes over an account, they don't need to watch four years of Gong recordings to get up to speed. The Narrative is already there: why the customer bought, who matters, what's at risk, and where things stand. They walk into the first call informed, and the customer never feels the transition.
          </p>
        ),
        visual: <ReassignedAccount />,
      },
      {
        title: "Templates from your best CSMs, shared with the team",
        body: (
          <p>
            Standard templates for Success Plans, Onboarding, and Renewals come built in. When one of your CSMs figures out something that works, you promote it to the whole team. Consistency without micromanagement.
          </p>
        ),
      },
    ]}
    cta={{ headline: "Lead with understanding, not a spreadsheet." }}
  />
);

export default ForCSLeaders;
