import { Section, SectionHeader, EmailCaptureForm, Prose } from "@/components/ui-kit";

const WaitlistSection = () => (
  <Section id="waitlist" tone="glow" pad="lg" width="prose">
    <SectionHeader
      title="Customer Success should be mutual."
      className="mb-6 md:mb-6"
    />
    <Prose className="mb-10">
      <p>
        Cohvia is in early access. We're building this with CS teams who believe
        the best customer relationships aren't managed — they're nurtured. If
        that sounds like your team, we should talk.
      </p>
    </Prose>
    <EmailCaptureForm />
  </Section>
);

export default WaitlistSection;
