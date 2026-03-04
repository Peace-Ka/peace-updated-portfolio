"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("projects");
  const locale = useLocale() as "en" | "de";
  const [expanded, setExpanded] = useState(false);
  const bullets = project.bullets ?? [];
  const hasExpandableDetails = bullets.length > 3 || Boolean(project.outcome);
  const visibleBullets = expanded ? bullets : bullets.slice(0, 3);

  return (
    <motion.article
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-2xl border bg-white/85 p-5 shadow-soft ${
        project.featured ? "border-accent/55" : "border-ink/12"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-ink">{project.title[locale]}</h3>
        {project.featured ? (
          <span className="rounded-full border border-accent/50 bg-accent2 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            {t("featured")}
          </span>
        ) : null}
      </div>

      {project.client ? (
        <p className="mt-2 text-sm text-ink/75">
          <span className="font-semibold text-ink">{t("client")}: </span>
          {project.client[locale]}
        </p>
      ) : null}

      <p className="mt-3 text-sm leading-relaxed text-ink/80">
        {project.summary?.[locale] ?? project.problem[locale]}
      </p>

      {visibleBullets.length > 0 ? (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/80">
          {visibleBullets.map((bullet) => (
            <li key={bullet.en}>- {bullet[locale]}</li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 space-y-2 text-sm leading-relaxed text-ink/80">
          <p>
            <span className="font-semibold text-ink">{t("solution")}: </span>
            {project.solution[locale]}
          </p>
        </div>
      )}

      {expanded && project.outcome ? (
        <p className="mt-4 rounded-xl bg-accent/10 px-3 py-2 text-sm font-medium text-primary">
          <span className="font-semibold">{t("outcome")}: </span>
          {project.outcome[locale]}
        </p>
      ) : (
        <p className="mt-4 rounded-xl bg-accent/10 px-3 py-2 text-sm font-medium text-accent">
          {t("highlight")}: {project.highlight[locale]}
        </p>
      )}

      {hasExpandableDetails ? (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="mt-3 text-sm font-semibold text-primary transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          {expanded ? t("lessDetails") : t("moreDetails")}
        </button>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ink/15 bg-mist px-3 py-1 text-xs font-medium text-ink/85"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 text-sm">
        {project.links?.map((link) => (
          <a
            key={`${link.href}-${link.label.en}`}
            href={link.href}
            className="inline-flex items-center gap-1 font-medium text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            {link.label[locale]}
          </a>
        ))}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        ) : null}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
