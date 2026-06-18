import {
  BookOpen,
  ArrowRightLeft,
  Database,
  Handshake,
  CheckCircle2,
  Sparkles,
  Circle,
} from "lucide-react";

const NarrativeMock = () => (
  <div className="surface-card rounded-xl overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="ml-3 text-[10px] text-muted-foreground font-mono">cohvia / account narrative</div>
    </div>
    <div className="p-6 space-y-3">
      {[
        "Why they bought",
        "What success looks like",
        "Where things stand",
        "What we're worried about",
        "Who the champions are",
        "Renewal & expansion",
      ].map((label, i) => (
        <div key={label} className="flex items-start gap-3 py-2 border-b border-border/50 last:border-0">
          <div className="text-[10px] font-mono text-muted-foreground mt-1 w-4">0{i + 1}</div>
          <div className="flex-1">
            <div className="text-xs font-medium text-primary mb-1 uppercase tracking-wider">{label}</div>
            <div className="h-1.5 rounded-full bg-secondary w-full mb-1" />
            <div className="h-1.5 rounded-full bg-secondary w-4/5" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HandoverMock = () => (
  <div className="surface-card rounded-xl overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="ml-3 text-[10px] text-muted-foreground font-mono">cohvia / sales handover</div>
    </div>
    <div className="p-6 space-y-4">
      <div className="text-xs font-semibold text-foreground">Northwind Co. · Handover to CSM</div>
      {[
        { label: "Why they bought", ai: true },
        { label: "Promised outcomes", ai: true },
        { label: "Key stakeholders", ai: false },
        { label: "Known concerns", ai: true },
      ].map(({ label, ai }) => (
        <div key={label} className="rounded-lg border border-border p-3 bg-background/40">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
            {ai && (
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-primary/10">
                <Sparkles size={8} className="text-primary" />
                <span className="text-[9px] font-medium text-primary">AI enriched</span>
              </div>
            )}
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 rounded bg-secondary w-full" />
            <div className="h-1.5 rounded bg-secondary w-3/4" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TeamMemoryMock = () => (
  <div className="surface-card rounded-xl overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="ml-3 text-[10px] text-muted-foreground font-mono">cohvia / team library</div>
    </div>
    <div className="p-6 space-y-2">
      {[
        { name: "Northwind Co.", owner: "MR", updated: "2h" },
        { name: "Acme Industries", owner: "JS", updated: "5h" },
        { name: "Globex", owner: "MR", updated: "1d" },
        { name: "Initech", owner: "TL", updated: "1d" },
        { name: "Hooli", owner: "JS", updated: "3d" },
      ].map((row) => (
        <div key={row.name} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-semibold text-primary">
            {row.owner}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-foreground truncate">{row.name}</div>
            <div className="text-[10px] text-muted-foreground">Narrative updated {row.updated} ago</div>
          </div>
          <CheckCircle2 size={14} className="text-primary shrink-0" />
        </div>
      ))}
    </div>
  </div>
);

const PortalMock = () => (
  <div className="surface-card rounded-xl overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="ml-3 text-[10px] text-muted-foreground font-mono">northwind.cohvia.com</div>
    </div>
    <div className="p-6 space-y-4">
      <div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
          Your success plan
        </div>
        <div className="text-sm font-semibold text-foreground">Cut close-time in half by Q3</div>
      </div>
      <div className="space-y-2">
        {[
          { label: "Onboarding complete", done: true },
          { label: "First close run end-to-end", done: true },
          { label: "NetSuite integration live", done: false },
          { label: "Reduce close to 4 days", done: false },
        ].map(({ label, done }) => (
          <div key={label} className="flex items-center gap-3 p-2.5 rounded-lg bg-background/40 border border-border">
            {done ? (
              <CheckCircle2 size={14} className="text-primary shrink-0" />
            ) : (
              <Circle size={14} className="text-muted-foreground shrink-0" />
            )}
            <div className={`text-xs ${done ? "text-muted-foreground line-through" : "text-foreground"}`}>
              {label}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-2 border-t border-border">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Your team</div>
        <div className="flex -space-x-2">
          {["MR", "JS", "TL"].map((i) => (
            <div key={i} className="w-7 h-7 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-[10px] font-semibold text-primary">
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const features: { icon: React.ElementType; label: string; title: string; bullets: string[]; visual: React.ReactNode }[] = [
  {
    icon: BookOpen,
    label: "The narrative",
    title: "The why behind the what.",
    bullets: [
      "A living narrative for every account",
      "Holds context the CRM can't — why they stay, what would make them grow",
      "Cited to the calls, emails, and tickets it came from",
    ],
    visual: <NarrativeMock />,
  },
  {
    icon: ArrowRightLeft,
    label: "Sales handover",
    title: "Zero-gap sales handover.",
    bullets: [
      "Everything the AE learned transfers on day one",
      "No Slack-summary scramble before kickoff",
      "No awkward re-asks of the customer",
    ],
    visual: <HandoverMock />,
  },
  {
    icon: Database,
    label: "Institutional memory",
    title: "Memory that doesn't walk out the door.",
    bullets: [
      "Context stays when a CSM takes leave or moves on",
      "Lives in Cohvia, not in one person's head",
    ],
    visual: <TeamMemoryMock />,
  },
  {
    icon: Handshake,
    label: "Customer portal",
    title: "Mutual, not one-sided.",
    bullets: [
      "Customers see their own progress in a branded portal",
      "Shared goals, milestones, and status — not status reports",
    ],
    visual: <PortalMock />,
  },
];

const FeatureRow = ({
  index,
  feature,
  reversed,
}: {
  index: number;
  feature: (typeof features)[number];
  reversed: boolean;
}) => {
  const Icon = feature.icon;
  return (
    <div className="relative grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-12">
      {/* Left rail with number + connector */}
      <div className="hidden lg:flex flex-col items-center pt-2">
        <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-xs font-mono text-primary">
          0{index + 1}
        </div>
        <div className="flex-1 w-px bg-gradient-to-b from-border to-transparent mt-3" />
      </div>

      {/* Content card */}
      <article className="surface-card rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
        <div
          className={`grid md:grid-cols-2 items-stretch ${
            reversed ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Copy side */}
          <div className="p-7 md:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon size={16} className="text-primary" />
              </div>
              <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                {feature.label}
              </p>
              <span className="lg:hidden text-xs font-mono text-muted-foreground">
                · 0{index + 1}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight tracking-tight">
              {feature.title}
            </h3>
            <ul className="space-y-2.5 text-base md:text-lg text-secondary-foreground">
              {feature.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side */}
          <div className="p-6 md:p-8 bg-gradient-to-br from-secondary/30 via-transparent to-transparent flex items-center">
            {feature.visual}
          </div>
        </div>
      </article>
    </div>
  );
};

const ValuePillarsSection = () => {
  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-12 relative">
      <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section header */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-end mb-10 md:mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-primary/60" />
              <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                What you get
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight">
              Built for how CS teams{" "}
              <span className="gradient-brand">actually work.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-secondary-foreground leading-relaxed lg:pb-2 lg:max-w-md lg:justify-self-end">
            Four capabilities. One living understanding of every account, from first call to renewal.
          </p>
        </div>

        {/* Feature stack — first two rows */}
        <div className="space-y-6 md:space-y-8">
          <FeatureRow index={0} feature={features[0]} reversed={false} />
          <FeatureRow index={1} feature={features[1]} reversed={true} />
        </div>

        {/* Stat band — Book Coverage */}
        <div className="my-10 md:my-12 relative">
          <div className="surface-card rounded-2xl overflow-hidden border-primary/30 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 p-8 md:p-12 items-center">
              <div className="flex flex-col">
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">
                  The bet
                </p>
                <div className="text-7xl md:text-8xl font-bold gradient-brand leading-none tracking-tight">
                  2×
                </div>
              </div>
              <div className="md:border-l md:border-border md:pl-12">
                <p className="text-xl md:text-2xl font-semibold leading-snug max-w-xl">
                  Built to double the book{" "}
                  <span className="text-secondary-foreground font-normal">
                    without doubling churn.
                  </span>
                </p>
                <p className="mt-4 text-base text-secondary-foreground leading-relaxed max-w-lg">
                  Cohvia holds the understanding so your team can hold the relationship.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature stack — last two rows */}
        <div className="space-y-6 md:space-y-8">
          <FeatureRow index={2} feature={features[2]} reversed={false} />
          <FeatureRow index={3} feature={features[3]} reversed={true} />
        </div>
      </div>

      {/* Pull-quote band */}
      <div className="mt-8 md:mt-10 py-10 md:py-12 border-y border-border bg-card relative overflow-hidden">
        <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 relative">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-6 text-center">
            The shift
          </p>
          <blockquote className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-center">
            Customer Success isn't a dashboard problem.{" "}
            <span className="gradient-brand">It's an understanding problem.</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ValuePillarsSection;
