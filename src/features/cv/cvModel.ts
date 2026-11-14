import type { Profile } from "../../types/profile";

export interface CvEntry {
  title?: string;
  meta?: string;
  lines: string[];
  bullets: string[];
}

export interface CvSection {
  title: string;
  entries: CvEntry[];
}

export interface CvModel {
  name: string;
  role: string;
  contact: string;
  sections: CvSection[];
}

/** Converts the profile into an ATS-friendly, linear document model (no layout concerns). */
export function buildCvModel(p: Profile): CvModel {
  const contact = [p.location, p.email, p.phone, p.socials.linkedin, p.socials.github]
    .filter(Boolean)
    .join(" | ");

  return {
    name: p.name,
    role: p.role,
    contact,
    sections: [
      { title: "Summary", entries: [{ lines: [p.summary], bullets: [] }] },
      {
        title: "Skills",
        entries: p.skills.map((s) => ({ lines: [`${s.group}: ${s.items.join(", ")}`], bullets: [] })),
      },
      {
        title: "Experience",
        entries: p.experience.map((e) => ({
          title: `${e.title}, ${e.company}`,
          meta: [e.period, e.location].filter(Boolean).join(" | "),
          lines: [],
          bullets: [...e.bullets],
        })),
      },
      {
        title: "Projects",
        entries: p.projects.map((pr) => {
          const url = pr.liveUrl ?? pr.repoUrl;
          return {
            title: pr.name,
            lines: [pr.description, `Tech: ${pr.stack.join(", ")}`, ...(url ? [`Link: ${url}`] : [])],
            bullets: [...pr.highlights],
          };
        }),
      },
      {
        title: "Education",
        entries: p.education.map((e) => ({
          title: e.degree,
          meta: `${e.school} | ${e.period}`,
          lines: e.note ? [e.note] : [],
          bullets: [],
        })),
      },
    ],
  };
}
