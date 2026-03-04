"use client";

import { useLocale, useTranslations } from "next-intl";
import { profile } from "@/data/profile";

export function NowPanel() {
  const locale = useLocale() as "en" | "de";
  const t = useTranslations("now");

  return (
    <aside className="rounded-2xl border border-ink/12 bg-white/90 p-5 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{t("heading")}</p>
      <h3 className="mt-2 text-lg font-semibold text-ink">{t("title")}</h3>
      <ul className="mt-4 space-y-3 text-sm text-ink/80">
        {profile.nowItems.map((item) => (
          <li key={item.en} className="rounded-lg bg-accent2 px-3 py-2">
            {item[locale]}
          </li>
        ))}
      </ul>
    </aside>
  );
}
