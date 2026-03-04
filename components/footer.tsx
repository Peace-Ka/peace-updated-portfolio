import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-ink/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 text-sm text-ink/70 sm:px-6">
        <p>© {new Date().getFullYear()} Peace Kalamya</p>
        <p>{t("easterEgg")}</p>
      </div>
    </footer>
  );
}
