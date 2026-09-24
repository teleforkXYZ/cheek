import { createFileRoute } from "@tanstack/react-router";
import { CaBox } from "@/components/ca-box";
import { CopyLine } from "@/components/copy-line";
import { SITE, TOKEN_ADDRESS } from "@/lib/site";

export const Route = createFileRoute("/token")({ component: Token });

const rows = [
  ["Name", SITE.name],
  ["Title", SITE.title],
  ["Ticker", `$${SITE.ticker}`],
  ["Pair", SITE.pair],
  ["Chain", SITE.chain],
  ["Pad", SITE.pad],
  ["Home", SITE.home],
  ["Token contract", TOKEN_ADDRESS ?? "The warrant is blank."],
] as const;

function Token() {
  return (
    <main className="pb-12">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="font-display text-sm tracking-widest text-child uppercase">Warrant</p>
        <h1 className="mt-2 font-display text-5xl leading-none">${SITE.ticker}</h1>
        <p className="mt-4 max-w-xl text-lg">{SITE.slogan}</p>
      </div>

      <CaBox />

      <div className="mx-auto max-w-3xl px-4 pt-8">
        <dl className="border-2 border-ink bg-surface">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-1 gap-1 border-b-2 border-ink px-4 py-3 last:border-b-0 sm:grid-cols-[10rem_1fr]"
            >
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="break-all font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8">
          <CopyLine label={`${SITE.pair} contract`} value={SITE.pairAddress} />
        </div>

        <p className="mt-6 text-sm text-muted">
          The pair address is the wrapper, not the token. Nothing on this warrant promises a return.
        </p>
      </div>
    </main>
  );
}
