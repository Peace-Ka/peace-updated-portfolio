"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  const locale = useLocale() as "en" | "de";
  const t = useTranslations("experience");
  const [showAll, setShowAll] = useState(false);
  const [expandedRoles, setExpandedRoles] = useState<Record<number, boolean>>({});

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <div className="rounded-2xl border border-ink/12 bg-white/90 p-6 shadow-soft">
      <div className="space-y-4">
        {visibleExperiences.map((item, index) => {
          const expanded = expandedRoles[index] ?? false;
          const hasExtra = item.extraBullets.length > 0;

          return (
            <article
              key={`${item.company.en}-${item.period.en}`}
              className="rounded-xl border border-ink/10 bg-mist p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {item.period[locale]}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{item.role[locale]}</h3>
              <p className="text-sm text-ink/80">{item.company[locale]}</p>

              <ul className="mt-3 space-y-2 text-sm text-ink/80">
                {item.summaryBullets.map((bullet) => (
                  <li key={bullet.en}>- {bullet[locale]}</li>
                ))}
                {expanded
                  ? item.extraBullets.map((bullet) => <li key={bullet.en}>- {bullet[locale]}</li>)
                  : null}
              </ul>

              {hasExtra ? (
                <button
                  type="button"
                  onClick={() => setExpandedRoles((current) => ({ ...current, [index]: !expanded }))}
                  className="mt-3 text-sm font-semibold text-primary transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  {expanded ? t("lessDetails") : t("moreDetails")}
                </button>
              ) : null}
            </article>
          );
        })}
      </div>

      {experiences.length > 2 ? (
        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="mt-5 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          {showAll ? t("showLess") : t("showAll")}
        </button>
      ) : null}
    </div>
  );
}
