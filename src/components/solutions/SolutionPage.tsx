import { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import {
  PageHero,
  Section,
  Eyebrow,
  BrandLink,
  CTASection,
  MockFrame as KitMockFrame,
} from "@/components/ui-kit";

export const MockFrame = KitMockFrame;

export type Block = {
  title: string;
  body?: ReactNode;
  visual?: ReactNode;
  step?: number;
};

type SolutionPageProps = {
  chip: string;
  headline: ReactNode;
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
      <PageHero eyebrow={chip} title={headline} subtitle={subheadline}>
        <BrandLink href="#waitlist" withArrow>
          Request Early Access
        </BrandLink>
      </PageHero>

      {/* Pain */}
      <Section tone="bordered" pad="md" width="narrow">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-center">
          {pain.headline}
        </h2>
        <div className="text-lg text-secondary-foreground leading-relaxed space-y-4 text-left max-w-[680px] mx-auto">
          {pain.body}
        </div>
      </Section>

      {/* Blocks */}
      <Section pad="lg">
        <Eyebrow>{helpLabel}</Eyebrow>
        <div className="space-y-16 mt-10">
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
                {block.visual && (
                  <div className="flex-1 w-full">{block.visual}</div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <CTASection
        id="waitlist"
        title={cta.headline}
        secondaryHref="mailto:hello@cohvia.com"
        secondaryLabel="hello@cohvia.com"
      />
    </Layout>
  );
};

export default SolutionPage;
