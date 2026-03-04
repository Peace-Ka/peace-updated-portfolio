"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { buildLogEntries } from "@/data/buildLog";

const DEFAULT_VISIBLE = 2;

export function BuildLog() {
  const t = useTranslations("BuildLog");
  const locale = useLocale() as "en" | "de";
  const [expanded, setExpanded] = useState(false);

  const sortedEntries = useMemo(
    () =>
      [...buildLogEntries].sort(
        (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
      ),
    []
  );

  const visibleEntries = expanded ? sortedEntries : sortedEntries.slice(0, DEFAULT_VISIBLE);

  const formatDate = (dateISO: string) =>
    new Intl.DateTimeFormat(locale === "de" ? "de-DE" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(new Date(`${dateISO}T00:00:00`));

  return (
    <div className="rounded-2xl border border-ink/12 bg-white/90 p-6 shadow-soft">
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{t("title")}</h2>
      <p className="mt-2 text-sm text-ink/75 sm:text-base">{t("subtitle")}</p>

      <div className="mt-5 space-y-3">
        {visibleEntries.map((entry) => (
          <article
            key={`${entry.dateISO}-${entry.title.en}`}
            className="rounded-xl border border-ink/10 bg-mist p-3.5 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {formatDate(entry.dateISO)}
            </p>
            <h3 className="mt-1 text-base font-semibold text-ink">{entry.title[locale]}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{entry.summary[locale]}</p>

            {entry.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/45 bg-accent2 px-2.5 py-1 text-xs font-medium text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {entry.links?.length ? (
              <div className="mt-3 flex flex-wrap gap-3">
                {entry.links.map((link) => (
                  <a
                    key={`${link.href}-${link.label.en}`}
                    href={link.href}
                    className="text-sm font-semibold text-primary underline-offset-4 transition hover:text-accent hover:underline"
                  >
                    {link.label[locale]}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      {sortedEntries.length > DEFAULT_VISIBLE ? (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="mt-5 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          {expanded ? t("showLess") : t("showMore")}
        </button>
      ) : null}
    </div>
  );
}
