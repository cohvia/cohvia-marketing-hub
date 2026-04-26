import { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const MockFrame = ({ children }: { children: ReactNode }) => (
  <div className="surface-card rounded-xl overflow-hidden shadow-lg">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
    </div>
    <div className="p-6">{children}</div>
  </div>
);

export type Block = {
  title: string;
  body?: ReactNode;
  visual?: ReactNode;
  step?: number;
};

type SolutionPageProps = {
  chip: string;
  headline: string;
  subheadline: string;
  pain: { headline: string; body: ReactNode };
  helpLabel?: string;
  blocks: Block[];
  cta: { headline: string };
};

const SolutionPage = ({
  chip,
  headline,
  subheadline,
  pain,
  helpLabel = "How Cohvia Helps",
  blocks,
  cta,
}: SolutionPageProps) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative gradient-hero">
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-primary/10 mb-6">
            {chip}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            {subheadline}
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-lg gradient-brand-bg px-6 py-3 text-sm font-semibold text-foreground transition-all hover:brightness-110"
          >
            Request Early Access <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Pain */}
      <section className="border-y border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            {pain.headline}
          </h2>
          <div className="text-lg text-secondary-foreground leading-relaxed space-y-4">
            {pain.body}
          </div>
        </div>
      </section>

      {/* Blocks */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3 text-center">
            {helpLabel}
          </p>
          <div className="space-y-24 mt-16">
            {blocks.map((block, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`flex flex-col gap-10 lg:gap-16 items-center ${
                    reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div className="flex-1 max-w-xl">
                    {typeof block.step === "number" && (
                      <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary font-bold text-sm mb-4">
                        {block.step}
                      </div>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-5">
                      {block.title}
                    </h3>
                    {block.body && (
                      <div className="space-y-3 text-secondary-foreground leading-relaxed">
                        {block.body}
                      </div>
                    )}
                  </div>
                  {block.visual && <div className="flex-1 w-full">{block.visual}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            {cta.headline}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/#waitlist"
              className="inline-flex items-center gap-2 rounded-lg gradient-brand-bg px-6 py-3 text-sm font-semibold text-foreground hover:brightness-110 transition-all"
            >
              Request Early Access <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:hello@cohvia.com"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary/50 transition-all"
            >
              hello@cohvia.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionPage;
