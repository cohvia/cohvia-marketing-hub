import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  MessageSquare,
  ArrowRightLeft,
  Target,
  Shield,
  Layers,
  Globe,
  Bell,
} from "lucide-react";

const narrativeSections = [
  "Why they bought",
  "What success looks like",
  "Key people & dynamics",
  "Where we are now",
  "What we're worried about",
  "Commercial context",
  "What they purchased",
  "Goals summary",
];

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

type Tone = "plain" | "tinted" | "glow";
type LayoutKind = "side" | "stacked" | "wide-visual";

type FeatureBlockProps = {
  label: string;
  title: string;
  children: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
  icon: React.ElementType;
  tone?: Tone;
  layout?: LayoutKind;
};

const toneClass: Record<Tone, string> = {
  plain: "",
  tinted: "bg-secondary/30",
  glow: "relative overflow-hidden",
};

const FeatureBlock = ({
  label,
  title,
  children,
  visual,
  reverse,
  icon: Icon,
  tone = "plain",
  layout = "side",
}: FeatureBlockProps) => {
  const Header = (
    <>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-primary/10">
          <Icon size={18} className="text-primary" />
        </div>
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
          {label}
        </p>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">{title}</h2>
      <div className="space-y-4 text-secondary-foreground leading-relaxed">{children}</div>
    </>
  );

  let inner: React.ReactNode;
  if (layout === "stacked") {
    inner = (
      <div className="max-w-3xl mx-auto">
        <div className="max-w-2xl mb-12">{Header}</div>
        <div className="w-full">{visual}</div>
      </div>
    );
  } else if (layout === "wide-visual") {
    inner = (
      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 w-full">{visual}</div>
        <div className="order-1 lg:order-2 max-w-xl">{Header}</div>
      </div>
    );
  } else {
    inner = (
      <div
        className={`flex flex-col gap-10 lg:gap-16 items-center ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="flex-1 max-w-xl">{Header}</div>
        <div className="flex-1 w-full">{visual}</div>
      </div>
    );
  }

  return (
    <section className={`py-20 md:py-28 ${toneClass[tone]}`}>
      {tone === "glow" && (
        <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
      )}
      <div className="mx-auto max-w-6xl px-6 relative">{inner}</div>
    </section>
  );
};

const MockFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="surface-card rounded-xl overflow-hidden shadow-lg">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
    </div>
    <div className="p-6">{children}</div>
  </div>
);

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-16 md:pt-32 md:pb-20 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border border-border bg-card">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-secondary-foreground">
              Customer Context Platform
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            The relationship intelligence layer for{" "}
            <span className="gradient-brand">Customer Success.</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Cohvia starts with the story, not the spreadsheet. AI builds a living understanding of
            every customer relationship and connects it to shared plans you execute together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-lg gradient-brand-bg px-6 py-3 text-sm font-semibold text-foreground transition-all hover:brightness-110"
            >
              Request Early Access
              <ArrowRight size={16} />
            </a>
            <a
              href="#system"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* The System */}
      <section id="system" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              The System
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Two layers. One system.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="surface-card rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none -mt-4 -mr-2 select-none">
                01
              </div>
              <div className="relative">
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">
                  Layer 1
                </p>
                <h3 className="text-2xl font-bold mb-4">The Narrative</h3>
                <p className="text-secondary-foreground leading-relaxed">
                  The internal, AI-generated strategic story of the relationship. Why they bought.
                  What they care about. Where things stand. Built from your CRM, calls, emails, and
                  tickets. Updated continuously. Owned by your team.
                </p>
              </div>
            </div>

            <div className="surface-card rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none -mt-4 -mr-2 select-none">
                02
              </div>
              <div className="relative">
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">
                  Layer 2
                </p>
                <h3 className="text-2xl font-bold mb-4">The Plans</h3>
                <p className="text-secondary-foreground leading-relaxed">
                  The shared execution layer. Goals, milestones, and actions you work on with your
                  customer. Informed by the Narrative. Visible through a branded customer portal.
                </p>
              </div>
            </div>
          </div>

          <p className="text-secondary-foreground max-w-[680px] mx-auto text-left">
            Nobody else connects the strategic story to the tactical execution. That's the whole
            point.
          </p>
        </div>
      </section>

      {/* Feature blocks */}
      {/* Feature blocks — each block is its own section, tones alternate */}
      <>
          {/* Narrative */}
          <FeatureBlock
            tone="plain"
            label="Understand"
            title="A living strategic document for every account."
            icon={BookOpen}
            visual={
              <MockFrame>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                    Account Narrative
                  </p>
                  <span className="text-[10px] text-muted-foreground">Updated 2h ago</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {narrativeSections.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="space-y-3 text-sm">
                  <p className="font-semibold text-foreground">Why they bought</p>
                  <p className="text-secondary-foreground leading-relaxed">
                    Acme switched from Gainsight after their RevOps lead determined the new CS
                    motion required tighter sales→CS context transfer
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded text-[9px] font-bold bg-primary/20 text-primary ml-1 align-middle">
                      1
                    </span>
                    .
                  </p>
                  <div className="border-t border-border pt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Source: Gong call · Discovery · Mar 14
                  </div>
                </div>
              </MockFrame>
            }
          >
            <p>
              Not a log. Not a timeline. Definitely not a notes field someone typed into at 11pm
              after a call they barely remember.
            </p>
            <p>
              The Narrative is a synthesized strategic document that tells your team what actually
              matters. Eight sections, every claim linked to its source — a Gong call, an email
              thread, a support ticket. Click any citation to verify.
            </p>
            <p className="text-foreground font-medium">AI proposes. Humans decide. Always.</p>
          </FeatureBlock>

          {/* Ask Cohvia */}
          <FeatureBlock
            tone="tinted"
            label="Ask"
            title="Your smartest colleague who actually read every transcript."
            icon={MessageSquare}
            reverse
            visual={
              <MockFrame>
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                      <p className="text-sm">Who's the champion at Acme?</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full gradient-brand-bg flex items-center justify-center shrink-0">
                      <Sparkles size={12} className="text-foreground" />
                    </div>
                    <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm leading-relaxed mb-2">
                        Sarah Chen, VP CustomerOps. She championed the eval, ran the bake-off, and
                        signs off on renewals
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded text-[9px] font-bold bg-primary/20 text-primary ml-1 align-middle">
                          3
                        </span>
                        .
                      </p>
                      <div className="border border-border rounded-lg p-2.5 mt-2 bg-card">
                        <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">
                          Proposed edit · Narrative
                        </p>
                        <p className="text-[11px] text-secondary-foreground">
                          + Add Sarah Chen as primary champion
                        </p>
                        <div className="flex gap-2 mt-2">
                          <button className="text-[10px] px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                            Accept
                          </button>
                          <button className="text-[10px] px-2 py-1 rounded text-muted-foreground">
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MockFrame>
            }
          >
            <p>
              A global AI chat on every page. It knows where you are: on the Narrative it has full
              strategic context, on Plans it understands milestones and goals, on the Portfolio it
              answers cross-account questions.
            </p>
            <p>
              Prep for a call in five minutes. Find out who the champion is. Update the Narrative by
              asking — Cohvia proposes edits as a diff you accept, dismiss, or modify.
            </p>
            <p className="text-foreground font-medium">Grounded in your data. Cited to the source.</p>
          </FeatureBlock>

      {/* Stat strip — breather after the first two blocks */}
      <section className="py-12 md:py-16 border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {[
            { v: "8", l: "Narrative sections" },
            { v: "12+", l: "Native integrations" },
            { v: "1", l: "Branded customer portal" },
            { v: "0", l: "Spreadsheets to maintain" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl md:text-4xl font-bold gradient-brand mb-2">{s.v}</div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

          {/* Handover */}
          <FeatureBlock
            tone="plain"
            layout="stacked"
            label="Handover"
            title="Context that actually transfers."
            icon={ArrowRightLeft}
            visual={
              <MockFrame>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                    AE Handover Review
                  </p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    Draft
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Why they bought", value: "Sales→CS context transfer", auto: true },
                    { label: "Promised outcomes", value: "30% faster onboarding", auto: true },
                    { label: "Champion", value: "Sarah Chen, VP CustomerOps", auto: true },
                    { label: "Watch out for", value: "Legacy Gainsight workflows", auto: false },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="flex items-start justify-between gap-3 py-2 border-b border-border last:border-0"
                    >
                      <div>
                        <p className="text-[11px] text-muted-foreground mb-0.5">{f.label}</p>
                        <p className="text-sm text-foreground">{f.value}</p>
                      </div>
                      {f.auto && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-medium shrink-0 mt-1">
                          AI
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </MockFrame>
            }
          >
            <p>
              Deal closes. Cohvia ingests call recordings, emails, CRM history. AI generates the
              first Narrative draft and suggests initial Plans.
            </p>
            <p>
              The AE reviews and enriches it before the CSM ever sees the account. No handover
              call. No Slack novel nobody reads.
            </p>
            <p>
              The CSM opens a complete strategic understanding on day one. When accounts transfer
              between CSMs, same thing: the new CSM reads the Narrative. The story continues.
            </p>
          </FeatureBlock>

          {/* Plans */}
          <FeatureBlock
            tone="glow"
            label="Execute"
            title="Plans your customers can actually see."
            icon={Target}
            reverse
            visual={
              <MockFrame>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                    Main Success Plan
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <Globe size={10} className="text-primary" />
                    <span>Visible to customer</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: "Onboarding complete", progress: 100, shared: true },
                    { name: "Reach 80% feature adoption", progress: 65, shared: true },
                    { name: "Pricing review (Q2)", progress: 20, shared: false },
                    { name: "Executive QBR scheduled", progress: 50, shared: true },
                  ].map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 border border-border"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <p className="text-sm font-medium">{m.name}</p>
                          {!m.shared && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">
                              Internal
                            </span>
                          )}
                        </div>
                        <div className="h-1 rounded-full bg-border overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${m.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground w-9 text-right">
                        {m.progress}%
                      </span>
                    </div>
                  ))}
                </div>
              </MockFrame>
            }
          >
            <p>
              Every account gets a Main Success Plan, auto-suggested from sales data and refined by
              the CSM. Goals, milestones, and actions that ladder up to what the customer cares
              about.
            </p>
            <p>
              Two views: internal (full detail, commercially sensitive items) and customer (curated
              by the CSM, per-milestone visibility toggles). You control exactly what's shared.
            </p>
            <p>
              Customers see plans in their portal. They check off actions, edit shared goals, manage
              who in their org has access. You stop chasing updates over email. It's nice.
            </p>
          </FeatureBlock>

      {/* Pull-quote band */}
      <section className="py-20 md:py-28 border-y border-border bg-card">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-6 text-center">
            The point
          </p>
          <blockquote className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-center">
            Everyone else is automating the relationship away.{" "}
            <span className="gradient-brand">We're deepening it.</span>
          </blockquote>
        </div>
      </section>

          {/* Risk */}
          <FeatureBlock
            tone="tinted"
            label="Safeguard"
            title="See risk in context, not in a vacuum."
            icon={Shield}
            visual={
              <MockFrame>
                <div className="space-y-3">
                  <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-destructive" />
                        <p className="text-sm font-semibold">Stakeholder transition</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-destructive/20 text-destructive font-semibold uppercase tracking-wider">
                        Critical
                      </span>
                    </div>
                    <p className="text-xs text-secondary-foreground leading-relaxed mb-2">
                      Champion Sarah Chen announced departure on LinkedIn. No identified successor
                      in current Narrative.
                    </p>
                    <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Source: LinkedIn signal · Gong call (Apr 18)
                    </p>
                  </div>
                  <div className="rounded-lg border border-warning/40 bg-warning/5 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-warning" />
                        <p className="text-sm font-semibold">Support ticket spike</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-warning/20 text-warning font-semibold uppercase tracking-wider">
                        Warning
                      </span>
                    </div>
                    <p className="text-xs text-secondary-foreground leading-relaxed">
                      14 tickets in the last 7 days vs. 3 baseline. Mostly integration-related.
                    </p>
                  </div>
                </div>
              </MockFrame>
            }
          >
            <p>Signals detected from ingested data, flagged manually by CSMs, or both.</p>
            <p>
              <span className="text-foreground font-medium">Auto-detected:</span> stakeholder
              transitions, ticket spikes, negative call sentiment, engagement drops, competitor
              mentions, renewals without a plan.
            </p>
            <p>
              <span className="text-foreground font-medium">Manual:</span> budget pressure, internal
              politics, executive misalignment (the fun ones).
            </p>
            <p>
              Signals live inside the Narrative. You don't just see that an account is at risk — you
              see it next to the context that explains why.
            </p>
          </FeatureBlock>

          {/* AI Fields */}
          <FeatureBlock
            tone="plain"
            layout="wide-visual"
            label="Surface"
            title="Structured answers without the data entry."
            icon={Layers}
            reverse
            visual={
              <MockFrame>
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-3">
                  Portfolio · AI Fields
                </p>
                <div className="overflow-hidden rounded-lg border border-border">
                  <div className="grid grid-cols-[1.2fr_1fr_0.8fr_0.8fr] gap-3 px-3 py-2 bg-secondary/60 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    <span>Account</span>
                    <span>Champion</span>
                    <span>Use case</span>
                    <span>Sentiment</span>
                  </div>
                  {[
                    { a: "Acme Corp", c: "Sarah Chen", u: "Handover", s: "Positive", color: "bg-success" },
                    { a: "Globex", c: "Tim Park", u: "Reporting", s: "Neutral", color: "bg-warning" },
                    { a: "Initech", c: "Mia Lopez", u: "QBRs", s: "Positive", color: "bg-success" },
                    { a: "Umbra", c: "—", u: "Adoption", s: "Negative", color: "bg-destructive" },
                  ].map((r) => (
                    <div
                      key={r.a}
                      className="grid grid-cols-[1.2fr_1fr_0.8fr_0.8fr] gap-3 px-3 py-2.5 text-xs border-t border-border items-center"
                    >
                      <span className="font-medium">{r.a}</span>
                      <span className="text-secondary-foreground">{r.c}</span>
                      <span className="text-secondary-foreground">{r.u}</span>
                      <span className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${r.color}`} />
                        <span className="text-secondary-foreground">{r.s}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </MockFrame>
            }
          >
            <p>
              Define fields in plain language. AI fills them from transcripts, emails, tickets, and
              CRM notes. Every value cited to its source.
            </p>
            <p>
              Primary use case. Champion name. Competitors mentioned. Decision timeline. Sentiment.
              All extracted automatically, all sortable and filterable in the Portfolio.
            </p>
            <p className="text-muted-foreground italic">
              No spreadsheet. No CSM remembering to update a custom field after every call. (They
              never did anyway.)
            </p>
          </FeatureBlock>

          {/* Portal */}
          <FeatureBlock
            tone="tinted"
            label="Share"
            title="Give every customer a home."
            icon={Globe}
            visual={
              <MockFrame>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md gradient-brand-bg flex items-center justify-center text-[10px] font-bold text-foreground">
                      AC
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Acme × Vendor</p>
                      <p className="text-[10px] text-muted-foreground">acme.vendor.com</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground">Customer view</span>
                </div>
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-3">
                  Shared goals
                </p>
                <div className="space-y-2">
                  {[
                    { g: "Reduce onboarding time by 30%", done: true },
                    { g: "Reach 80% feature adoption", done: false },
                    { g: "Launch in EU region by Q3", done: false },
                  ].map((g) => (
                    <div
                      key={g.g}
                      className="flex items-center gap-3 p-2.5 rounded-md bg-secondary/40"
                    >
                      <div
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          g.done ? "bg-primary border-primary" : "border-border"
                        }`}
                      >
                        {g.done && <span className="text-[10px] text-primary-foreground">✓</span>}
                      </div>
                      <span
                        className={`text-sm ${
                          g.done ? "line-through text-muted-foreground" : "text-foreground"
                        }`}
                      >
                        {g.g}
                      </span>
                    </div>
                  ))}
                </div>
              </MockFrame>
            }
          >
            <p>
              A branded workspace on your subdomain. Your logo, your colors, your favicon. Customers
              see their Overview, shared Plans, and History.
            </p>
            <p>
              Magic link access: no password, no friction. Customers manage who in their org sees
              each plan.
            </p>
            <p>
              They never see the Narrative, health scores, ARR, or anything internal. Just their
              relationship with you, presented beautifully.
            </p>
          </FeatureBlock>

          {/* Needs Attention */}
          <FeatureBlock
            tone="plain"
            label="Focus"
            title="Every account that needs you. One view."
            icon={Bell}
            reverse
            visual={
              <MockFrame>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                    Needs Attention
                  </p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-destructive/20 text-destructive font-semibold">
                    7 accounts
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      a: "Acme Corp",
                      sev: "Critical",
                      sigs: ["Stakeholder transition", "Ticket spike"],
                      border: "border-l-destructive",
                    },
                    {
                      a: "Globex",
                      sev: "Critical",
                      sigs: ["Renewal in 30d, no plan", "Engagement drop"],
                      border: "border-l-destructive",
                    },
                    {
                      a: "Initech",
                      sev: "Warning",
                      sigs: ["Stalled milestone (12d)"],
                      border: "border-l-warning",
                    },
                  ].map((acc) => (
                    <div
                      key={acc.a}
                      className={`rounded-lg bg-secondary/40 border border-border border-l-4 ${acc.border} p-3`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <p className="text-sm font-semibold">{acc.a}</p>
                        <span className="text-[10px] text-muted-foreground">{acc.sev}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {acc.sigs.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] px-2 py-0.5 rounded bg-card text-secondary-foreground border border-border"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </MockFrame>
            }
          >
            <p>
              Multiple signals per account roll up into a single card. Stalled plans, overdue
              milestones, approaching renewals, risk signals, unassigned accounts.
            </p>
            <p>
              Critical: red. Warning: amber. Sorted by severity. The sidebar badge is the number of
              accounts that need you, not the number of signals that exist.
            </p>
            <p className="text-muted-foreground italic">A small but important difference.</p>
          </FeatureBlock>
      </>

      {/* Integrations */}
      <section className="py-20 md:py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            Integrations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Your tools feed the understanding.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {integrations.map((name) => (
              <span
                key={name}
                className="surface-card rounded-lg px-5 py-3 text-sm font-medium text-secondary-foreground"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Secure OAuth integrations. CRM field mapping your CS Leader configures in minutes.
            Cohvia reads from your systems. It never writes back.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Customer Success should be{" "}
            <span className="gradient-brand">mutual.</span>
          </h2>
          <p className="text-lg text-secondary-foreground mb-10 leading-relaxed">
            We're in early access, working with CS teams who believe understanding beats automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#waitlist"
              className="inline-flex items-center gap-2 rounded-lg gradient-brand-bg px-6 py-3 text-sm font-semibold text-foreground transition-all hover:brightness-110"
            >
              Request Early Access
              <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:hello@cohvia.com"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              hello@cohvia.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
