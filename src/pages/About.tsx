import Layout from "@/components/layout/Layout";
import {
  PageHero,
  Section,
  SectionHeader,
  Card,
  CTASection,
  BrandLink,
  IconBadge,
} from "@/components/ui-kit";
import {
  Compass,
  HeartHandshake,
  Zap,
  Users,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Customer truth over noise",
    body: "Every product decision starts with what's actually happening inside customer relationships, not what looks good in a dashboard.",
  },
  {
    icon: HeartHandshake,
    title: "Mutual, or not at all",
    body: "Success is shared. We build for the moment a CSM and a customer are looking at the same picture, not two different ones.",
  },
  {
    icon: Zap,
    title: "Ship the boring part",
    body: "The unsexy work — handovers, context, follow-through — is where the real wins live. We obsess over it.",
  },
  {
    icon: Users,
    title: "Lived experience required",
    body: "We've all sat in the chair we're building for. If something feels off to a CSM, that's the bug, not a feature request.",
  },
  {
    icon: Sparkles,
    title: "Calm beats clever",
    body: "We choose the clear path over the impressive one. The product should feel like a relief, not another tab to manage.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageHero
        eyebrow="Company"
        title={<>Building the future of <span className="gradient-brand">Customer Success</span>.</>}
        subtitle="Cohvia is the Customer Success platform we wished existed when we were the ones running the QBRs, dreading the handover calls, and watching context disappear into someone's head."
      >
        <BrandLink href="#story" withArrow>
          Our story
        </BrandLink>
        <BrandLink href="#careers" variant="ghost">
          See open roles
        </BrandLink>
      </PageHero>

      {/* Mission — large statement */}
      <Section id="story" pad="lg" width="default">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Our mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Put the human back into Customer Success.
            </h2>
          </div>
          <div className="md:col-span-3 space-y-5 text-lg text-secondary-foreground leading-relaxed">
            <p>
              Customer Success is one of the most important functions in any B2B
              SaaS company. And it's still being run on tools built for a
              different job — a CRM designed for the sales pipeline, a
              spreadsheet that stopped being accurate two quarters ago, a
              folder of Gong recordings nobody has time to re-watch.
            </p>
            <p>
              We're building Cohvia so the context that makes a CSM good at
              their job actually lives somewhere, instead of in one person's
              head. So the team can spend its time on the customer, not on the
              archaeology.
            </p>
          </div>
        </div>
      </Section>

      {/* Name origin — kept, refined */}
      <Section pad="md" width="default" tone="tinted">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              The name
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="gradient-brand">Cohvia</span> — to nurture, together.
            </h2>
          </div>
          <div className="md:col-span-3 text-lg text-secondary-foreground leading-relaxed">
            <p>
              Cohvia draws on Irish Gaelic roots: <em>cothú</em>, to nurture and
              grow something carefully, joined with <em>comh</em> and{" "}
              <em>beatha</em> — together and life. The name reflects a simple
              belief that runs through the product: Customer Success works when
              it's mutual, and falls apart when it isn't.
            </p>
          </div>
        </div>
      </Section>

      {/* Values — numbered grid */}
      <Section pad="lg" width="wide">
        <SectionHeader
          eyebrow="What we believe"
          title="The principles we build by."
          subtitle="Five things we keep coming back to when we're deciding what to build, who to hire, and how to show up for customers."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <Card key={v.title} className="p-7 md:p-8" interactive>
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <IconBadge icon={v.icon} size="lg" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-xs font-mono text-muted-foreground">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{v.title}</h3>
                  </div>
                  <p className="text-secondary-foreground leading-relaxed text-[0.95rem]">
                    {v.body}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Founder spotlight */}
      <Section pad="lg" width="narrow">
        <SectionHeader
          eyebrow="Founder"
          title="Built by someone who's lived this."
        />
        <Card className="p-8 md:p-12">
          <figure className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <blockquote className="pl-8 text-xl md:text-2xl leading-relaxed text-foreground font-medium">
              "I've been the overwhelmed CS leader three times. Three companies,
              same problem every time: the deeper you scale, the more you lose
              the why behind your customer relationships. I built Cohvia
              because I got tired of watching it happen."
            </blockquote>
            <figcaption className="pl-8 mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-brand-bg flex items-center justify-center text-sm font-semibold text-foreground">
                S
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Sarah</div>
                <div className="text-xs text-muted-foreground">Founder & CEO, Cohvia</div>
              </div>
            </figcaption>
          </figure>
        </Card>
      </Section>

      {/* Working at Cohvia */}
      <Section pad="lg" width="wide" tone="tinted">
        <SectionHeader
          eyebrow="Working at Cohvia"
          title="A small team, building something we actually use."
          subtitle="We're remote-first, deliberately small, and biased toward people who've lived the problem we're solving. We work hard at work, then we go live our lives."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {perks.map((p) => (
            <Card key={p.title} className="p-6" interactive>
              <IconBadge icon={p.icon} className="mb-4" />
              <h3 className="text-base font-semibold mb-1.5">{p.title}</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">
                {p.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Careers */}
      <Section id="careers" pad="lg" width="default">
        <SectionHeader
          eyebrow="Careers"
          title="Open roles"
          subtitle="We're a small, early team. When we're hiring, the roles will live here."
        />
        <Card className="p-10 md:p-12 text-center">
          <p className="text-secondary-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            No open roles right now. If you've lived the Customer Success
            problem and want to help us solve it, we'd still love to hear from
            you.
          </p>
          <BrandLink href="mailto:careers@cohvia.com" withArrow>
            Get in touch
          </BrandLink>
        </Card>
      </Section>

      <CTASection
        title={<>Help us put the human back into <span className="gradient-brand">Customer Success.</span></>}
      />
    </Layout>
  );
};

export default About;
