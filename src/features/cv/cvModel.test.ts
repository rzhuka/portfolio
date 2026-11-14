import { profile } from "../../data/profile";
import { buildCvModel } from "./cvModel";

describe("buildCvModel", () => {
  const model = buildCvModel(profile);

  it("uses standard ATS section headings in a predictable order", () => {
    expect(model.sections.map((s) => s.title)).toEqual([
      "Summary",
      "Skills",
      "Experience",
      "Projects",
      "Education",
    ]);
  });

  it("omits empty contact fields", () => {
    expect(model.contact).not.toMatch(/\|\s*\|/);
    expect(model.contact).toContain(profile.email);
  });

  it("maps every experience entry with its bullets", () => {
    const experience = model.sections.find((s) => s.title === "Experience");
    expect(experience?.entries).toHaveLength(profile.experience.length);
    expect(experience?.entries[0]?.bullets).toEqual(profile.experience[0]?.bullets);
  });
});
