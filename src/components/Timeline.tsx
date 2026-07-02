import { timeline } from "@/data/site";

export function Timeline() {
  return (
    <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {timeline.map((item) => (
        <div
          key={`${item.date}-${item.title}`}
          className="grid gap-3 py-5 md:grid-cols-[180px_1fr]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--primary)]">
            {item.date}
          </p>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
