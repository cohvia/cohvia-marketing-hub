import { User, Mail, Phone, Building2, Calendar, Sparkles } from "lucide-react";

const SharpEdgeSection = () => (
  <section className="py-16 md:py-24 relative overflow-hidden">
    <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
    <div className="mx-auto max-w-6xl px-6 relative">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">
          The sharp edge
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Data tells you what happened.{" "}
          <span className="gradient-brand">Cohvia tells you what it means.</span>
        </h2>
      </div>

      {/* Side-by-side mock comparison */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* CRM card */}
        <div className="relative">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] mb-3 text-center">
            Your CRM
          </div>
          <div className="surface-card rounded-xl overflow-hidden">
            {/* Mock browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
              <div className="w-2.5 h-2.5 rounded-full bg-muted" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted" />
              <div className="ml-3 text-[10px] text-muted-foreground font-mono">crm.com / contact</div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <User size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Jordan Reyes</div>
                  <div className="text-xs text-muted-foreground">VP Operations · Northwind Co.</div>
                </div>
              </div>
              {[
                { icon: Mail, label: "Email", value: "jordan@northwind.com" },
                { icon: Phone, label: "Phone", value: "+1 555 0142" },
                { icon: Building2, label: "Account", value: "Northwind Co. · 240 seats" },
                { icon: Calendar, label: "Last activity", value: "Logged in 3 days ago" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={14} className="text-muted-foreground mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="text-xs text-secondary-foreground truncate">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cohvia narrative card */}
        <div className="relative">
          <div className="text-xs font-medium text-primary uppercase tracking-[0.15em] mb-3 text-center">
            Cohvia
          </div>
          <div className="surface-card rounded-xl overflow-hidden border-primary/30">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
              <div className="w-2.5 h-2.5 rounded-full bg-muted" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted" />
              <div className="ml-3 text-[10px] text-muted-foreground font-mono">cohvia / northwind</div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <div className="text-sm font-semibold text-foreground">Northwind Co.</div>
                  <div className="text-xs text-muted-foreground">Account narrative · current</div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10">
                  <Sparkles size={10} className="text-primary" />
                  <span className="text-[10px] font-medium text-primary">Live</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-primary mb-2 font-medium">
                  Why they bought
                </div>
                <p className="text-xs text-secondary-foreground leading-relaxed">
                  Jordan's team was burning 12 hours a week on manual reconciliation.
                  Their CFO set a hard deadline to cut close-time in half before Q3.
                  They chose us over Acme because of the audit trail.
                </p>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-primary mb-2 font-medium">
                  What success looks like
                </div>
                <p className="text-xs text-secondary-foreground leading-relaxed">
                  Close down to 4 days. Jordan promoted to SVP. Expansion to AP automation in Q4.
                </p>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-primary mb-2 font-medium">
                  Where things stand
                </div>
                <p className="text-xs text-secondary-foreground leading-relaxed">
                  On track. Slight friction with the integration to NetSuite — flagged last call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-secondary-foreground max-w-[680px] mx-auto leading-relaxed text-left">
        The incumbents help you get up to speed on customer data quickly. Cohvia
        helps you get up to speed on a customer{" "}
        <span className="text-foreground font-medium">relationship</span> quickly.
      </p>
    </div>
  </section>
);

export default SharpEdgeSection;
