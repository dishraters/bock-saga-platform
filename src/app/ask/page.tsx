import type { Metadata } from "next";
import { Brain, Sparkles } from "lucide-react";
import { EvidenceNote, SectionHeader } from "@/components/Section";
import { PageShell } from "@/components/SiteShell";
import { assistantIdeas } from "@/data/site";

export const metadata: Metadata = {
  title: "Ask the Bock Saga",
  description:
    "AI assistant placeholder for future retrieval over Carl Borgen and Bock Saga source material.",
};

export default function AskPage() {
  return (
    <PageShell>
      <section className="bg-[var(--surface-deep)] py-16 text-[var(--bg)] sm:py-24">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color-mix(in_oklch,var(--bg)_68%,transparent)]">
            Future AI assistant
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-tight text-white sm:text-7xl">
            Ask the Bock Saga.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color-mix(in_oklch,var(--bg)_78%,transparent)]">
            This section is prepared for an OpenAI-powered assistant that can
            answer from Carl&apos;s books, pages, interviews, and source notes after
            the knowledge base is loaded.
          </p>
        </div>
      </section>
      <section className="bg-[var(--bg)] py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.7fr_1fr]">
          <div className="grid gap-5">
            <EvidenceNote>
              The assistant should only answer from approved source material and
              should label Bock Saga claims as tradition-specific when needed.
            </EvidenceNote>
            <div className="border border-[var(--line)] bg-[var(--surface)] p-5">
              <Sparkles className="size-6 text-[var(--primary)]" aria-hidden />
              <h2 className="mt-4 font-serif text-3xl font-semibold text-[var(--ink)]">
                Integration path
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Add a content ingestion pipeline, chunk the source library, add
                retrieval, then connect the chat UI to an OpenAI responses
                endpoint with source-aware answers.
              </p>
            </div>
          </div>
          <div className="border border-[var(--line)] bg-[var(--bg)] p-5">
            <Brain className="size-7 text-[var(--primary)]" aria-hidden />
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[var(--ink)]">
              Starter prompts
            </h2>
            <div className="mt-5 grid gap-3">
              {assistantIdeas.map((idea) => (
                <button
                  key={idea}
                  className="border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-left text-sm font-medium text-[var(--ink)]"
                  type="button"
                >
                  {idea}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-[var(--line)] bg-[var(--surface)] py-16">
        <div className="container">
          <SectionHeader
            eyebrow="AI-ready"
            title="The placeholder is designed for the real integration."
            body="The goal is not a chatbot gimmick. The goal is a source-aware guide that makes the archive easier to explore."
          />
        </div>
      </section>
    </PageShell>
  );
}
