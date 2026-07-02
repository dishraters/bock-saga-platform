import Link from "next/link";
import { primaryNav } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_oklch,var(--bg)_88%,white)]/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-[var(--line)] bg-[var(--ink)] text-sm font-semibold text-[var(--bg)]">
            BS
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-semibold text-[var(--ink)]">
              Bock Saga
            </span>
            <span className="block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Carl Borgen Archive
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/search"
          className="border border-[var(--ink)] bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--bg)] transition hover:bg-[var(--primary)]"
        >
          Search
        </Link>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-[var(--line)] px-4 py-2 md:hidden">
        {primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 px-3 py-2 text-sm font-medium text-[var(--muted)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-deep)] text-[var(--bg)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-2xl font-semibold">Bock Saga Archive</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[color-mix(in_oklch,var(--bg)_72%,transparent)]">
            A modern educational structure for Carl Borgen&apos;s work, built to
            help new readers understand the material before they go deeper.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color-mix(in_oklch,var(--bg)_62%,transparent)]">
            Explore
          </p>
          <div className="mt-3 grid gap-2 text-sm">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color-mix(in_oklch,var(--bg)_62%,transparent)]">
            Note
          </p>
          <p className="mt-3 text-sm leading-6 text-[color-mix(in_oklch,var(--bg)_72%,transparent)]">
            Claims are presented as part of the Bock Saga tradition or Carl
            Borgen&apos;s account unless a page states otherwise.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
