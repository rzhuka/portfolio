import { Reveal } from "@/components/atoms";
import { ProjectItem } from "@/components/molecules";
import type { ProjectEntry } from "@/types/profile";

export function ProjectList({ projects }: { projects: readonly ProjectEntry[] }) {
  return (
    <ul className="project-list">
      {projects.map((project, index) => (
        <li key={project.name}>
          <Reveal delay={index * 0.12} className="project-list__cell">
            <ProjectItem project={project} index={index} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
