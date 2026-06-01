import { Section, SectionHeader } from "@/components/ui-kit";
import { Helmet } from "react-helmet-async";

export interface FAQ {
  question: string;
  answer: string;
}

export const homepageFAQs: FAQ[] = [
  {
    question: "What is a Customer Context Platform?",
    answer:
      "A Customer Context Platform is a new category of B2B SaaS tool that turns scattered signals from calls, emails, tickets, and CRM into a single, AI-generated narrative for every customer relationship. Unlike a traditional Customer Success Platform built around health scores and tasks, a Customer Context Platform is built around understanding: why each customer bought, what success means in their words, and what is quietly putting the relationship at risk.",
  },
  {
    question: "What is a Customer Narrative?",
    answer:
      "A Customer Narrative is a living strategic document that explains the why behind a customer relationship. Cohvia generates one for every account, made of structured sections like why they bought, what success looks like, who the champion is, and where risk is building. Every claim is cited to the source it came from — a Gong call, an email thread, a support ticket — and the narrative updates continuously as new context arrives.",
  },
  {
    question: "How is Cohvia different from a legacy customer success platform?",
    answer:
      "Legacy customer success platforms like Gainsight or ChurnZero organize the work — health scores, playbooks, tasks. Cohvia organizes the understanding. Instead of asking your team to keep entering structured data, Cohvia reads the calls, emails, and tickets you already have and assembles a cited Customer Narrative for every account. Plans and risk signals are built on top of that understanding, not next to it.",
  },
  {
    question: "Can AI write a customer success plan?",
    answer:
      "Yes. Cohvia auto-generates Success Plans from the data captured during the sales cycle and onboarding — calls, emails, contracts — then proposes goals, milestones, and actions grounded in what the customer actually said they wanted. The CSM reviews and edits before activating, and the customer sees a curated version in their branded portal. The AI does the first draft; the human owns the relationship.",
  },
  {
    question: "What's the difference between a success plan and a playbook?",
    answer:
      "A playbook is an internal recipe — the steps your team runs for onboarding, QBRs, or renewals. A success plan is a shared, customer-facing artifact: the specific goals, milestones, and actions agreed with one account. Playbooks scale your process across the team. Success plans align you with the customer on what we are accomplishing together and by when. Cohvia gives you both, with the success plan informed by the Customer Narrative.",
  },
  {
    question: "How much does Cohvia cost?",
    answer:
      "Cohvia is in early access and pricing is being finalized with design partners. Plans will be usage-based on number of customer accounts under management, with tiers for small teams, growing CS organizations, and enterprise. Join the waitlist or visit the pricing page to be notified when public pricing is published.",
  },
];

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  eyebrow?: string;
  emitSchema?: boolean;
}

const FAQSection = ({
  faqs = homepageFAQs,
  title = "Frequently asked questions",
  eyebrow = "FAQ",
  emitSchema = true,
}: FAQSectionProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <Section pad="lg" width="default" id="faq">
      {emitSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      )}
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((f) => (
          <article key={f.question}>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
              {f.question}
            </h3>
            <p className="text-secondary-foreground leading-relaxed">{f.answer}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default FAQSection;
