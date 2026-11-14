import { Section, SkillGroup } from "@/components/molecules";
import { SECTION } from "@/config/site";
import type { SkillCategory } from "@/types/profile";

export function SkillsSection({ categories }: { categories: readonly SkillCategory[] }) {
  return (
    <Section id={SECTION.skills} title="Skills">
      <dl>
        {categories.map((c) => <SkillGroup key={c.group} category={c} />)}
      </dl>
    </Section>
  );
}
