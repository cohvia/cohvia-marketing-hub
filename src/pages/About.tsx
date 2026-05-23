import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="gradient-hero absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-10 md:pt-20 md:pb-12 text-center relative">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            We're building the CS platform we always wanted
          </h1>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
            Cohvia was born from a simple frustration: Customer Success teams deserve better tools.
          </p>
        </div>
      </section>

      {/* Name origin */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="surface-card rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">Where the name comes from</h2>
            <p className="text-secondary-foreground leading-relaxed italic">
              Cohvia is inspired by Irish Gaelic roots — <em>cothú</em>, meaning
              to nurture and cultivate growth, and <em>comh</em> and{" "}
              <em>beatha</em>, meaning together and life. Together, they reflect
              a simple belief: Customer success works best when it's mutual.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="surface-card rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">Our mission</h2>
            <p className="text-secondary-foreground leading-relaxed mb-4">
              Customer Success is one of the most important functions in any B2B SaaS company — yet CS teams 
              are still stuck using tools that were never built for them. Generic CRMs, scattered spreadsheets, 
              and tribal knowledge don't scale.
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              We're building Cohvia to change that. An AI-native platform that gives CS teams total clarity 
              over every customer relationship — so they can focus on what they do best: helping customers succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">The team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="surface-card rounded-xl p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-1">Team Member</h3>
                <p className="text-sm text-muted-foreground mb-3">Co-founder & Role</p>
                <p className="text-sm text-secondary-foreground leading-relaxed">
                  Placeholder bio. Background in Customer Success and SaaS.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
