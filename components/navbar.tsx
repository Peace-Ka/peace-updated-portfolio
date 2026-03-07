"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageToggle } from "./language-toggle";

export function NavBar() {
  const t = useTranslations("nav");
  const site = useTranslations("site");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/#about" },
    { label: t("projects"), href: "/projects" },
    { label: t("assistant"), href: "/assistant" },
    { label: t("contact"), href: "/#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-mist/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-ink">
          {site("name")}
          <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
            {locale.toUpperCase()}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink/85 transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Peace_Kalamya_Resume_Updated.pdf"
            download
            className="rounded-full border border-accent/60 bg-accent2 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-primary transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {t("downloadCv")}
          </a>
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            className="rounded-xl border border-ink/20 bg-white/70 p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-ink/10 bg-white/85 px-4 py-3 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-accent/10 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Peace_Kalamya_Resume_Updated.pdf"
              download
              className="rounded-lg bg-accent2 px-3 py-2 text-sm font-semibold text-primary"
            >
              {t("downloadCv")}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
