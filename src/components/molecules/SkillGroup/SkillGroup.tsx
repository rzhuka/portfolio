import { Chip, Reveal } from "@/components/atoms";
import type { SkillCategory } from "@/types/profile";

export function SkillGroup({ category }: { category: SkillCategory }) {
  return (
    <Reveal className="skill-group">
      <dt className="skill-group__name">{category.group}</dt>
      <dd>{category.items.map((item) => <Chip key={item}>{item}</Chip>)}</dd>
    </Reveal>
  );
}
