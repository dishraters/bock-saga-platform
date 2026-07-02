import type { Metadata } from "next";
import { PageShell } from "@/components/SiteShell";
import { EvidenceNote, SectionHeader } from "@/components/Section";
import { books } from "@/data/site";

export const metadata: Metadata = {
  title: "About Carl Borgen",
  description:
    "Biography, books, and archive structure for Carl Borgen's Bock Saga work.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-[var(--surface)] py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="About Carl"
            title="The author organizing a difficult oral tradition for modern readers."
            body="Carl Borgen's work gives newcomers a written path into the Bock Saga, its people, its books, and its debated claims."
          />
        </div>
      </section>
      <section className="bg-[var(--bg)] py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <EvidenceNote>
            This page should expand with verified biography, interviews, press,
            and publication history. Current text is intentionally conservative.
          </EvidenceNote>
          <div className="grid gap-5 text-base leading-8 text-[var(--muted)]">
            <p>
              Carl Borgen writes about the Bock Saga with unusual proximity to
              the source material. His current website presents him as an author
              and historian focused on preserving and explaining the tradition
              associated with Ior Bock and the Bock family.
            </p>
            <p>
              The new site should make Carl&apos;s role easier to understand: author,
              organizer, witness to parts of the story, and guide for readers
              who need context before entering the deeper mythology.
            </p>
          </div>
        </div>
      </section>
      <section id="books" className="border-y border-[var(--line)] bg-[var(--surface)] py-16">
        <div className="container">
          <SectionHeader
            eyebrow="Books"
            title="The core reading shelf."
            body="These titles become the first anchors for a future searchable knowledge base."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {books.map((book) => (
              <article
                key={book.title}
                className="border border-[var(--line)] bg-[var(--bg)] p-5"
              >
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--primary)]">
                  {book.type}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--ink)]">
                  {book.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {book.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
