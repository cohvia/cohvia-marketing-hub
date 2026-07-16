import { Section, SectionHeader } from "@/components/ui-kit";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FAQ {
  question: string;
  answer: string;
}

export const homepageFAQs: FAQ[] = [
  {
    question: "What is Cohvia?",
    answer:
      "Cohvia is a Customer Context Platform for B2B SaaS Customer Success. It turns scattered customer signals — calls, emails, tickets, and CRM activity — into a clear, AI-generated Customer Narrative for every account. From that narrative, Cohvia captures why each customer bought, auto-generates Success Plans, surfaces risk signals early, and gives customers a branded portal to track progress.",
  },
  {
    question: "What is a Customer Context Platform?",
    answer:
      "A new B2B SaaS category that turns scattered signals — calls, emails, tickets, CRM — into one AI-generated narrative per customer. Where traditional Customer Success Platforms organize tasks and health scores, a Customer Context Platform organizes understanding: why they bought, what success looks like in their words, and where risk is quietly building.",
  },
  {
    question: "What is a Customer Narrative?",
    answer:
      "A living strategic document explaining the why behind an account. Cohvia generates one per customer, with structured sections like why they bought, what success looks like, who the champion is, and where risk is building. Every claim is cited to its source (a Gong call, email, ticket) and updates continuously.",
  },
  {
    question: "How is Cohvia different from a legacy customer success platform?",
    answer:
      "Gainsight and ChurnZero organize the work — health scores, playbooks, tasks. Cohvia organizes the understanding. Instead of more data entry, it reads what you already have and assembles a cited narrative per account. Plans and risk signals sit on top of that understanding, not next to it.",
  },
  {
    question: "Can AI write a customer success plan?",
    answer:
      "Yes. Cohvia drafts Success Plans from sales and onboarding context — calls, emails, contracts — proposing goals, milestones, and actions grounded in what the customer actually said. The CSM reviews and activates; the customer sees a curated version in their portal. AI does the first draft; the human owns the relationship.",
  },
  {
    question: "What's the difference between a success plan and a playbook?",
    answer:
      "A playbook is an internal recipe — the steps your team runs for onboarding, QBRs, or renewals. A success plan is a shared, customer-facing artifact: the specific goals and milestones agreed with one account. Playbooks scale your process; success plans align you with the customer. Cohvia gives you both, with the plan informed by the Customer Narrative.",
  },
  {
    question: "How much does Cohvia cost?",
    answer:
      "Cohvia is in early access; pricing is being finalized with design partners. Plans will be usage-based on accounts under management, with tiers for small teams, growing CS orgs, and enterprise. Join the waitlist or visit the pricing page to be notified.",
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
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    const next = new Set(open);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setOpen(next);
  };

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
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((f, i) => {
          const isOpen = open.has(i);
          return (
            <article
              key={f.question}
              className="surface-card rounded-xl overflow-hidden"
            >
              <h3>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="text-lg md:text-xl font-semibold text-foreground">
                    {f.question}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  >
                    <ChevronDown size={18} className="text-primary" />
                  </span>
                </button>
              </h3>
              <div
                id={`faq-answer-${i}`}
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-secondary-foreground leading-relaxed">
                    {f.answer}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQSection;
