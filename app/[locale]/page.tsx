import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { ContactSection } from "@/components/contact-section";
import { BuildLog } from "@/components/BuildLog";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LeadershipSection } from "@/components/leadership-section";
import { NavBar } from "@/components/navbar";
import { NowPanel } from "@/components/now-panel";
import { ProjectsGrid } from "@/components/projects-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SkillsSection } from "@/components/skills-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const typedLocale = locale as "en" | "de";
  const tAbout = await getTranslations("about");
  const tProjects = await getTranslations("projects");
  const tExperience = await getTranslations("experience");
  const tLeadership = await getTranslations("leadership");
  const tSkills = await getTranslations("skills");
  const tContact = await getTranslations("contact");

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <NavBar />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <Hero />

        <section id="about" className="mt-16 scroll-mt-24">
          <Reveal>
            <SectionHeading title={tAbout("heading")} description={tAbout("intro")} />
            <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
              <div className="rounded-2xl border border-ink/12 bg-white/90 p-6 shadow-soft">
                <div className="space-y-4 text-sm leading-relaxed text-ink/80 sm:text-base">
                  {profile.aboutParagraphs.map((paragraph) => (
                    <p key={paragraph.en}>{paragraph[typedLocale]}</p>
                  ))}
                </div>
              </div>
              <NowPanel />
            </div>
          </Reveal>
        </section>

        <section className="mt-16">
          <Reveal>
            <SectionHeading title={tProjects("heading")} description={tProjects("intro")} />
            <ProjectsGrid items={featuredProjects} />
            <div className="mt-6">
              <Link
                href="/projects"
                className="inline-flex rounded-full border border-ink/20 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                {tProjects("heading")}
              </Link>
            </div>
          </Reveal>
        </section>

        <section id="build-log" className="mt-16 scroll-mt-24">
          <Reveal>
            <BuildLog />
          </Reveal>
        </section>

        <section id="experience" className="mt-16 scroll-mt-24">
          <Reveal>
            <SectionHeading title={tExperience("heading")} description={tExperience("intro")} />
            <ExperienceSection />
          </Reveal>
        </section>

        <section id="leadership" className="mt-16 scroll-mt-24">
          <Reveal>
            <SectionHeading title={tLeadership("heading")} description={tLeadership("intro")} />
            <LeadershipSection />
          </Reveal>
        </section>

        <section id="skills" className="mt-16 scroll-mt-24">
          <Reveal>
            <SectionHeading title={tSkills("heading")} description={tSkills("intro")} />
            <SkillsSection />
          </Reveal>
        </section>

        <section id="contact" className="mt-16 scroll-mt-24">
          <Reveal>
            <SectionHeading title={tContact("heading")} description={tContact("line")} />
            <ContactSection />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
