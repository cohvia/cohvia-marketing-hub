import { MockFrame } from "./SolutionPage";
import { CheckCircle2, AlertTriangle, MessageSquare, User, Sparkles, ArrowRight, Circle, Inbox, Link2, Lock, Target } from "lucide-react";

export const PortfolioByCSM = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
        <span className="font-semibold text-foreground">Portfolio · Grouped by CSM</span>
        <span>12 accounts</span>
      </div>
      {[
        { csm: "Maya Chen", accounts: ["Acme Corp", "Northwind", "Globex"], champion: "VP Eng", sentiment: "Positive" },
        { csm: "Jordan Pak", accounts: ["Initech", "Vandelay"], champion: "Director RevOps", sentiment: "Mixed" },
      ].map((g) => (
        <div key={g.csm} className="surface-elevated rounded-lg p-3">
          <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{g.csm}</p>
          {g.accounts.map((a) => (
            <div key={a} className="flex items-center justify-between py-1.5 text-sm border-b border-border/40 last:border-0">
              <span className="text-foreground">{a}</span>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>{g.champion}</span>
                <span className="text-success">{g.sentiment}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </MockFrame>
);

export const NeedsAttention = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-foreground">Needs Attention</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-destructive/15 text-destructive font-semibold">7</span>
      </div>
      {[
        { name: "Acme Corp", reason: "Champion left · Renewal in 21d", level: "critical" },
        { name: "Globex", reason: "Plan stalled 14 days", level: "warning" },
        { name: "Initech", reason: "Negative sentiment · last 2 calls", level: "critical" },
      ].map((a) => (
        <div
          key={a.name}
          className={`flex items-start gap-3 p-3 rounded-lg surface-elevated border-l-2 ${
            a.level === "critical" ? "border-destructive" : "border-warning"
          }`}
        >
          <AlertTriangle size={16} className={a.level === "critical" ? "text-destructive" : "text-warning"} />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">{a.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{a.reason}</p>
          </div>
        </div>
      ))}
    </div>
  </MockFrame>
);

export const CustomSignal = () => (
  <MockFrame>
    <div className="space-y-4">
      <div>
        <p className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Signal description</p>
        <div className="surface-elevated rounded-lg p-3 text-sm text-foreground border border-border">
          Alert me when a champion hasn't been on the last three calls.
        </div>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Test results · 30 days</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 surface-elevated rounded-lg p-3">
            <p className="text-2xl font-bold text-primary">4</p>
            <p className="text-xs text-muted-foreground">Accounts matched</p>
          </div>
          <div className="flex-1 surface-elevated rounded-lg p-3">
            <p className="text-2xl font-bold text-foreground">92%</p>
            <p className="text-xs text-muted-foreground">Confidence</p>
          </div>
        </div>
      </div>
      <button className="w-full rounded-lg gradient-brand-bg px-4 py-2 text-sm font-semibold text-foreground">
        Deploy signal
      </button>
    </div>
  </MockFrame>
);

export const HandoverEnrich = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs text-primary font-semibold uppercase tracking-wider">
        <Sparkles size={12} /> AE review · Acme Corp
      </div>
      <div className="surface-elevated rounded-lg p-3">
        <p className="text-xs text-muted-foreground mb-1">Why they bought</p>
        <p className="text-sm text-foreground leading-relaxed">
          Replacing a fragmented stack after a failed Salesforce implementation. CFO sponsored the deal personally.
        </p>
        <p className="text-xs text-primary mt-2 cursor-pointer">+ Add context</p>
      </div>
      <div className="surface-elevated rounded-lg p-3 border border-primary/30">
        <p className="text-xs text-primary mb-1 font-semibold">AE addition</p>
        <p className="text-sm text-foreground leading-relaxed italic">
          The CFO promised the board a 6-month payback. That's the real deadline.
        </p>
      </div>
    </div>
  </MockFrame>
);

export const NarrativeWhy = () => (
  <MockFrame>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">Acme Corp · Narrative</p>
        <span className="text-xs text-muted-foreground">Updated 2h ago</span>
      </div>
      <div className="surface-elevated rounded-lg p-4">
        <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">Why they bought</p>
        <p className="text-sm text-foreground leading-relaxed">
          Acme switched from a competitor after 18 months of integration pain. The VP of Engineering needed a tool the team would actually adopt.
        </p>
        <p className="text-xs text-muted-foreground mt-2">Source: Gong call · Mar 14</p>
      </div>
      <div className="surface-elevated rounded-lg p-4">
        <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">Key people</p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span>Sarah Kim</span><span className="text-success text-xs">Champion</span></div>
          <div className="flex justify-between"><span>Mark Liu</span><span className="text-warning text-xs">Skeptic</span></div>
        </div>
      </div>
    </div>
  </MockFrame>
);

export const AskCohviaPrep = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs text-primary font-semibold uppercase tracking-wider">
        <MessageSquare size={12} /> Ask Cohvia
      </div>
      <div className="surface-elevated rounded-lg p-3 ml-6">
        <p className="text-sm text-foreground">What should I know before my Acme call?</p>
      </div>
      <div className="rounded-lg p-3 mr-6 border border-primary/30 bg-primary/5">
        <p className="text-sm text-foreground leading-relaxed">
          You're meeting Sarah (champion) and a new attendee, Priya from Procurement. Two open tickets on the integration. Sentiment dropped slightly in the last call when pricing came up.
        </p>
        <p className="text-xs text-muted-foreground mt-2">3 sources · Cited inline</p>
      </div>
    </div>
  </MockFrame>
);

export const PortalCheckoff = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">Q2 Onboarding · Acme</p>
        <span className="text-xs text-success">3 of 5 complete</span>
      </div>
      {[
        { task: "Connect data sources", done: true },
        { task: "Train pilot team", done: true },
        { task: "Define success metrics", done: true },
        { task: "Schedule executive review", done: false },
        { task: "Expand to second team", done: false },
      ].map((t) => (
        <div key={t.task} className="flex items-center gap-3 surface-elevated rounded-lg p-3">
          {t.done ? (
            <CheckCircle2 size={16} className="text-success" />
          ) : (
            <Circle size={16} className="text-muted-foreground" />
          )}
          <span className={`text-sm ${t.done ? "text-muted-foreground line-through" : "text-foreground"}`}>{t.task}</span>
        </div>
      ))}
    </div>
  </MockFrame>
);

export const NewAccountReady = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <User size={16} className="text-primary" />
        <p className="text-sm font-semibold text-foreground">New assignment · Globex</p>
      </div>
      <div className="surface-elevated rounded-lg p-4 space-y-3">
        <div>
          <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-1">Status</p>
          <p className="text-sm text-foreground">Healthy · Renewal Q3 · 2 active plans</p>
        </div>
        <div>
          <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-1">What you need to know</p>
          <p className="text-sm text-foreground leading-relaxed">
            Champion is the COO, not the day-to-day user. Pricing was negotiated hard; don't reopen it. They like async updates.
          </p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground italic">Read time: 2 min</p>
    </div>
  </MockFrame>
);

