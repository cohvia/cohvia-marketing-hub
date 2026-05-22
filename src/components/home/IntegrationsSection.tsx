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
  <section className="py-12 md:py-16">
    <div className="mx-auto max-w-4xl px-6 text-center">
      <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">
        Integrations
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Works with the tools you already use.
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {integrations.map((name) => (
          <span
            key={name}
            className="surface-card rounded-lg px-5 py-3 text-sm font-medium text-secondary-foreground"
          >
            {name}
          </span>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Cohvia reads from your systems. It never writes back.
      </p>
    </div>
  </section>
);

export default IntegrationsSection;
