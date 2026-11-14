import type { ReactNode } from "react";

interface SectionTitleProps {
  id: string;
  children: ReactNode;
}

export function SectionTitle({ id, children }: SectionTitleProps) {
  return <h2 id={id} className="section-title">{children}</h2>;
}
