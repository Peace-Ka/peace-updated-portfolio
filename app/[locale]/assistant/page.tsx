import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { PortfolioAssistant } from "@/components/portfolio-assistant";
import { Reveal } from "@/components/reveal";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "de" ? "Peace | PA" : "Peace | PA",
    description:
      locale === "de"
        ? "Persönlicher Assistent auf Basis der Portfolio-Wissensdaten."
        : "Personal assistant grounded in portfolio knowledge data."
  };
}

export default async function AssistantPage() {
  const t = await getTranslations("assistant");

  return (
    <>
      <NavBar />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-16">
        <Reveal>
          <PortfolioAssistant />
          <p className="mt-4 text-xs text-ink/65">{t("privacyNote")}</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
