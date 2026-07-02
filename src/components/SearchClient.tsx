"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { searchIndex } from "@/data/site";

export function SearchClient() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const clean = query.trim().toLowerCase();
    if (!clean) return searchIndex;
    return searchIndex.filter((item) =>
      `${item.title} ${item.type} ${item.description}`
        .toLowerCase()
        .includes(clean),
    );
  }, [query]);

  return (
    <div className="grid gap-6">
      <label className="relative block">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[var(--muted)]"
          aria-hidden
        />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Carl, Ior Bock, Root Language, Temple, books"
          className="h-14 w-full border border-[var(--line)] bg-[var(--bg)] pl-12 pr-4 text-base text-[var(--ink)] outline-none transition placeholder:text-[color-mix(in_oklch,var(--muted)_70%,transparent)] focus:border-[var(--primary)]"
        />
      </label>
      <div className="grid gap-3">
        {results.map((item) => (
          <Link
            key={`${item.href}-${item.title}`}
            href={item.href}
            className="border border-[var(--line)] bg-[var(--bg)] p-5 transition hover:border-[var(--primary)] hover:bg-[var(--surface)]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
                {item.title}
              </h2>
              <span className="border border-[var(--line)] px-2 py-1 font-mono text-xs uppercase tracking-[0.12em] text-[var(--primary)]">
                {item.type}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
