import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { learningTracks } from "@/data/site";

export function TopicGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {learningTracks.map((track) => {
        const Icon = track.icon;
        return (
          <Link
            href={track.href}
            key={track.slug}
            className="group border border-[var(--line)] bg-[var(--bg)] p-5 transition hover:border-[var(--primary)] hover:bg-[var(--surface)]"
          >
            <div className="flex items-start justify-between gap-4">
              <Icon className="size-6 text-[var(--primary)]" aria-hidden />
              <ArrowRight
                className="size-5 text-[var(--muted)] transition group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                aria-hidden
              />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              {track.eyebrow}
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[var(--ink)]">
              {track.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {track.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
