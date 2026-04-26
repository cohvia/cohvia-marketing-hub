import {
  BookOpen,
  ArrowRightLeft,
  Database,
  Users,
  Handshake,
  CheckCircle2,
  Sparkles,
  Circle,
} from "lucide-react";

type Pillar = {
  title: string;
  description: string;
  visual: React.ReactNode;
};

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

const DashboardMock = () => (
  <div className="surface-card rounded-xl overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted" />
      <div className="ml-3 text-[10px] text-muted-foreground font-mono">cohvia / my book</div>
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs font-semibold text-foreground">45 accounts</div>
        <div className="text-[10px] text-muted-foreground">All current</div>
      </div>
      <div className="grid grid-cols-9 gap-1.5">
        {Array.from({ length: 45 }).map((_, i) => {
          const variant = i % 7 === 0 ? "warning" : i % 11 === 0 ? "danger" : "primary";
          const colorMap: Record<string, string> = {
            primary: "bg-primary/30 border-primary/50",
            warning: "bg-warning/30 border-warning/50",
            danger: "bg-danger/30 border-danger/50",
          };
          return (
            <div
              key={i}
              className={`aspect-square rounded border ${colorMap[variant]}`}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-4 mt-4 text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1.5"><Circle size={8} className="fill-primary text-primary" /> Healthy</span>
        <span className="flex items-center gap-1.5"><Circle size={8} className="fill-warning text-warning" /> Watch</span>
        <span className="flex items-center gap-1.5"><Circle size={8} className="fill-danger text-danger" /> Risk</span>
      </div>
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

const pillars: (Pillar & { icon: React.ElementType; label: string })[] = [
  {
    icon: BookOpen,
    label: "The narrative",
    title: "The why, not just the what.",
    description:
      "A living understanding of every account: why they bought, why they stay, what keeps them up at night, what would make them grow.",
    visual: <NarrativeMock />,
  },
  {
    icon: ArrowRightLeft,
    label: "Sales handover",
    title: "Zero-gap sales handover.",
    description:
      "The AE's understanding transfers completely on day one. No Slack summaries. No embarrassing re-asks at kickoff.",
    visual: <HandoverMock />,
  },
  {
    icon: Database,
    label: "Institutional memory",
    title: "Memory that doesn't walk out the door.",
    description:
      "Vacations, turnover, reorgs: the context stays. The understanding lives in Cohvia, not in someone's head.",
    visual: <TeamMemoryMock />,
  },
  {
    icon: Users,
    label: "Scale",
    title: "Relationship depth at scale.",
    description: "A CSM with 45 accounts can know each one like they know 10.",
    visual: <DashboardMock />,
  },
  {
    icon: Handshake,
    label: "Customer portal",
    title: "Mutual, not one-sided.",
    description:
      "Customers see their own progress through a branded portal. The relationship becomes shared.",
    visual: <PortalMock />,
  },
];

const ValuePillarsSection = () => (
  <>
    <section className="pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">
            What you get
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Built for how CS teams actually work
          </h2>
        </div>
      </div>
    </section>

    {pillars.map((pillar, i) => {
      const Icon = pillar.icon;
      const reverse = i % 2 === 1;
      const tone = i % 2 === 0 ? "" : "bg-secondary/40";
      // Insert a punctuation band after pillar 2
      return (
        <span key={pillar.title} className="contents">
          <section className={`py-16 md:py-24 ${tone}`}>
            <div className="mx-auto max-w-6xl px-6">
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  reverse ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>{pillar.visual}</div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <p className="text-xs font-medium text-primary uppercase tracking-[0.2em]">
                      {pillar.label}
                    </p>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-lg text-secondary-foreground leading-relaxed max-w-md">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {i === 1 && (
            <section className="py-20 md:py-28 border-y border-border bg-card relative overflow-hidden">
              <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
              <div className="mx-auto max-w-3xl px-6 relative">
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-6 text-center">
                  The shift
                </p>
                <blockquote className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-center">
                  Customer Success isn't a dashboard problem.{" "}
                  <span className="gradient-brand">It's an understanding problem.</span>
                </blockquote>
              </div>
            </section>
          )}
        </span>
      );
    })}
  </>
);

export default ValuePillarsSection;
