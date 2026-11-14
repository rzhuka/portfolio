import type { ReactNode } from "react";
import { Reveal, SectionTitle } from "@/components/atoms";
import { NAV_ITEMS } from "@/config/site";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  const titleId = `${id}-title`;
  const position = NAV_ITEMS.findIndex((item) => item.href === `#${id}`);
  const eyebrow = position >= 0 ? String(position + 1).padStart(2, "0") : null;

  return (
    <section id={id} aria-labelledby={titleId} className="section">
      <Reveal>
        {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
        <SectionTitle id={titleId}>{title}</SectionTitle>
      </Reveal>
      {children}
    </section>
  );
}
