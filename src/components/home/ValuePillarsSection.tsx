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

const ValuePillarsSection = () => {
  const [hero, ...rest] = pillars;
  const HeroIcon = hero.icon;

  return (
    <>
      <section className="pt-24 md:pt-32 pb-20 md:pb-28 relative">
        <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 relative">
          {/* Section header — anchored to the grid below with a connector */}
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-end mb-10 md:mb-14">
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
              Five capabilities that turn scattered context into a living understanding of every account — from first call to renewal.
            </p>
          </div>

          {/* Hero card — full width with copy + visual side by side */}
          <article className="surface-card rounded-2xl overflow-hidden border-primary/20 shadow-xl mb-6">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <HeroIcon size={18} className="text-primary" />
                  </div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                    {hero.label}
                  </p>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {hero.title}
                </h3>
                <p className="text-lg text-secondary-foreground leading-relaxed max-w-md">
                  {hero.description}
                </p>
              </div>
              <div className="p-6 md:p-8 bg-secondary/30 border-t lg:border-t-0 lg:border-l border-border">
                {hero.visual}
              </div>
            </div>
          </article>

          {/* Bento — 4 cards in an asymmetric 6-col grid */}
          <div className="grid md:grid-cols-6 gap-6">
            {(() => {
              const p = rest[0];
              const Icon = p.icon;
              return (
                <article className="surface-card rounded-2xl overflow-hidden md:col-span-4 hover:border-primary/30 transition-colors">
                  <div className="grid sm:grid-cols-[1fr_1fr] h-full">
                    <div className="p-7 md:p-8 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon size={16} className="text-primary" />
                        </div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                          {p.label}
                        </p>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-secondary-foreground leading-relaxed">{p.description}</p>
                    </div>
                    <div className="p-5 md:p-6 bg-secondary/30 border-t sm:border-t-0 sm:border-l border-border flex items-center">
                      {p.visual}
                    </div>
                  </div>
                </article>
              );
            })()}

            {(() => {
              const p = rest[1];
              const Icon = p.icon;
              return (
                <article className="surface-card rounded-2xl p-7 md:p-8 md:col-span-2 relative overflow-hidden hover:border-primary/30 transition-colors">
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                        {p.label}
                      </p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-secondary-foreground leading-relaxed">{p.description}</p>
                  </div>
                </article>
              );
            })()}

            {(() => {
              const p = rest[2];
              const Icon = p.icon;
              return (
                <article className="surface-card rounded-2xl p-7 md:p-8 md:col-span-2 hover:border-primary/30 transition-colors">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                      {p.label}
                    </p>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold gradient-brand mb-2 leading-none">
                    45
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">
                    accounts per CSM
                  </p>
                  <p className="text-secondary-foreground leading-relaxed">{p.description}</p>
                </article>
              );
            })()}

            {(() => {
              const p = rest[3];
              const Icon = p.icon;
              return (
                <article className="surface-card rounded-2xl overflow-hidden md:col-span-4 hover:border-primary/30 transition-colors">
                  <div className="grid sm:grid-cols-[1fr_1fr] h-full">
                    <div className="p-5 md:p-6 bg-secondary/30 sm:border-r border-border flex items-center order-2 sm:order-1">
                      {p.visual}
                    </div>
                    <div className="p-7 md:p-8 flex flex-col justify-center order-1 sm:order-2">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon size={16} className="text-primary" />
                        </div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                          {p.label}
                        </p>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-secondary-foreground leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </article>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Pull-quote band */}
      <section className="py-20 md:py-28 border-y border-border bg-card relative overflow-hidden">
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
      </section>
    </>
  );
};

export default ValuePillarsSection;
