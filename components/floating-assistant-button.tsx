"use client";

import { MessageCircleMore } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";

export function FloatingAssistantButton() {
  const t = useTranslations("assistant");
  const pathname = usePathname();

  if (pathname.includes("/assistant")) {
    return null;
  }

  return (
    <Link
      href="/assistant"
      aria-label={t("fabAria")}
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/45 bg-accent2 text-primary shadow-soft transition hover:-translate-y-0.5 hover:border-accent hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      <MessageCircleMore className="h-6 w-6" />
    </Link>
  );
}
