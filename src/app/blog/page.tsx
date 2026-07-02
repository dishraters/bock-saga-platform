import type { Metadata } from "next";
import { PageShell } from "@/components/SiteShell";
import { SectionHeader } from "@/components/Section";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A scalable blog structure for Bock Saga articles, explanations, and future AI-assisted publishing.",
};

export default function BlogPage() {
  return (
    <PageShell>
      <section className="bg-[var(--surface)] py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Blog"
            title="Article system ready for hundreds of entries."
            body="This first version seeds the structure. The next phase can add CMS content, editorial workflow, and AI-assisted drafts."
          />
        </div>
      </section>
      <section className="bg-[var(--bg)] py-16">
        <div className="container grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              id={post.slug}
              key={post.slug}
              className="scroll-mt-28 border border-[var(--line)] bg-[var(--bg)] p-6"
            >
              <div className="flex flex-wrap gap-3">
                <span className="border border-[var(--line)] px-2 py-1 font-mono text-xs uppercase tracking-[0.12em] text-[var(--primary)]">
                  {post.category}
                </span>
                <span className="px-2 py-1 font-mono text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                  {post.readTime}
                </span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-semibold text-[var(--ink)]">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
