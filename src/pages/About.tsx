import Layout from "@/components/layout/Layout";
import { PageHero, Section, Card, CTASection } from "@/components/ui-kit";

const About = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="About"
        title="We're building the Customer Success platform we always wanted to use."
        subtitle="Cohvia is the tool we wished existed when we were the ones running the QBRs and dreading the handover calls."
      />

      <Section pad="md" width="default">
        <Card className="p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4">Where the name comes from</h2>
          <p className="text-secondary-foreground leading-relaxed">
            Cohvia draws on Irish Gaelic roots: <em>cothú</em>, to nurture and
            grow something carefully, joined with <em>comh</em> and{" "}
            <em>beatha</em>, together and life. The name reflects a simple
            belief that runs through the product: Customer Success works when
            it's mutual, and falls apart when it isn't.
          </p>
        </Card>
      </Section>

      <Section pad="md" width="default">
        <Card className="p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4">Our mission</h2>
          <p className="text-secondary-foreground leading-relaxed mb-4">
            Customer Success is one of the most important functions in any B2B
            SaaS company. And it's still being run on tools that were built
            for a different job: a CRM designed for the sales pipeline, a
            spreadsheet that stopped being accurate two quarters ago, a folder
            of Gong recordings nobody has time to re-watch.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            We're building Cohvia so the context that makes a CSM good at
            their job actually lives somewhere, instead of in one person's
            head. That's the bet. So the team can spend its time on the
            customer, not on the archaeology.
          </p>
        </Card>
      </Section>

      <Section pad="md" width="default">
        <h2 className="text-2xl font-bold mb-8 text-center">The team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="text-center">
              <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-1">Team Member</h3>
              <p className="text-sm text-muted-foreground mb-3">Co-founder & Role</p>
              <p className="text-sm text-secondary-foreground leading-relaxed">
                Placeholder bio. Background in Customer Success and SaaS.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection title={<>Help us put the human back into <span className="gradient-brand">Customer Success.</span></>} />
    </Layout>
  );
};

export default About;
