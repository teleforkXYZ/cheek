import { useState } from "react";
import { SITE, TOKEN_ADDRESS } from "@/lib/site";

export function CaBox() {
  const [copied, setCopied] = useState(false);
  const pending = TOKEN_ADDRESS == null;

  async function copy() {
    if (pending) return;
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="border-y-4 border-ink bg-ink text-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0 flex-1">
          <p className="font-display text-xs tracking-widest text-bg uppercase">
            ${SITE.ticker} · Contract
          </p>
          <div className="mt-3 border-2 border-signal bg-surface px-4 py-4 text-ink">
            <p className={pending ? "font-display text-2xl leading-none" : "break-all font-mono text-lg md:text-2xl"}>
              {pending ? "The warrant is blank." : TOKEN_ADDRESS}
            </p>
          </div>
          <p className="mt-2 text-sm text-bg">
            Beside {SITE.pair}. The wrapper is not the token.
          </p>
        </div>
        <button
          type="button"
          onClick={copy}
          disabled={pending}
          className="shrink-0 border-2 border-bg bg-child px-5 py-3 font-display text-sm tracking-wide text-surface hover:bg-deep hover:text-ink disabled:opacity-50"
        >
          {pending ? "Waiting" : copied ? "Copied" : "Copy"}
        </button>
      </div>
    </section>
  );
}
