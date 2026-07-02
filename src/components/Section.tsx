export function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function EvidenceNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="border-l-4 border-[var(--warn)] bg-[var(--surface)] px-5 py-4 text-sm leading-6 text-[var(--ink)]">
      <span className="font-semibold">Reading note: </span>
      {children}
    </aside>
  );
}
