import { Section } from "@/components/molecules";
import { SECTION } from "@/config/site";
import { CV_FILENAME, CV_HREF } from "@/lib/paths";
import type { Socials } from "@/types/profile";

interface ContactSectionProps {
  email: string;
  socials: Socials;
}

export function ContactSection({ email, socials }: ContactSectionProps) {
  return (
    <Section id={SECTION.contact} title="Let’s work together">
      <a className="contact__mail" href={`mailto:${email}`}>{email}</a>
      <p className="contact__links">
        {socials.github && <a href={socials.github}>GitHub</a>}
        {socials.linkedin && <a href={socials.linkedin}>LinkedIn</a>}
        <a href={CV_HREF} download={CV_FILENAME}>CV (PDF)</a>
      </p>
    </Section>
  );
}
