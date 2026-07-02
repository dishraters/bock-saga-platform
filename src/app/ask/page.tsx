import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { AskClient } from "@/components/AskClient";
import { EvidenceNote, SectionHeader } from "@/components/Section";
import { PageShell } from "@/components/SiteShell";
import { assistantIdeas } from "@/data/site";

export const metadata: Metadata = {
  title: "Ask the Bock Saga",
  description:
    "Source-backed assistant for Carl Borgen and Bock Saga source material.",
};

export default function AskPage() {
  return (
    <PageShell>
      <section className="bg-[var(--surface-deep)] py-16 text-[var(--bg)] sm:py-24">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color-mix(in_oklch,var(--bg)_68%,transparent)]">
            Source-backed assistant
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-tight text-white sm:text-7xl">
            Ask the Bock Saga.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color-mix(in_oklch,var(--bg)_78%,transparent)]">
            Ask a question and get an answer grounded in the current Carl
            Borgen source library, with source links shown beside the answer.
          </p>
        </div>
      </section>
      <section className="bg-[var(--bg)] py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.55fr_1fr]">
          <div className="grid gap-5">
            <EvidenceNote>
              The assistant answers from approved source material and labels
              Bock Saga claims as tradition-specific when needed.
            </EvidenceNote>
            <div className="border border-[var(--line)] bg-[var(--surface)] p-5">
              <Sparkles className="size-6 text-[var(--primary)]" aria-hidden />
              <h2 className="mt-4 font-serif text-3xl font-semibold text-[var(--ink)]">
                Integration path
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                This MVP uses deterministic source retrieval. The next upgrade
                can add OpenAI responses over the same source library without
                changing the editorial rules.
              </p>
            </div>
          </div>
          <div className="border border-[var(--line)] bg-[var(--bg)] p-5">
            <AskClient suggestions={assistantIdeas} />
          </div>
        </div>
      </section>
      <section className="border-t border-[var(--line)] bg-[var(--surface)] py-16">
        <div className="container">
          <SectionHeader
            eyebrow="AI-ready"
            title="The assistant is now wired to sources."
            body="The first version answers from curated source entries. The next version can add embeddings and OpenAI generation on top of the same source library."
          />
        </div>
      </section>
    </PageShell>
  );
}
