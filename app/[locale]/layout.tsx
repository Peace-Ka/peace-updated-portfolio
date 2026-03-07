import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { FloatingAssistantButton } from "@/components/floating-assistant-button";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === "de";

  return {
    title: isGerman ? "Peace | Portfolio" : "Peace | Portfolio",
    description: isGerman
      ? "Portfolio von Peace - Informatik, Systeme und wirkungsvolle Projekte."
      : "Portfolio of Peace - computer science, systems, and impact-driven projects."
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen">
        {children}
        <FloatingAssistantButton />
      </div>
    </NextIntlClientProvider>
  );
}
