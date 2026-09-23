import { useEffect, useState } from "react";
import { NOTICES } from "@/lib/site";

export function TownBell() {
  const [index, setIndex] = useState(0);
  const [refused, setRefused] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((n) => (n + 1) % NOTICES.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  function refuse() {
    setRefused(true);
    setShake(false);
    window.requestAnimationFrame(() => setShake(true));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="border-2 border-ink bg-deep px-4 py-3">
        <p className="font-display text-xs tracking-widest text-signal uppercase">Town notice</p>
        <p key={index} className="notice-rise mt-1 text-lg text-ink">
          {NOTICES[index]}
        </p>
      </div>
      <button
        type="button"
        onClick={refuse}
        onAnimationEnd={() => setShake(false)}
        className={`border-2 border-ink bg-child px-4 py-3 text-left text-surface ${shake ? "cheek-shake" : ""}`}
      >
        <span className="font-display text-sm tracking-wide">
          {refused ? "He will not." : "Turn the other cheek"}
        </span>
        <span className="mt-1 block text-sm text-bg">
          {refused ? "The cheek stays. The street stays." : "Ask him. See what the town does."}
        </span>
      </button>
    </div>
  );
}
