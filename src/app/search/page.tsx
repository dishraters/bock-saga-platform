import type { Metadata } from "next";
import { SearchClient } from "@/components/SearchClient";
import { PageShell } from "@/components/SiteShell";
import { SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search Bock Saga topics, books, people, learning tracks, and future archive entries.",
};

export default function SearchPage() {
  return (
    <PageShell>
      <section className="bg-[var(--surface)] py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Search"
            title="Find the thread you came for."
            body="A first client-side search index for topics, books, and starter articles. It can later move to full-site search or vector retrieval."
          />
        </div>
      </section>
      <section className="bg-[var(--bg)] py-16">
        <div className="container max-w-4xl">
          <SearchClient />
        </div>
      </section>
    </PageShell>
  );
}
