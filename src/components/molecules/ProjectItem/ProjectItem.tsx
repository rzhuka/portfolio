"use client";
import { useSpotlight } from "@/hooks/useSpotlight";
import type { ProjectEntry } from "@/types/profile";

interface ProjectItemProps {
  project: ProjectEntry;
  index: number;
}

export function ProjectItem({ project, index }: ProjectItemProps) {
  const { ref, onMouseMove } = useSpotlight<HTMLElement>();

  return (
    <article ref={ref} onMouseMove={onMouseMove} className="project-card">
      <span className="project-card__index">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__description">{project.description}</p>
      <ul className="project-card__highlights">
        {project.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      <ul className="project-card__stack" aria-label="Technologies">
        {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
      {(project.liveUrl || project.repoUrl) && (
        <p className="project-card__links">
          {project.liveUrl && <a href={project.liveUrl}>Live site ↗</a>}
          {project.repoUrl && <a href={project.repoUrl}>Source ↗</a>}
        </p>
      )}
    </article>
  );
}
