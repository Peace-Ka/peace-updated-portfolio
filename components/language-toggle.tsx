"use client";

import { useEffect } from "react";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const targetLocale = locale === "en" ? "de" : "en";

  useEffect(() => {
    const preferred = localStorage.getItem("preferred-locale");
    if ((preferred === "en" || preferred === "de") && preferred !== locale) {
      router.replace(pathname, { locale: preferred });
    }
  }, [locale, pathname, router]);

  const switchLocale = () => {
    localStorage.setItem("preferred-locale", targetLocale);
    document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000`;
    router.replace(pathname, { locale: targetLocale });
  };

  return (
    <button
      onClick={switchLocale}
      type="button"
      aria-label={t("languageToggle")}
      className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ink transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <Languages className="h-4 w-4" />
      {locale.toUpperCase()}
    </button>
  );
}
