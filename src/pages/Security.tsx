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
  Lock,
  KeyRound,
  ShieldCheck,
  Users,
  Server,
  Globe,
  FileCheck2,
  AlertTriangle,
  Database,
  Eye,
  Mail,
} from "lucide-react";

const productSecurity = [
  {
    icon: KeyRound,
    title: "Multi-factor authentication",
    body: "MFA is available on every account and required for all Cohvia staff. We support TOTP authenticator apps with SSO on the roadmap for Enterprise plans.",
  },
  {
    icon: Users,
    title: "Role-based access control",
    body: "Granular roles let admins decide who can see customer data, edit playbooks, manage billing, or invite teammates. Permissions follow the principle of least privilege by default.",
  },
  {
    icon: Lock,
    title: "Password hygiene",
    body: "Passwords are salted and hashed with bcrypt. We enforce length and complexity requirements and block known-breached credentials at sign-up.",
  },
  {
    icon: Eye,
    title: "Audit logging",
    body: "Sensitive actions (logins, permission changes, exports, integrations) are logged so admins can review who did what and when.",
  },
];

const infrastructure = [
  {
    icon: ShieldCheck,
    title: "Encryption in transit and at rest",
    body: "All traffic is served over TLS 1.2+. Customer data is encrypted at rest using AES-256 on managed cloud infrastructure.",
  },
  {
    icon: Server,
    title: "Managed cloud hosting",
    body: "Cohvia runs on tier-1 cloud providers (Vercel, Supabase) with SOC 2 and ISO 27001 attested data centers. See our subprocessors for the full list.",
  },
  {
    icon: Database,
    title: "Backups and recovery",
    body: "Automated daily backups with point-in-time recovery. We test restore procedures regularly so your data is recoverable when it matters.",
  },
  {
    icon: AlertTriangle,
    title: "Incident response",
    body: "We maintain a documented incident response plan. Affected customers are notified without undue delay and, where required by GDPR, within 72 hours.",
  },
];

const compliance = [
  {
    icon: Globe,
    title: "GDPR compliance",
    body: "We act as a processor under the GDPR. Customers can sign our Data Processing Agreement, exercise data subject rights, and request data export or deletion at any time.",
  },
  {
    icon: FileCheck2,
    title: "Data Processing Agreement",
    body: "A DPA is available to every customer on request and includes the EU Standard Contractual Clauses for international transfers.",
  },
  {
    icon: Users,
    title: "Subprocessors",
    body: "We publish the full list of subprocessors we rely on, what they process, and where. You'll be notified ahead of any material changes.",
  },
  {
    icon: ShieldCheck,
    title: "Working toward SOC 2",
    body: "We follow SOC 2 Type II principles internally and plan to pursue formal certification as we scale. We're happy to walk current and prospective customers through our controls.",
  },
];

const Security = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Trust"
        title={
          <>
            Security you can <span className="gradient-brand">actually verify</span>.
          </>
        }
        subtitle="Customer Success is built on trust. The same goes for the platform you run it on. Here's how we protect your data and your customers' data."
      >
        <BrandLink href="#product-security" withArrow>
          How we secure the product
        </BrandLink>
        <BrandLink href="mailto:security@cohvia.com" variant="ghost">
          Contact security
        </BrandLink>
      </PageHero>

      {/* Principles */}
      <Section pad="md" width="default" tone="tinted">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Our approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Security is a product feature, not a checkbox.
            </h2>
          </div>
          <div className="md:col-span-3 space-y-5 text-lg text-secondary-foreground leading-relaxed">
            <p>
              We're a small team building software for Customer Success leaders
              who handle sensitive customer data every day. Health scores,
              renewal notes, account plans, call transcripts. That data
              deserves the same care we'd want for our own.
            </p>
            <p>
              We design around least privilege, encrypt everything in transit
              and at rest, and lean on cloud providers that already meet the
              highest bar (SOC 2, ISO 27001, GDPR). The goal is simple:
              security that works by default, not security that gets in your
              way.
            </p>
          </div>
        </div>
      </Section>

      {/* Product security */}
      <Section id="product-security" pad="lg" width="wide">
        <SectionHeader
          eyebrow="Product security"
          title="Controls in the hands of your team."
          subtitle="The things admins and end users can rely on, every day."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {productSecurity.map((item) => (
            <Card key={item.title} className="p-7 md:p-8" interactive>
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <IconBadge icon={item.icon} size="lg" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-secondary-foreground leading-relaxed text-[0.95rem]">
                    {item.body}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Infrastructure */}
      <Section pad="lg" width="wide" tone="tinted">
        <SectionHeader
          eyebrow="Infrastructure & network"
          title="A foundation built on trusted providers."
          subtitle="We don't try to reinvent the parts of security that already work. We use proven infrastructure and harden it sensibly."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {infrastructure.map((item) => (
            <Card key={item.title} className="p-7 md:p-8" interactive>
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <IconBadge icon={item.icon} size="lg" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-secondary-foreground leading-relaxed text-[0.95rem]">
                    {item.body}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Compliance */}
      <Section pad="lg" width="wide">
        <SectionHeader
          eyebrow="Privacy & compliance"
          title="GDPR-ready, with the paperwork to match."
          subtitle="We're based in a part of the world that takes privacy seriously, and we build like it."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {compliance.map((item) => (
            <Card key={item.title} className="p-7 md:p-8" interactive>
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <IconBadge icon={item.icon} size="lg" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-secondary-foreground leading-relaxed text-[0.95rem]">
                    {item.body}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <BrandLink href="/legal/privacy" withArrow>
            Privacy Policy
          </BrandLink>
          <BrandLink href="/legal/dpa" withArrow>
            Data Processing Agreement
          </BrandLink>
          <BrandLink href="/legal/subprocessors" withArrow>
            Subprocessors
          </BrandLink>
          <BrandLink href="/legal/terms" withArrow>
            Terms of Service
          </BrandLink>
        </div>
      </Section>

      {/* Report a vulnerability */}
      <Section pad="lg" width="narrow">
        <Card className="p-8 md:p-12">
          <div className="flex items-start gap-5">
            <div className="shrink-0">
              <IconBadge icon={Mail} size="lg" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">
                Report a vulnerability
              </h3>
              <p className="text-secondary-foreground leading-relaxed mb-5">
                If you believe you've found a security issue in Cohvia, we want
                to hear about it. Email us with a description and steps to
                reproduce, and we'll acknowledge within two business days. We
                don't pursue researchers acting in good faith.
              </p>
              <BrandLink href="mailto:security@cohvia.com" withArrow>
                security@cohvia.com
              </BrandLink>
            </div>
          </div>
        </Card>
      </Section>

      <CTASection
        title={
          <>
            Want a deeper look at our <span className="gradient-brand">security posture</span>?
          </>
        }
      />
    </Layout>
  );
};

export default Security;
