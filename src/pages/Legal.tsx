import { useEffect, useMemo } from "react";
import { NavLink, useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Layout from "@/components/layout/Layout";
import termsMd from "@/content/legal/terms.md?raw";
import privacyMd from "@/content/legal/privacy.md?raw";
import cookiesMd from "@/content/legal/cookies.md?raw";
import dpaMd from "@/content/legal/dpa.md?raw";
import acceptableUseMd from "@/content/legal/acceptable-use.md?raw";

type Policy = {
  slug: string;
  label: string;
  content?: string;
};

const policies: Policy[] = [
  { slug: "terms", label: "Terms of Service", content: termsMd },
  { slug: "privacy", label: "Privacy Policy", content: privacyMd },
  { slug: "cookies", label: "Cookie Policy", content: cookiesMd },
  { slug: "dpa", label: "Data Processing Agreement", content: dpaMd },
  { slug: "subprocessors", label: "Subprocessors" },
  { slug: "acceptable-use", label: "Acceptable Use Policy", content: acceptableUseMd },
];

const Legal = () => {
  const { slug } = useParams<{ slug: string }>();
  const active = useMemo(
    () => policies.find((p) => p.slug === slug),
    [slug]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!slug) return <Navigate to="/legal/terms" replace />;
  if (!active) return <Navigate to="/legal/terms" replace />;

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
          {/* Side menu */}
          <aside className="md:sticky md:top-24 md:self-start">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.18em] mb-4">
              Legal
            </p>
            <nav className="flex flex-col gap-1">
              {policies.map((p) => {
                const disabled = !p.content;
                return (
                  <NavLink
                    key={p.slug}
                    to={`/legal/${p.slug}`}
                    onClick={(e) => disabled && e.preventDefault()}
                    className={({ isActive }) =>
                      [
                        "rounded-md px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "bg-secondary text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                        disabled && "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-muted-foreground",
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    <span className="flex items-center justify-between gap-2">
                      {p.label}
                      {disabled && (
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          Soon
                        </span>
                      )}
                    </span>
                  </NavLink>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <article className="min-w-0">
            {active.content ? (
              <div className="legal-prose">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {active.content}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-card p-10 text-center">
                <h1 className="text-2xl font-semibold text-foreground mb-2">
                  {active.label}
                </h1>
                <p className="text-muted-foreground">
                  This policy is coming soon.
                </p>
              </div>
            )}
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Legal;
