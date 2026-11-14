import { Section, TimelineEntry } from "@/components/molecules";
import { SECTION } from "@/config/site";
import type { EducationEntry } from "@/types/profile";

export function EducationSection({ items }: { items: readonly EducationEntry[] }) {
  return (
    <Section id={SECTION.education} title="Education">
      <ol>
        {items.map((e) => (
          <TimelineEntry key={e.degree} period={e.period} title={e.degree} subtitle={e.school} note={e.note} />
        ))}
      </ol>
    </Section>
  );
}
