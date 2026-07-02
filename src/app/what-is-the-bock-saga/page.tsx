import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EvidenceNote, SectionHeader } from "@/components/Section";
import { PageShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "What Is the Bock Saga?",
  description:
    "A beginner-friendly introduction to the Bock Saga as presented by Carl Borgen and Ior Bock.",
};

export default function BockSagaPage() {
  return (
    <PageShell>
      <section className="bg-[var(--surface-deep)] py-16 text-[var(--bg)] sm:py-24">
        <div className="container max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color-mix(in_oklch,var(--bg)_68%,transparent)]">
            Beginner introduction
          </p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-white sm:text-7xl">
            What is the Bock Saga?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color-mix(in_oklch,var(--bg)_78%,transparent)]">
            The Bock Saga is presented as a Bock family oral tradition made
            public through Ior Bock and organized for readers by Carl Borgen.
            It combines origin stories, language claims, mythology, family
            lineage, Finnish settings, and the Temple of Lemminkainen narrative.
          </p>
        </div>
      </section>
      <section className="bg-[var(--bg)] py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.65fr_1fr]">
          <EvidenceNote>
            Treat this as an introduction to the Saga&apos;s own claims. It is not a
            statement that every claim is accepted by mainstream scholarship.
          </EvidenceNote>
          <div className="grid gap-8">
            {[
              [
                "An oral tradition",
                "The Saga describes itself as a preserved family story carried by speech, memory, sound, and repeated teaching.",
              ],
              [
                "A language system",
                "Root Language is presented as a sound-based system where phonetic parts carry meaning inside the tradition.",
              ],
              [
                "A mythology and history",
                "The material includes creation stories, family lines, sacred sites, cultural claims, and a large symbolic structure.",
              ],
              [
                "A modern archive project",
                "Carl's work gives the story written form. This site turns that material into a guided learning library.",
              ],
            ].map(([title, body]) => (
              <article key={title} className="border-b border-[var(--line)] pb-6">
                <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
                  {title}
                </h2>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  {body}
                </p>
              </article>
            ))}
            <Link
              href="/learn"
              className="inline-flex w-fit items-center gap-2 bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--bg)]"
            >
              Open the learning center <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="border-t border-[var(--line)] bg-[var(--surface)] py-16">
        <div className="container">
          <SectionHeader
            eyebrow="Reader promise"
            title="Make the material easier to enter without flattening it."
            body="The best version of this site should preserve the strangeness, depth, and specificity of Carl&apos;s material while giving visitors a clean path through it."
          />
        </div>
      </section>
    </PageShell>
  );
}
