"use client";

import { useTranslations } from "next-intl";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  const t = useTranslations("skills");

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillCategories.map((category) => (
        <article key={category.key} className="rounded-2xl border border-ink/12 bg-white/90 p-5 shadow-soft">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{t(category.key)}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span key={item} className="rounded-full border border-accent/45 bg-accent2 px-3 py-1 text-xs font-medium text-ink">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
