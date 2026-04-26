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
    subheadline="Your CRM knows what happened. Your call tool knows when. Cohvia captures why: why they chose you, why they stay, what drives them, what worries them, and how to make them a superstar."
    pain={{
      headline: "You have data about your customers. You don't have understanding.",
      body: (
        <>
          <p>
            You know their ARR. You know their renewal date. You know how many tickets they filed last month.
          </p>
          <p>
            But can you tell me why they bought in the first place? What success looks like in their words, not yours? Who the real champion is and what motivates them personally? What would make them leave?
          </p>
          <p>
            That understanding exists. It's in your Gong calls, your email threads, your support tickets, your CSM's head. It's just never been assembled into something useful.
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
              Every account gets a living strategic document. Eight sections that answer the questions nobody else is asking.
            </p>
            <p>
              Built from real data across your connected tools. Every claim cited to its source. Updated continuously. Owned by your team.
            </p>
          </>
        ),
        visual: <NarrativeEightSections />,
      },
      {
        title: "Ask Cohvia",
        body: (
          <p>
            A global AI chat that knows every account. Ask it why a customer bought, who the skeptic is, what changed since last quarter. Get answers grounded in your data, not hallucinated summaries.
          </p>
        ),
        visual: <AskCohviaPrep />,
      },
      {
        title: "AI Fields",
        body: (
          <p>
            Define fields in plain language. AI fills them from transcripts, emails, and tickets. Champion name. Primary use case. Competitors mentioned. Sentiment. Structured insights without the data entry. (Without the CSM forgetting to do the data entry.)
          </p>
        ),
        visual: <AIFieldsPortfolio />,
      },
      {
        title: "Inline citations",
        body: (
          <p>
            Every claim in the Narrative links to its source: a specific Gong call with a timestamp, an email thread, a support ticket. Click to verify. A data sources panel shows everything the AI used. Trust, not faith.
          </p>
        ),
      },
    ]}
    cta={{
      headline:
        "They help you get up to speed on customer data. Cohvia helps you get up to speed on a customer relationship.",
    }}
  />
);

export default RelationshipIntelligence;
