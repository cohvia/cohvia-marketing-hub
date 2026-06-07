import SolutionPage from "@/components/solutions/SolutionPage";
import { QBRPrep, CoverageScale } from "@/components/solutions/visuals";

const ScalingLeverage = () => (
  <SolutionPage
    chip="Use Case"
    headline="Do more with fewer people, without losing the quality."
    subheadline="Your team is being asked to cover more accounts with the same headcount. The rest of the industry is automating the relationship away. Cohvia is built to scale the understanding instead."
    seoPath="/solutions/scaling-leverage"
    pain={{
      headline: "The math the team is being asked to do doesn't add up.",
      body: (
        <p>
          CS teams are being asked to do more with less, and the industry response has been to automate the relationship itself: chatbots in front of customers, auto-generated QBRs, automated check-in emails. Cohvia is built on the opposite bet, which is that AI should deepen the human understanding, not stand in for it.
        </p>
      ),
    }}
    helpLabel="How Cohvia Helps"
    blocks={[
      {
        title: "QBR prep in five minutes, not two hours",
        body: (
          <p>
            Ask Cohvia to prep you and it pulls from the Narrative, the active plans, the risk signals, goal progress, and recent activity, and hands back a structured brief in seconds. You see what's going well, what's at risk, what to discuss, and what the customer cares about right now. You walk in actually prepared, not performatively prepared.
          </p>
        ),
        visual: <QBRPrep />,
      },
      {
        title: "Coverage without the headcount",
        body: (
          <p>
            The Narrative holds the understanding for every account, and Cohvia keeps it current. The CSM doesn't need to re-read Gong transcripts, search Slack, or dig through CRM notes before a call. They open the account, read the story, and know where things stand. This is how a team of three covers a book that used to need six: not by automating the relationship, but by automating the context behind it.
          </p>
        ),
        visual: <CoverageScale />,
      },
      {
        title: "Your best CSM's process, available to the whole team",
        body: (
          <p>
            Templates for Success Plans, Onboarding, and Renewals come built in, along with workflows that fire automatically. When one CSM figures out something that works, the CS Leader promotes it to the whole team. New CSMs ramp faster because every account already has a Narrative, and senior CSMs move faster because the admin work is already done.
          </p>
        ),
      },
      {
        title: "The counter-position",
        body: (
          <p>
            The rest of the industry is using AI to remove humans from Customer Success. Cohvia is built on the opposite bet: use AI to deepen the understanding so your team can be more present with customers, not less. That's not a tagline. It's the product.
          </p>
        ),
      },
    ]}
    cta={{ headline: "Scale the understanding. Keep the human touch." }}
  />
);

export default ScalingLeverage;
