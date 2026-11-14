export interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  location?: string;
  bullets: readonly string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  stack: readonly string[];
  highlights: readonly string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface SkillCategory {
  group: string;
  items: readonly string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  note?: string;
}

export interface Socials {
  github?: string;
  linkedin?: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  tagline: string;
  summary: string;
  socials: Socials;
  experience: readonly ExperienceEntry[];
  projects: readonly ProjectEntry[];
  skills: readonly SkillCategory[];
  education: readonly EducationEntry[];
}
