import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

const links = [
  { to: "/", label: "Street", exact: true },
  { to: "/token", label: "Warrant", exact: false },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <div className="overflow-hidden border-b-2 border-ink bg-child text-surface" aria-hidden>
        <div className="cloud-track flex w-[200%] gap-16 py-2 text-xs tracking-widest uppercase">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="shrink-0">
              Gyattingham · population lawful · the cake is missing
            </span>
          ))}
        </div>
      </div>
      <header className="border-b-2 border-ink bg-surface">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="font-display text-xl leading-none tracking-wide">
            {SITE.name}
          </Link>
          <nav className="flex items-center gap-2">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                className="px-3 py-2 text-sm text-muted"
                activeProps={{ className: "bg-ink px-3 py-2 text-sm text-surface" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.x}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-ink px-3 py-2 font-display text-sm text-ink"
            >
              X
            </a>
            <span className="border-2 border-child bg-child px-3 py-2 font-display text-sm text-surface">
              ${SITE.ticker}
            </span>
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t-2 border-ink bg-deep">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-relaxed text-muted">
          <p>
            {SITE.name} is a joke on {SITE.chain}. ${SITE.ticker} is paired with {SITE.pair}, an
            experimental 1x long wrapper. That wrapper is not stock. This token is not a share, not
            a yield, and not affiliated with Robinhood, Anthropic, Long, or anyone who owns a
            sheriff.
          </p>
        </div>
      </footer>
    </div>
  );
}
