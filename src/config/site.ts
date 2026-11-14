export const SECTION = {
  work: "work",
  experience: "experience",
  skills: "skills",
  education: "education",
  contact: "contact",
} as const;

export const NAV_ITEMS = [
  { label: "Work", href: `#${SECTION.work}` },
  { label: "Experience", href: `#${SECTION.experience}` },
  { label: "Skills", href: `#${SECTION.skills}` },
  { label: "Education", href: `#${SECTION.education}` },
  { label: "Contact", href: `#${SECTION.contact}` },
] as const;
