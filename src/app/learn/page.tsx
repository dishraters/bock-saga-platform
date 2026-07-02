import type { Metadata } from "next";
import { EvidenceNote, SectionHeader } from "@/components/Section";
import { PageShell } from "@/components/SiteShell";
import { TopicGrid } from "@/components/TopicGrid";
import { Timeline } from "@/components/Timeline";
import { sourceLibrary } from "@/data/site";

export const metadata: Metadata = {
  title: "Learning Center",
  description:
    "Organized sections for Root Language, Ior Bock, mythology, Temple narratives, timeline, books, and resources.",
};

const sections = [
  {
    id: "ior-bock",
    title: "Ior Bock",
    body: "The public storyteller and family source most associated with bringing the Saga into wider circulation.",
  },
  {
    id: "root-language",
    title: "Root Language",
    body: "The Saga's claimed sound and meaning system. This area should grow into diagrams, examples, and source notes.",
  },
  {
    id: "temple",
    title: "Temple of Lemminkainen",
    body: "The excavation story, the Hoard claims, the Temple Twelve, and the modern public fascination around the search.",
  },
  {
    id: "symbols",
    title: "Symbols and Mythology",
    body: "Characters, origin stories, family lines, sacred geometry, and recurring symbolic structures in the Saga.",
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    body: "Short answers for newcomers: what to read first, what is disputed, what the books cover, and how to explore safely.",
  },
];

export default function LearnPage() {
  return (
    <PageShell>
      <section className="bg-[var(--surface)] py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Learning Center"
            title="A structured library for a complicated story."
            body="The site is organized as paths, not a pile of pages."
          />
          <div className="mt-10">
            <TopicGrid />
          </div>
        </div>
      </section>
      <section className="bg-[var(--bg)] py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.65fr_1fr]">
          <EvidenceNote>
            Each section should eventually cite Carl&apos;s relevant pages, books,
            interviews, and any outside context needed for reader clarity.
          </EvidenceNote>
          <div className="grid gap-5">
            {sections.map((section) => (
              <article
                id={section.id}
                key={section.id}
                className="scroll-mt-28 border border-[var(--line)] bg-[var(--bg)] p-5"
              >
                <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-[var(--line)] bg-[var(--surface)] py-16">
        <div className="container">
          <SectionHeader eyebrow="Timeline" title="A first sequence map." />
          <div className="mt-10">
            <Timeline />
          </div>
        </div>
      </section>
      <section className="border-t border-[var(--line)] bg-[var(--bg)] py-16">
        <div className="container">
          <SectionHeader
            eyebrow="Source library"
            title="The pages behind the second iteration."
            body="These source entries now power search, article sources, and the Ask section."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sourceLibrary.map((source) => (
              <article
                id={`source-${source.id}`}
                key={source.id}
                className="scroll-mt-28 border border-[var(--line)] bg-[var(--surface)] p-5"
              >
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--primary)]">
                  {source.type}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--ink)]">
                  {source.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {source.summary}
                </p>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-[var(--muted)]">
                  {source.keyPoints.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-[var(--primary)]"
                >
                  Open source page
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
