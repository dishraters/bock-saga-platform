import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { EvidenceNote, SectionHeader } from "@/components/Section";
import { PageShell } from "@/components/SiteShell";
import { Timeline } from "@/components/Timeline";
import { TopicGrid } from "@/components/TopicGrid";
import { featureRows, homeStats, sourceLinks } from "@/data/site";

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[var(--surface-deep)] text-[var(--bg)]">
        <div className="absolute inset-0 opacity-55">
          <Image
            src="/images/bock-saga-hero.png"
            alt="Northern twilight landscape with symbolic stone markings"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklch,var(--surface-deep)_96%,transparent),color-mix(in_oklch,var(--surface-deep)_72%,transparent)_48%,color-mix(in_oklch,var(--surface-deep)_38%,transparent))]" />
        <div className="container relative grid min-h-[76vh] content-end gap-10 pb-12 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color-mix(in_oklch,var(--bg)_74%,transparent)]">
              Carl Borgen educational archive
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
              The Bock Saga, organized for first-time readers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color-mix(in_oklch,var(--bg)_82%,transparent)]">
              A modern learning platform for Carl Borgen&apos;s books, Ior Bock&apos;s
              oral tradition, Root Language, the Temple narratives, search, and
              a future AI assistant.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/what-is-the-bock-saga"
                className="inline-flex items-center gap-2 bg-[var(--bg)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white"
              >
                Start with the Saga <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center gap-2 border border-[color-mix(in_oklch,var(--bg)_52%,transparent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color-mix(in_oklch,var(--bg)_12%,transparent)]"
              >
                Search the archive <Search className="size-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:max-w-xl lg:justify-self-end">
            {homeStats.map((stat) => (
              <div
                key={stat.label}
                className="border border-[color-mix(in_oklch,var(--bg)_22%,transparent)] bg-[color-mix(in_oklch,var(--surface-deep)_72%,transparent)] p-4 backdrop-blur"
              >
                <p className="font-serif text-4xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[color-mix(in_oklch,var(--bg)_68%,transparent)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-16 sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-start">
          <SectionHeader
            eyebrow="Research first"
            title="A serious archive, not a loose fan site."
            body="The first version turns Carl's existing material into a guided structure that newcomers can scan, trust, and search."
          />
          <div className="grid gap-5">
            <EvidenceNote>
              This platform should present Bock Saga claims as part of the
              tradition and Carl Borgen&apos;s published account. It should not frame
              tradition-specific claims as settled academic history.
            </EvidenceNote>
            <div className="grid gap-3 sm:grid-cols-2">
              {sourceLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[var(--line)] bg-[var(--surface)] p-4 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--primary)]"
                >
                  <BookOpen className="mb-4 size-5 text-[var(--primary)]" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface)] py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow="Learning center"
            title="Start broad, then go deep."
            body="The library is organized around the questions a new reader is most likely to ask first."
          />
          <div className="mt-10">
            <TopicGrid />
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <SectionHeader
            eyebrow="Platform spine"
            title="Built for content, search, and AI."
          />
          <div className="grid gap-4">
            {featureRows.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="grid gap-4 border border-[var(--line)] bg-[var(--bg)] p-5 sm:grid-cols-[40px_1fr]"
                >
                  <Icon className="size-7 text-[var(--primary)]" aria-hidden />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[var(--ink)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {feature.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--surface)] py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow="Timeline"
            title="The story needs sequence."
            body="This starting timeline gives the site a scaffold for future sourced expansion."
          />
          <div className="mt-10">
            <Timeline />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
