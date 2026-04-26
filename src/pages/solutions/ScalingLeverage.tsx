import SolutionPage from "@/components/solutions/SolutionPage";
import { QBRPrep, CoverageScale } from "@/components/solutions/visuals";

const ScalingLeverage = () => (
  <SolutionPage
    chip="Use Case"
    headline="Do more with fewer people. Without losing quality."
    subheadline="Your team is being asked to cover more accounts with the same headcount. Everyone else is automating the relationship away. Cohvia helps you scale the understanding instead."
    pain={{
      headline: "The math doesn't work anymore.",
      body: (
        <p>
          CS teams are being asked to do more with less. The response from the industry: automate everything. AI chatbots. Auto-generated QBRs. Automated check-in emails. Remove the human from Customer Success. Cohvia takes the opposite position: use AI to deepen human understanding, not replace human connection.
        </p>
      ),
    }}
    helpLabel="How Cohvia Helps"
    blocks={[
      {
        title: "QBR prep in five minutes, not two hours",
        body: (
          <p>
            Ask Cohvia to prep you. It pulls from the Narrative, active plans, risk signals, goal progress, and recent activity. You get a structured brief in seconds: what's going well, what's at risk, what to discuss, what the customer cares about right now. You walk in actually prepared, not performatively prepared.
          </p>
        ),
        visual: <QBRPrep />,
      },
      {
        title: "Coverage without headcount",
        body: (
          <p>
            The Narrative holds the understanding for every account. AI keeps it current. Your CSM doesn't need to re-read Gong transcripts, search Slack, or dig through CRM notes. They open the account, read the story, and know where things stand. This is how a team of 3 covers a book that used to need 6. Not by automating the relationship: by automating the context.
          </p>
        ),
        visual: <CoverageScale />,
      },
      {
        title: "Your best CSM's process, available to everyone",
        body: (
          <p>
            Templates for Success Plans, Onboarding, and Renewals. Workflows that fire automatically. When one CSM figures out what works, the CS Leader promotes it to the team. New CSMs ramp faster because every account has a Narrative. Senior CSMs move faster because the admin work is done.
          </p>
        ),
      },
      {
        title: "The counter-position",
        body: (
          <>
            <p>
              Everyone else is automating the relationship away. AI chatbots. Auto-generated QBRs. Automated check-in emails. The industry is using AI to remove humans from Customer Success.
            </p>
            <p>
              Cohvia uses AI to do the opposite: deepen understanding so your team can be more present, not less. That's not a tagline. It's the product.
            </p>
          </>
        ),
      },
    ]}
    cta={{ headline: "Scale the understanding. Keep the human touch." }}
  />
);

export default ScalingLeverage;