export const RiskInContext = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="rounded-lg p-3 border-l-2 border-destructive bg-destructive/5">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle size={14} className="text-destructive" />
          <p className="text-sm font-semibold text-foreground">Stakeholder transition</p>
          <span className="text-xs px-1.5 py-0.5 rounded bg-destructive/15 text-destructive font-semibold ml-auto">Critical</span>
        </div>
        <p className="text-xs text-muted-foreground">Champion (Sarah Kim) departed · email Mar 22</p>
      </div>
      <div className="surface-elevated rounded-lg p-4">
        <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">Context</p>
        <p className="text-sm text-foreground leading-relaxed">
          Sarah was the executive sponsor. Her replacement, Mark, was the original skeptic of the deal. The renewal is in 60 days.
        </p>
      </div>
    </div>
  </MockFrame>
);

// Sales Handover steps
export const StepIngest = () => (
  <MockFrame>
    <div className="space-y-3">
      <p className="text-xs text-primary uppercase tracking-wider font-semibold">Ingesting</p>
      {["Gong · 14 calls", "Email · 3 threads", "Salesforce · Deal history", "Slack · Deal channel"].map((s) => (
        <div key={s} className="flex items-center gap-3 surface-elevated rounded-lg p-3">
          <CheckCircle2 size={14} className="text-success" />
          <span className="text-sm text-foreground">{s}</span>
        </div>
      ))}
    </div>
  </MockFrame>
);

