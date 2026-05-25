import { Section, SectionHeader, Prose } from "@/components/ui-kit";

const SolutionSection = () => (
  <Section tone="glow" pad="md" width="prose">
    <SectionHeader
      eyebrow="The solution"
      title="The why, always within reach."
    />
    <Prose>
      <p>
        Cohvia connects to your CRM, call recordings, email, and support
        tickets — and builds a living account narrative for every customer. Not
        a dashboard. Not a health score. A real, structured understanding of who
        they are and why they're here.
      </p>
      <p>Your team stops guessing and starts knowing.</p>
    </Prose>
  </Section>
);

export default SolutionSection;
