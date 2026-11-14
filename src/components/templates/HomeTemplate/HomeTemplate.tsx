import { Section } from "@/components/molecules";
import {
  ContactSection,
  CursorGlow,
  EducationSection,
  ExperienceSection,
  Footer,
  Header,
  Hero,
  ProjectList,
  ScrollProgress,
  SkillsSection,
  TechMarquee,
} from "@/components/organisms";
import { SECTION } from "@/config/site";
import type { Profile } from "@/types/profile";

export function HomeTemplate({ profile }: { profile: Profile }) {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Header brand={profile.name} />
      <main id="top">
        <Hero
          name={profile.name}
          role={profile.role}
          tagline={profile.tagline}
          location={profile.location}
        />
        <TechMarquee items={profile.skills.flatMap((category) => category.items)} />
        <Section id={SECTION.work} title="Selected work">
          <ProjectList projects={profile.projects} />
        </Section>
        <ExperienceSection items={profile.experience} />
        <SkillsSection categories={profile.skills} />
        <EducationSection items={profile.education} />
        <ContactSection email={profile.email} socials={profile.socials} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
