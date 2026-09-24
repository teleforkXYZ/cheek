import { createFileRoute } from "@tanstack/react-router";
import sheriff from "@/assets/sheriff.jpg";
import market from "@/assets/market.webp";
import { CaBox } from "@/components/ca-box";
import { CopyLine } from "@/components/copy-line";
import { TownBell } from "@/components/town-bell";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-5xl items-center gap-6 px-4 py-8 md:grid-cols-2 md:py-12">
        <div>
          <p className="font-display text-sm tracking-widest text-child uppercase">{SITE.title}</p>
          <h1 className="mt-2 font-display text-5xl leading-none md:text-6xl">{SITE.name}</h1>
          <p className="mt-3 font-display text-2xl text-signal">${SITE.ticker}</p>
          <p className="mt-4 max-w-md text-xl leading-snug">{SITE.slogan}</p>
          <p className="mt-4 max-w-md text-muted">
            A sheriff for {SITE.chain}. The head is the joke. The ticker is the cheek he will not
            turn. The long beside him is {SITE.pair}.
          </p>
          <div className="mt-6">
            <TownBell />
          </div>
        </div>
        <figure className="border-4 border-ink bg-ink shadow-[8px_8px_0_0_var(--color-child)]">
          <img
            src={sheriff}
            alt="The sheriff of Gyattingham, green cloak, gold badge, standing under the town scroll."
            className="aspect-[3/4] w-full object-cover object-top"
          />
        </figure>
      </section>

      <CaBox />

      <section className="border-b-2 border-ink">
        <figure className="relative">
          <img
            src={market}
            alt="Gyattingham market street, the sheriff beside the wanted notices."
            className="max-h-[32rem] w-full object-cover object-center"
          />
          <figcaption className="border-t-2 border-ink bg-surface px-4 py-4">
            <div className="mx-auto flex max-w-5xl flex-col gap-1 md:flex-row md:items-end md:justify-between">
              <p className="font-display text-2xl leading-tight">Wanted for crimes against the cake.</p>
              <p className="text-muted">Reward: 1,000 gold coins, or a slap. The slap is not a yield.</p>
            </div>
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-4 py-10 md:grid-cols-3">
        <article className="border-2 border-ink bg-surface p-4">
          <h2 className="font-display text-xl">The town</h2>
          <p className="mt-2 text-muted">
            Gyattingham sits on {SITE.chain}. The name is the Robin Hood joke. The picture does the
            rest. Nothing here is the company, the stock, or the old story’s owners.
          </p>
        </article>
        <article className="border-2 border-ink bg-surface p-4">
          <h2 className="font-display text-xl">The pair</h2>
          <p className="mt-2 text-muted">
            {SITE.pair} is the parent on {SITE.pad}. It is an experimental 1x long wrapper. Losses
            are written into the wrapper. The wrapper can go to zero. The book is thin.
          </p>
        </article>
        <article className="border-2 border-ink bg-surface p-4">
          <h2 className="font-display text-xl">The cheek</h2>
          <p className="mt-2 text-muted">
            ${SITE.ticker} is the child. Same street, other word. No second exchange, no transfer
            tax, no bridge. The teleport is not a feature. It is a town that stays put.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="font-display text-3xl">The wrapper</h2>
        <p className="mt-2 max-w-xl text-muted">
          The dark box is the token. This line is the wrapper. They are not the same address.
        </p>
        <div className="mt-4">
          <CopyLine label={`${SITE.pair} contract`} value={SITE.pairAddress} />
        </div>
      </section>
    </main>
  );
}
