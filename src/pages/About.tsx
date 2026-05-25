import Layout from "@/components/layout/Layout";
import { PageHero, Section, Card } from "@/components/ui-kit";

const About = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="About"
        title="We're building the CS platform we always wanted"
        subtitle="Cohvia was born from a simple frustration: Customer Success teams deserve better tools."
      />

      <Section pad="md" width="default">
        <Card className="p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4">Where the name comes from</h2>
          <p className="text-secondary-foreground leading-relaxed italic">
            Cohvia is inspired by Irish Gaelic roots — <em>cothú</em>, meaning
            to nurture and cultivate growth, and <em>comh</em> and{" "}
            <em>beatha</em>, meaning together and life. Together, they reflect
            a simple belief: Customer success works best when it's mutual.
          </p>
        </Card>
      </Section>

      <Section pad="md" width="default">
        <Card className="p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4">Our mission</h2>
          <p className="text-secondary-foreground leading-relaxed mb-4">
            Customer Success is one of the most important functions in any B2B
            SaaS company — yet CS teams are still stuck using tools that were
            never built for them. Generic CRMs, scattered spreadsheets, and
            tribal knowledge don't scale.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            We're building Cohvia to change that. An AI-native platform that
            gives CS teams total clarity over every customer relationship — so
            they can focus on what they do best: helping customers succeed.
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
    </Layout>
  );
};

export default About;