export const StepNarrativeDraft = () => <NarrativeWhy />;

export const StepAEEnrich = () => <HandoverEnrich />;

export const StepCSMOpen = () => (
  <MockFrame>
    <div className="space-y-3">
      <p className="text-sm font-semibold text-foreground">Day one · Acme Corp</p>
      <div className="surface-elevated rounded-lg p-3">
        <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-1">Suggested plan</p>
        <p className="text-sm text-foreground">Onboarding · 6 milestones · pre-populated from sales calls</p>
      </div>
      <div className="surface-elevated rounded-lg p-3">
        <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-1">Narrative</p>
        <p className="text-sm text-foreground">Why they bought · Key people · Commercial context · 5 more</p>
      </div>
      <button className="w-full rounded-lg gradient-brand-bg px-4 py-2 text-sm font-semibold text-foreground inline-flex items-center justify-center gap-2">
        Open account <ArrowRight size={14} />
      </button>
    </div>
  </MockFrame>
);

// Account transfer
export const ReassignedAccount = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">Acme Corp</p>
        <span className="text-xs text-muted-foreground">Reassigned today</span>
      </div>
      <div className="flex items-center gap-3 surface-elevated rounded-lg p-3">
        <span className="text-sm text-muted-foreground line-through">Maya Chen</span>
        <ArrowRight size={14} className="text-primary" />
        <span className="text-sm text-foreground font-medium">Jordan Pak</span>
      </div>
      <div className="surface-elevated rounded-lg p-3 border-l-2 border-primary">
        <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-1">Narrative · intact</p>
        <p className="text-sm text-foreground">8 sections · 142 cited sources · last updated 1 day ago</p>
      </div>
    </div>
  </MockFrame>
);

export const KeyPeopleRead = () => (
  <MockFrame>
    <div className="space-y-3">
      <p className="text-xs text-primary uppercase tracking-wider font-semibold">Key people & dynamics</p>
      {[
        { name: "Sarah Kim", role: "VP Engineering", tag: "Champion", color: "text-success" },
        { name: "Mark Liu", role: "Director Platform", tag: "Skeptic", color: "text-warning" },
        { name: "Priya N.", role: "Procurement", tag: "Gatekeeper", color: "text-muted-foreground" },
      ].map((p) => (
        <div key={p.name} className="surface-elevated rounded-lg p-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-foreground">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.role}</p>
            </div>
            <span className={`text-xs ${p.color}`}>{p.tag}</span>
          </div>
        </div>
      ))}
    </div>
  </MockFrame>
);

export const PlansHistory = () => (
  <MockFrame>
    <div className="space-y-3">
      <p className="text-xs text-primary uppercase tracking-wider font-semibold">Plans</p>
      <div className="surface-elevated rounded-lg p-3 border-l-2 border-success">
        <p className="text-sm text-foreground font-medium">Q2 Expansion · Active</p>
        <p className="text-xs text-muted-foreground mt-1">4 of 7 milestones complete</p>
      </div>
      <div className="surface-elevated rounded-lg p-3 border-l-2 border-success">
        <p className="text-sm text-foreground font-medium">Onboarding · Active</p>
        <p className="text-xs text-muted-foreground mt-1">6 of 6 milestones complete · awaiting close</p>
      </div>
      <div className="surface-elevated rounded-lg p-3 opacity-60">
        <p className="text-sm text-foreground">Q1 Pilot · Archived</p>
        <p className="text-xs text-muted-foreground mt-1">Outcome: expanded to 3 teams</p>
      </div>
    </div>
  </MockFrame>
);

// ============= AE visuals =============
export const AENarrativeAutoDraft = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs text-primary font-semibold uppercase tracking-wider">
        <Sparkles size={12} /> Auto-generated · Acme Corp
      </div>
      <div className="surface-elevated rounded-lg p-3">
        <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-1">Why they bought</p>
        <p className="text-sm text-foreground leading-relaxed">
          Replacing a fragmented stack after a failed Salesforce rollout. CFO sponsored personally; promised the board a 6-month payback.
        </p>
        <p className="text-xs text-muted-foreground mt-2">14 calls · 3 email threads · CRM history</p>
      </div>
      <div className="surface-elevated rounded-lg p-3">
        <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-1">Key people</p>
        <p className="text-sm text-foreground">Sarah Kim · CFO · Champion</p>
        <p className="text-sm text-foreground">Mark Liu · VP Eng · Skeptic</p>
      </div>
    </div>
  </MockFrame>
);

