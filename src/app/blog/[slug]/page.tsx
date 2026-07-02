import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { EvidenceNote } from "@/components/Section";
import { PageShell } from "@/components/SiteShell";
import { articles, sourceLibrary } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.deck,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const sources = article.sourceIds
    .map((id) => sourceLibrary.find((source) => source.id === id))
    .filter(Boolean);

  return (
    <PageShell>
      <article>
        <section className="bg-[var(--surface)] py-12 sm:py-20">
          <div className="container max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
            >
              <ArrowLeft className="size-4" /> Back to blog
            </Link>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-[var(--primary)]">
              {article.category} / {article.readTime}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-[var(--ink)] sm:text-7xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              {article.deck}
            </p>
          </div>
        </section>
        <section className="bg-[var(--bg)] py-14">
          <div className="container grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px]">
            <div className="grid gap-10">
              <EvidenceNote>
                This article summarizes Carl Borgen source pages and keeps
                tradition-specific claims labeled as claims or accounts.
              </EvidenceNote>
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-4xl font-semibold text-[var(--ink)]">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
            <aside className="h-fit border border-[var(--line)] bg-[var(--surface)] p-5 lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--primary)]">
                Sources
              </p>
              <div className="mt-4 grid gap-4">
                {sources.map((source) =>
                  source ? (
                    <a
                      key={source.id}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group border border-[var(--line)] bg-[var(--bg)] p-4 text-sm"
                    >
                      <span className="flex items-start justify-between gap-3 font-semibold text-[var(--ink)]">
                        {source.title}
                        <ExternalLink className="mt-0.5 size-4 shrink-0 text-[var(--primary)]" />
                      </span>
                      <span className="mt-2 block text-xs leading-5 text-[var(--muted)]">
                        {source.summary}
                      </span>
                    </a>
                  ) : null,
                )}
              </div>
            </aside>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
