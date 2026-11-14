import { Reveal } from "@/components/atoms";

interface TimelineEntryProps {
  period: string;
  title: string;
  subtitle?: string;
  note?: string;
  bullets?: readonly string[];
}

export function TimelineEntry({ period, title, subtitle, note, bullets }: TimelineEntryProps) {
  return (
    <li className="timeline-entry">
      <Reveal className="timeline-entry__inner">
        <p className="timeline-entry__period">{period}</p>
        <div>
          <h3 className="timeline-entry__title">{title}</h3>
          {subtitle && <p className="timeline-entry__subtitle">{subtitle}</p>}
          {note && <p className="timeline-entry__note">{note}</p>}
          {bullets && (
            <ul className="timeline-entry__bullets">
              {bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          )}
        </div>
      </Reveal>
    </li>
  );
}
