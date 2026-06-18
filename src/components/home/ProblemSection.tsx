import { Section, SectionHeader } from "@/components/ui-kit";

const questions = [
  "Why did they choose you over everyone else?",
  "Why do they keep renewing — or quietly pull away?",
  "Why does this metric matter to them this quarter?",
];

const ProblemSection = () => (
  <Section pad="sm" width="prose">
    <SectionHeader
      eyebrow="The problem"
      title="You know their name. But do you know their why?"
    />
    <ul className="space-y-3 text-lg text-secondary-foreground mb-5">
      {questions.map((q) => (
        <li key={q} className="flex gap-3">
          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          <span>{q}</span>
        </li>
      ))}
    </ul>
    <p className="text-lg text-foreground font-medium">
      You can't make your customer a superstar if you don't understand what drives them.
    </p>
  </Section>
);

export default ProblemSection;
