export interface StaggeredLetter {
  char: string;
  delay: number;
}

/** Splits text into words of letters, each with an incremental animation delay. */
export function staggerLetters(text: string, step: number) {
  let index = 0;
  const words: StaggeredLetter[][] = text
    .split(" ")
    .filter(Boolean)
    .map((word) => [...word].map((char) => ({ char, delay: index++ * step })));
  return { words, total: index * step };
}
