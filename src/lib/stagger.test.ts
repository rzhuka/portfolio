import { staggerLetters } from "./stagger";

describe("staggerLetters", () => {
  it("keeps word boundaries and increments delay across words", () => {
    const { words, total } = staggerLetters("Ab Cd", 0.1);
    expect(words.map((w) => w.map((l) => l.char).join(""))).toEqual(["Ab", "Cd"]);
    expect(words[1]?.[0]?.delay).toBeCloseTo(0.2);
    expect(total).toBeCloseTo(0.4);
  });
});
