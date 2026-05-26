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
import { PageHero, BrandLink, MockFrame as KitMockFrame } from "@/components/ui-kit";

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
  "Fireflies",
  "Granola",
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
    <section className={`py-12 md:py-16 ${toneClass[tone]}`}>
      {tone === "glow" && (
        <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
      )}
      <div className="mx-auto max-w-6xl px-6 relative">{inner}</div>
    </section>
  );
};

const MockFrame = ({ children }: { children: React.ReactNode }) => (
  <KitMockFrame>{children}</KitMockFrame>
);

const Product = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Customer Context Platform"
        title={
          <>
            The why behind every{" "}
            <span className="gradient-brand">customer relationship.</span>
          </>
        }
        subtitle="Cohvia starts with the story, not the spreadsheet. AI builds a living understanding of every customer relationship and connects it to shared plans you execute together."
      >
        <BrandLink href="#waitlist" withArrow>
          Request Early Access
        </BrandLink>
        <BrandLink href="#system" variant="ghost">
          See how it works
        </BrandLink>
      </PageHero>

      {/* The System */}
      <section id="system" className="py-12 md:py-16">
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
                  The internal, AI-generated strategic story of every account: the context a CRM
                  can't hold, built from your calls, emails, and tickets, kept current as new data
                  comes in, and owned by your team.
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
                  The shared execution layer: the goals, milestones, and actions you work through
                  with the customer, informed by the Narrative and visible in a branded portal you
                  both work from.
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
              <div className="relative">
                {/* Decorative glow */}
                <div className="absolute -inset-6 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

                <div className="relative">
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
                </div>

                {/* Annotation: 8 sections */}
                <div className="hidden lg:flex absolute -left-8 top-12 items-center gap-2 -translate-x-full">
                  <div className="surface-card rounded-lg px-3 py-2 shadow-md whitespace-nowrap">
                    <div className="text-[9px] uppercase tracking-wider text-primary font-semibold">
                      8 sections
                    </div>
                    <div className="text-[11px] font-medium">Strategic, not chronological</div>
                  </div>
                  <svg width="32" height="2" className="text-primary/40">
                    <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                </div>

                {/* Annotation: cited claim */}
                <div className="hidden lg:flex absolute -right-8 top-1/2 items-center gap-2 translate-x-full">
                  <svg width="32" height="2" className="text-primary/40">
                    <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                  <div className="surface-card rounded-lg px-3 py-2 shadow-md whitespace-nowrap border-primary/30">
                    <div className="text-[9px] uppercase tracking-wider text-primary font-semibold">
                      Every claim cited
                    </div>
                    <div className="text-[11px] font-medium">Click to verify the source</div>
                  </div>
                </div>

                {/* Annotation: live source */}
                <div className="hidden lg:flex absolute -right-8 -bottom-2 items-center gap-2 translate-x-full">
                  <svg width="32" height="2" className="text-primary/40">
                    <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                  <div className="surface-card rounded-lg px-3 py-2 shadow-md whitespace-nowrap">
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Source
                    </div>
                    <div className="text-[11px] font-medium">Gong · Mar 14</div>
                  </div>
                </div>
              </div>
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

          {/* Handover — sticky scroll moment */}
          <section className="py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-6">
              <div className="max-w-2xl mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-primary/10">
                    <ArrowRightLeft size={18} className="text-primary" />
                  </div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                    Handover
                  </p>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] mb-5">
                  Context that{" "}
                  <span className="gradient-brand">actually transfers.</span>
                </h2>
                <p className="text-lg text-secondary-foreground leading-relaxed">
                  No handover call. No Slack novel nobody reads. Four stages, fully automated up to
                  the point where a human should weigh in.
                </p>
              </div>

              <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
                {/* Sticky visual */}
                <div className="lg:sticky lg:top-24">
                  <MockFrame>
                    <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                      Handover pipeline · Acme Corp
                    </p>
                    <ol className="space-y-3">
                      {[
                        {
                          n: "01",
                          label: "Ingest",
                          desc: "Calls, emails, CRM history",
                          state: "done",
                        },
                        {
                          n: "02",
                          label: "AI drafts Narrative",
                          desc: "Why they bought, success criteria",
                          state: "done",
                        },
                        {
                          n: "03",
                          label: "AE reviews & enriches",
                          desc: "Adds verbal commitments, politics",
                          state: "active",
                        },
                        {
                          n: "04",
                          label: "CSM inherits",
                          desc: "Day one with full understanding",
                          state: "pending",
                        },
                      ].map((s) => (
                        <li
                          key={s.n}
                          className={`flex items-start gap-3 p-3 rounded-lg border ${
                            s.state === "active"
                              ? "border-primary/40 bg-primary/5"
                              : s.state === "done"
                                ? "border-border bg-secondary/40"
                                : "border-dashed border-border"
                          }`}
                        >
                          <span
                            className={`text-[10px] font-mono w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                              s.state === "active"
                                ? "bg-primary text-primary-foreground"
                                : s.state === "done"
                                  ? "bg-primary/20 text-primary"
                                  : "bg-secondary text-muted-foreground"
                            }`}
                          >
                            {s.state === "done" ? "✓" : s.n}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold">{s.label}</p>
                            <p className="text-xs text-muted-foreground">{s.desc}</p>
                          </div>
                          {s.state === "active" && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold uppercase tracking-wider">
                              Now
                            </span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </MockFrame>
                </div>

                {/* Scrolling copy stages */}
                <div className="space-y-16 lg:space-y-32">
                  {[
                    {
                      n: "01",
                      title: "Deal closes. Cohvia ingests everything.",
                      body: "Call recordings, email threads, CRM history. Automatically. The AE doesn't write a single sentence yet.",
                    },
                    {
                      n: "02",
                      title: "AI drafts the first Narrative.",
                      body: "Why they bought, what success looks like, who the key people are. Eight sections, every claim cited to the source it came from.",
                    },
                    {
                      n: "03",
                      title: "The AE reviews and enriches.",
                      body: "Adds what AI couldn't know: verbal commitments, politics, the real reason the champion pushed. Five minutes, not thirty. (Replaces the handover call that always got rescheduled twice.)",
                    },
                    {
                      n: "04",
                      title: "The CSM starts with the full picture.",
                      body: "Day one. Strategic understanding. Suggested plans pre-populated from sales conversations. No Slack archaeology.",
                    },
                  ].map((stage) => (
                    <div key={stage.n}>
                      <div className="text-6xl md:text-7xl font-bold text-primary/20 leading-none mb-4 font-mono">
                        {stage.n}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                        {stage.title}
                      </h3>
                      <p className="text-lg text-secondary-foreground leading-relaxed">
                        {stage.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

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
      <section className="py-12 md:py-16 border-y border-border bg-card">
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

          {/* Run the book — bento cluster: Risk, AI Fields, Portal, Needs Attention */}
          <section className="py-12 md:py-16 bg-secondary/30">
            <div className="mx-auto max-w-6xl px-6">
              <div className="max-w-3xl mb-14">
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
                  Run the book
                </p>
                <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
                  Everything else CSMs spend their day on.{" "}
                  <span className="gradient-brand">In one place.</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-6 gap-5">
                {/* Risk Signals — wide left (col-span-4) */}
                <article className="surface-card rounded-2xl overflow-hidden md:col-span-4 hover:border-primary/30 transition-colors">
                  <div className="grid sm:grid-cols-[1fr_1fr] h-full">
                    <div className="p-7 md:p-8 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Shield size={16} className="text-primary" />
                        </div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                          Safeguard
                        </p>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                        Risk in context, not in a vacuum.
                      </h3>
                      <p className="text-secondary-foreground leading-relaxed">
                        Auto-detected: stakeholder transitions, ticket spikes, sentiment drops.
                        Manual: budget pressure, internal politics. Every signal lives inside the
                        Narrative, next to the context that explains why.
                      </p>
                    </div>
                    <div className="p-5 md:p-6 bg-secondary/40 sm:border-l border-border space-y-2">
                      <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                            <p className="text-xs font-semibold">Stakeholder transition</p>
                          </div>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-destructive/20 text-destructive font-semibold uppercase tracking-wider">
                            Critical
                          </span>
                        </div>
                        <p className="text-[11px] text-secondary-foreground leading-relaxed">
                          Champion Sarah Chen announced departure on LinkedIn.
                        </p>
                      </div>
                      <div className="rounded-lg border border-warning/40 bg-warning/5 p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-warning" />
                            <p className="text-xs font-semibold">Ticket spike</p>
                          </div>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-warning/20 text-warning font-semibold uppercase tracking-wider">
                            Warning
                          </span>
                        </div>
                        <p className="text-[11px] text-secondary-foreground leading-relaxed">
                          14 tickets in 7 days vs. 3 baseline.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Needs Attention — narrow right (col-span-2) */}
                <article className="surface-card rounded-2xl p-7 md:p-8 md:col-span-2 hover:border-primary/30 transition-colors flex flex-col">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Bell size={16} className="text-primary" />
                    </div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                      Focus
                    </p>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold gradient-brand mb-2 leading-none">
                    7
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">
                    accounts need you today
                  </p>
                  <p className="text-secondary-foreground leading-relaxed text-sm">
                    Stalled plans, overdue milestones, approaching renewals, unassigned accounts.
                    Rolled up per account. Sorted by severity. The sidebar badge is your morning
                    check-in.
                  </p>
                </article>

                {/* AI Fields — narrow left (col-span-2) */}
                <article className="surface-card rounded-2xl p-7 md:p-8 md:col-span-2 relative overflow-hidden hover:border-primary/30 transition-colors">
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Layers size={16} className="text-primary" />
                      </div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                        Surface
                      </p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                      Structured answers, no data entry.
                    </h3>
                    <p className="text-secondary-foreground leading-relaxed text-sm">
                      Define fields in plain language. AI fills them from transcripts, emails, and
                      tickets. Sortable in the Portfolio. Cited to source.
                    </p>
                  </div>
                </article>

                {/* Portal — wide right (col-span-4) */}
                <article className="surface-card rounded-2xl overflow-hidden md:col-span-4 hover:border-primary/30 transition-colors">
                  <div className="grid sm:grid-cols-[1fr_1fr] h-full">
                    <div className="p-5 md:p-6 bg-secondary/40 sm:border-r border-border order-2 sm:order-1">
                      <div className="surface-card rounded-lg p-4">
                        <div className="flex items-center justify-between pb-2 mb-3 border-b border-border">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md gradient-brand-bg flex items-center justify-center text-[9px] font-bold text-foreground">
                              AC
                            </div>
                            <div>
                              <p className="text-xs font-semibold">Acme × Vendor</p>
                              <p className="text-[9px] text-muted-foreground">acme.vendor.com</p>
                            </div>
                          </div>
                          <span className="text-[9px] text-muted-foreground">Customer view</span>
                        </div>
                        <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-2">
                          Shared goals
                        </p>
                        <div className="space-y-1.5">
                          {[
                            { g: "Reduce onboarding by 30%", done: true },
                            { g: "Reach 80% adoption", done: false },
                            { g: "Launch EU by Q3", done: false },
                          ].map((g) => (
                            <div
                              key={g.g}
                              className="flex items-center gap-2 p-1.5 rounded bg-secondary/40"
                            >
                              <div
                                className={`w-3 h-3 rounded-sm border flex items-center justify-center ${
                                  g.done ? "bg-primary border-primary" : "border-border"
                                }`}
                              >
                                {g.done && <span className="text-[8px] text-primary-foreground">✓</span>}
                              </div>
                              <span
                                className={`text-[11px] ${
                                  g.done ? "line-through text-muted-foreground" : "text-foreground"
                                }`}
                              >
                                {g.g}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-7 md:p-8 flex flex-col justify-center order-1 sm:order-2">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Globe size={16} className="text-primary" />
                        </div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                          Share
                        </p>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                        Give every customer a home.
                      </h3>
                      <p className="text-secondary-foreground leading-relaxed">
                        A branded workspace on your subdomain. Magic link access. They see Plans,
                        Goals, History. They never see the Narrative, ARR, or anything internal.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
      </>

      {/* Integrations */}
      <section className="py-12 md:py-16 border-t border-border">
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
      <section className="py-16 md:py-12">
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
