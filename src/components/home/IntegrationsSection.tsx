import { Section, SectionHeader, IntegrationPill } from "@/components/ui-kit";

const integrations = [
  "Salesforce",
  "HubSpot",
  "Attio",
  "Gong",
  "Chorus",
  "Fireflies",
  "Fathom",
  "Gmail",
  "Outlook",
  "Intercom",
  "Zendesk",
  "Pylon",
];

const IntegrationsSection = () => (
  <Section pad="md" width="default" innerClassName="text-center">
    <SectionHeader
      eyebrow="Integrations"
      title="Works with the tools you already use."
      className="mb-6 md:mb-8"
    />

    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
      {integrations.map((name) => (
        <IntegrationPill key={name} name={name} />
      ))}
    </div>

    <p className="text-sm text-muted-foreground">
      Cohvia reads from your systems. It never writes back.
    </p>
  </Section>
);

export default IntegrationsSection;
