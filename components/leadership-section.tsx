"use client";

import { useLocale } from "next-intl";
import { leadershipItems } from "@/data/leadership";

export function LeadershipSection() {
  const locale = useLocale() as "en" | "de";

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {leadershipItems.map((item) => (
        <article key={`${item.organization.en}-${item.period.en}`} className="rounded-2xl border border-ink/12 bg-white/90 p-5 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{item.period[locale]}</p>
          <h3 className="mt-2 text-base font-semibold text-ink">{item.title[locale]}</h3>
          <p className="mt-1 text-sm text-ink/80">{item.organization[locale]}</p>
        </article>
      ))}
    </div>
  );
}