export const AEReviewQueue = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Inbox size={16} className="text-primary" />
        <p className="text-sm font-semibold text-foreground">Pending your review</p>
        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-semibold ml-auto">2</span>
      </div>
      {[
        { name: "Acme Corp", closed: "Closed Mar 18", status: "Narrative ready" },
        { name: "Northwind", closed: "Closed Mar 21", status: "Narrative ready" },
      ].map((a) => (
        <div key={a.name} className="surface-elevated rounded-lg p-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">{a.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{a.closed} · {a.status}</p>
          </div>
          <ArrowRight size={14} className="text-primary" />
        </div>
      ))}
      <p className="text-xs text-muted-foreground italic pt-1">Once enriched, accounts move to the CSM and leave your queue.</p>
    </div>
  </MockFrame>
);

// ============= Customer portal visuals =============
export const CustomerPortalOverview = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded gradient-brand-bg" />
          <p className="text-sm font-semibold text-foreground">Vendor Portal</p>
        </div>
        <span className="text-xs text-muted-foreground">acme.vendor.com</span>
      </div>
      <p className="text-xs text-primary uppercase tracking-wider font-semibold">Welcome back, Sarah</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="surface-elevated rounded-lg p-3">
          <p className="text-2xl font-bold text-foreground">3</p>
          <p className="text-xs text-muted-foreground">Active plans</p>
        </div>
        <div className="surface-elevated rounded-lg p-3">
          <p className="text-2xl font-bold text-success">68%</p>
          <p className="text-xs text-muted-foreground">Goals on track</p>
        </div>
      </div>
      <div className="surface-elevated rounded-lg p-3">
        <p className="text-xs text-muted-foreground mb-1">Next milestone</p>
        <p className="text-sm text-foreground">Executive review · Apr 12</p>
      </div>
    </div>
  </MockFrame>
);

export const CustomerSharedPlan = () => (
  <MockFrame>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">Q2 Expansion Plan</p>
        <span className="text-xs text-success">Shared with you</span>
      </div>
      <div className="surface-elevated rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <Target size={14} className="text-primary" />
          <p className="text-sm font-medium text-foreground">Goal: Roll out to 3 new teams by end of Q2</p>
        </div>
        <p className="text-xs text-muted-foreground">Edited by you · 2d ago</p>
      </div>
      {[
        { task: "Identify pilot teams", done: true, owner: "You" },
        { task: "Schedule kickoff sessions", done: true, owner: "Vendor" },
        { task: "Provision team accounts", done: false, owner: "You" },
      ].map((t) => (
        <div key={t.task} className="flex items-center gap-3 surface-elevated rounded-lg p-3">
          {t.done ? <CheckCircle2 size={16} className="text-success" /> : <Circle size={16} className="text-muted-foreground" />}
          <span className={`text-sm flex-1 ${t.done ? "text-muted-foreground line-through" : "text-foreground"}`}>{t.task}</span>
          <span className="text-xs text-muted-foreground">{t.owner}</span>
        </div>
      ))}
    </div>
  </MockFrame>
);

export const CustomerMagicLink = () => (
  <MockFrame>
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs text-primary font-semibold uppercase tracking-wider">
        <Link2 size={12} /> Magic link sign-in
      </div>
      <div className="surface-elevated rounded-lg p-4 space-y-2">
        <p className="text-sm text-foreground">From: Vendor &lt;hello@vendor.com&gt;</p>
        <p className="text-sm text-foreground">Subject: Your portal is ready</p>
        <div className="border-t border-border pt-3 mt-2">
          <p className="text-sm text-foreground mb-3">Click below to access your account.</p>
          <button className="rounded-lg gradient-brand-bg px-4 py-2 text-sm font-semibold text-foreground inline-flex items-center gap-2">
            Open portal <ArrowRight size={14} />
          </button>
        </div>
      </div>
      <div className="flex items-start gap-2 text-xs text-muted-foreground">
        <Lock size={12} className="mt-0.5" />
        <span>No password. No account creation. Just click and you're in.</span>
      </div>
    </div>
  </MockFrame>
);
