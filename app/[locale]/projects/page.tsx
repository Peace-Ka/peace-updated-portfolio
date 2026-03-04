import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { ProjectsGrid } from "@/components/projects-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "de" ? "Peace | Projekte" : "Peace | Projects",
    description:
      locale === "de"
        ? "Ausgewählte Projekte von Peace aus Web, ML und Systemdesign."
        : "Selected projects by Peace across web, ML, and systems design."
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const tProjects = await getTranslations("projects");

  return (
    <>
      <NavBar />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-16">
        <Reveal>
          <SectionHeading title={tProjects("heading")} description={tProjects("intro")} />
          <ProjectsGrid items={projects} />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
