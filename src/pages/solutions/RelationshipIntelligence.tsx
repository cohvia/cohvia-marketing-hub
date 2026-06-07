import SolutionPage from "@/components/solutions/SolutionPage";
import {
  NarrativeEightSections,
  AskCohviaPrep,
  AIFieldsPortfolio,
} from "@/components/solutions/visuals";

const RelationshipIntelligence = () => (
  <SolutionPage
    chip="Use Case"
    headline="Understand the why behind every customer relationship."
    subheadline="Your CRM holds the what and the when. Cohvia holds the why: why they chose you, why they stay, what's quietly putting the relationship at risk."
    seoPath="/solutions/relationship-intelligence"
    pain={{
      headline: "You have a lot of data about your customers. You don't have a lot of understanding.",
      body: (
        <>
          <p>
            You know their ARR, their renewal date, and how many tickets they filed last month. Your CRM might even tell you the closed-won reason the AE typed in twelve months ago.
          </p>
          <p>
            What it can't tell you is the texture: why they really bought, what success looks like in their words rather than yours, who the actual champion is and what motivates them, what would quietly make them leave.
          </p>
          <p>
            That understanding does exist. It's sitting in your Gong calls, your email threads, your support tickets, and your CSM's head. It just hasn't ever been assembled into something usable.
          </p>
        </>
      ),
    }}
    helpLabel="How Cohvia Solves It"
    blocks={[
      {
        title: "The Customer Narrative",
        body: (
          <>
            <p>
              Every account gets a living strategic document made of eight sections, each one answering a question nobody else is asking about that relationship.
            </p>
            <p>
              It's built from real data across your connected tools, with every claim cited to the source it came from, updated continuously, and owned by your team.
            </p>
          </>
        ),
        visual: <NarrativeEightSections />,
      },
      {
        title: "Ask Cohvia",
        body: (
          <p>
            A global chat that knows every account in your book. Ask it why a customer bought, who the skeptic in the room is, or what's changed since last quarter, and you get answers grounded in your own data, not the hallucinated summary other AI tools tend to hand back.
          </p>
        ),
        visual: <AskCohviaPrep />,
      },
      {
        title: "AI Fields",
        body: (
          <p>
            Define a field in plain language and Cohvia fills it from your transcripts, emails, and tickets: champion name, primary use case, competitors mentioned, sentiment. The structured insights show up sortable across the Portfolio, every answer cited to its source. No CSM forgets to do the data entry because there's no data entry left to do.
          </p>
        ),
        visual: <AIFieldsPortfolio />,
      },
      {
        title: "Inline citations",
        body: (
          <p>
            Every claim in the Narrative links back to where it came from: a specific Gong call with a timestamp, an email thread, a support ticket. Click to verify. A data sources panel shows everything the AI used to assemble the picture. Trust, not faith.
          </p>
        ),
      },
    ]}
    cta={{
      headline:
        "Other tools help you get up to speed on customer data. Cohvia helps you get up to speed on the customer relationship.",
    }}
  />
);

export default RelationshipIntelligence;
