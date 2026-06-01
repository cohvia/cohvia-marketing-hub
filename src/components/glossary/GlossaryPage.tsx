import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui-kit";
import { SEO } from "@/components/SEO";
import { Byline } from "@/components/Byline";
import type { FAQ } from "@/components/home/FAQSection";

const SITE_URL = "https://www.cohvia.com";

export interface GlossaryPageProps {
  slug: string;
  term: string;
  title: string;
  metaDescription: string;
  shortDefinition: string; // 15-25 words, first sentence
  body: ReactNode; // additional context paragraphs
  whyItMatters: ReactNode;
  relatedTerms: { label: string; to: string; description?: string }[];
  faqs: FAQ[];
  author?: string;
  updated: string; // ISO date
}

const GlossaryPage = ({
  slug,
  term,
  title,
  metaDescription,
  shortDefinition,
  body,
  whyItMatters,
  relatedTerms,
  faqs,
  author = "The Cohvia Team",
  updated,
}: GlossaryPageProps) => {
  const path = `/glossary/${slug}`;
  const url = `${SITE_URL}${path}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDescription,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: author },
    publisher: {
      "@type": "Organization",
      name: "Cohvia",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/cohvia-logo.png` },
    },
    datePublished: updated,
    dateModified: updated,
  };

  const definedTerm = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term,
    description: shortDefinition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Cohvia Customer Success Glossary",
      url: `${SITE_URL}/glossary`,
    },
    url,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <Layout>
      <SEO
        title={`${title} | Cohvia Glossary`}
        description={metaDescription}
        path={path}
        jsonLd={[article, definedTerm, faqPage]}
      />

      <Section pad="lg" width="default">
        <article>
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            Glossary
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            {title}
          </h1>
          <div className="mb-8">
            <Byline author={author} updated={updated} />
          </div>

          <div className="max-w-3xl space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              <strong>{shortDefinition}</strong>
            </p>
            <div className="space-y-4 text-secondary-foreground">{body}</div>
          </div>

          <section className="mt-12 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why it matters
            </h2>
            <div className="space-y-4 text-secondary-foreground text-lg leading-relaxed">
              {whyItMatters}
            </div>
          </section>

          {relatedTerms.length > 0 && (
            <section className="mt-12 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Related terms</h2>
              <ul className="space-y-3">
                {relatedTerms.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to}
                      className="text-primary hover:underline font-medium"
                    >
                      {r.label}
                    </Link>
                    {r.description && (
                      <span className="text-secondary-foreground"> — {r.description}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-16 max-w-3xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions"
              align="left"
              className="mb-8"
            />
            <div className="space-y-8">
              {faqs.map((f) => (
                <article key={f.question}>
                  <h3 className="text-xl font-semibold mb-2">{f.question}</h3>
                  <p className="text-secondary-foreground leading-relaxed">
                    {f.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </article>
      </Section>
    </Layout>
  );
};

export default GlossaryPage;
