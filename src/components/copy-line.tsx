import { useState } from "react";

export function CopyLine({ label, value }: { label: string; value: string | null }) {
  const [copied, setCopied] = useState(false);
  const pending = value == null;

  async function copy() {
    if (pending) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-2 border-2 border-ink bg-surface p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <div className="font-display text-sm text-signal">{label}</div>
        <div className={`text-sm text-ink ${pending ? "" : "break-all font-mono"}`}>
          {pending ? "Not published" : value}
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        disabled={pending}
        className="shrink-0 border-2 border-ink bg-bg px-4 py-2 text-sm font-medium text-ink hover:bg-deep disabled:opacity-50"
      >
        {pending ? "Waiting" : copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}