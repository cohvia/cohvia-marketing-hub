import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, Card, CTASection } from "@/components/ui-kit";

const posts = [
  {
    slug: "why-cs-needs-ai",
    title: "Why Customer Success needs AI — and what that actually means",
    excerpt:
      "The CS industry has been talking about AI for years, but most tools just bolt on a chatbot. Here's what AI-native CS actually looks like.",
    date: "April 2, 2026",
    category: "Product",
  },
  {
    slug: "death-of-the-spreadsheet",
    title: "The death of the CS spreadsheet",
    excerpt:
      "Spreadsheets were never built to manage customer relationships. Here's what happens when you replace them with purpose-built tools.",
    date: "March 28, 2026",
    category: "Industry",
  },
  {
    slug: "account-narratives-explained",
    title: "Account Narratives: What they are and why they matter",
    excerpt:
      "A deep dive into Cohvia's core concept — AI-generated, continuously updated summaries of every customer relationship.",
    date: "March 20, 2026",
    category: "Product",
  },
  {
    slug: "building-in-public",
    title: "Building Cohvia: Week 1",
    excerpt:
      "We're building a Customer Success platform from scratch. Here's why, and what we've learned in the first week.",
    date: "March 15, 2026",
    category: "Company",
  },
];

const Blog = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Blog"
        title="Thinking out loud"
        subtitle="Thoughts on Customer Success, AI, and building a better way to work."
      />

      <Section pad="md" width="default">
        <div className="space-y-6">
          {posts.map((post) => (
            <Card
              key={post.slug}
              interactive
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-primary">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-secondary-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read more <ArrowRight size={14} />
              </span>
            </Card>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Blog;
