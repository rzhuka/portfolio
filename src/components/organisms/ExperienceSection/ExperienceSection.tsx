import { Section, TimelineEntry } from "@/components/molecules";
import { SECTION } from "@/config/site";
import type { ExperienceEntry } from "@/types/profile";

export function ExperienceSection({ items }: { items: readonly ExperienceEntry[] }) {
  return (
    <Section id={SECTION.experience} title="Experience">
      <ol>
        {items.map((e) => (
          <TimelineEntry
            key={`${e.company}-${e.period}`}
            period={e.period}
            title={`${e.title}, ${e.company}`}
            bullets={e.bullets}
          />
        ))}
      </ol>
    </Section>
  );
}
