import { Section, SectionHeader, Prose } from "@/components/ui-kit";

const ProblemSection = () => (
  <Section pad="sm" width="prose">
    <SectionHeader
      eyebrow="The problem"
      title="You know their name. But do you know their why?"
    />
    <Prose>
      <p>
        Why did they choose you over everyone else? Why do they keep renewing —
        or why are they quietly pulling away? Why does this metric matter to
        them this quarter? You can't make your customer a superstar if you
        don't understand what drives them.
      </p>
    </Prose>
  </Section>
);

export default ProblemSection;
