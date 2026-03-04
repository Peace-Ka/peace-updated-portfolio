"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { profile } from "@/data/profile";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as "en" | "de";

  return (
    <section className="pt-14 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <p className="mb-4 inline-block rounded-full border border-accent/25 bg-white/65 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Global perspective
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-ink sm:text-7xl">{profile.name}</h1>
        <p className="mt-4 text-lg font-medium text-ink/85 sm:text-xl">{t("subtitle")}</p>
        <p className="mt-3 max-w-3xl text-sm font-medium text-muted sm:text-base">{profile.heroMeta[locale]}</p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
          {profile.heroHook[locale]}
        </p>
        <p className="mt-4 text-sm font-medium text-primary">{profile.heroMicroline[locale]}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {t("viewProjects")}
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-ink/25 bg-white/75 px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            {t("contact")}
          </Link>
          <a
            href="/Peace_Kalamya_Resume_Updated.pdf"
            download
            className="rounded-full border border-accent/60 bg-accent2 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {t("downloadCv")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
