import { HelpCircle, SearchX } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui-kit";

const questions = [
  "Why did they choose you over everyone else?",
  "Why do they keep renewing — or quietly pull away?",
];

const ProblemSection = () => (
  <Section tone="tinted" pad="md" width="wide">
    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
      <div>
        <SectionHeader
          align="left"
          eyebrow="The problem"
          title={
            <>
              You know their name.{" "}
              <span className="gradient-brand">But do you know their why?</span>
            </>
          }
        />
        <div className="surface-card rounded-2xl p-7 md:p-9 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-primary/8 blur-3xl rounded-full pointer-events-none" />
          <div className="relative space-y-5">
            {questions.map((q, i) => (
              <div key={q} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <HelpCircle size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-1">
                    Blind spot 0{i + 1}
                  </p>
                  <p className="text-lg md:text-xl font-medium text-foreground leading-snug">
                    {q}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="surface-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-muted-foreground/10 flex items-center justify-center">
                <SearchX size={20} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Northwind Co.</p>
                <p className="text-xs text-muted-foreground">Account 4 of 47</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  CRM says
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-secondary w-3/4" />
                  <div className="h-2 rounded-full bg-secondary w-1/2" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="text-xs uppercase tracking-wider text-primary mb-2 font-medium">
                  What the team actually needs to know
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-primary/20 w-5/6" />
                  <div className="h-2 rounded-full bg-primary/20 w-2/3" />
                  <div className="h-2 rounded-full bg-primary/20 w-4/5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-lg text-foreground font-medium leading-snug">
          You can't make your customer a superstar if you don't understand what drives them.
        </p>
      </div>
    </div>
  </Section>
);

export default ProblemSection;
