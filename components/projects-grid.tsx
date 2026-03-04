"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { ProjectCard } from "./project-card";
import type { Project, ProjectCategory } from "@/data/projects";

type ProjectsGridProps = {
  items: Project[];
};

type Filter = "all" | ProjectCategory;

export function ProjectsGrid({ items }: ProjectsGridProps) {
  const t = useTranslations("projects");
  const [filter, setFilter] = useState<Filter>("all");
  const orderedItems = useMemo(
    () => [...items].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))),
    [items]
  );

  const filtered = useMemo(() => {
    if (filter === "all") {
      return orderedItems;
    }
    return orderedItems.filter((item) => item.category === filter);
  }, [filter, orderedItems]);

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: t("filterAll") },
    { value: "web", label: t("filterWeb") },
    { value: "ml", label: t("filterMl") },
    { value: "systems", label: t("filterSystems") },
    { value: "other", label: t("filterOther") }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => {
          const active = item.value === filter;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                active
                  ? "border-accent bg-accent text-white"
                  : "border-ink/15 bg-white/75 text-ink hover:border-accent hover:text-accent"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {filtered.length ? (
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-ink/10 bg-white/75 p-4 text-sm text-ink/75">{t("empty")}</p>
      )}
    </div>
  );
}
