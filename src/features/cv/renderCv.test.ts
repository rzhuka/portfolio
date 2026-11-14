/** @jest-environment node */
import { profile } from "../../data/profile";
import { buildCvModel } from "./cvModel";
import { renderCv } from "./renderCv";

it("produces a valid PDF document", async () => {
  const doc = renderCv(buildCvModel(profile));
  const chunks: Buffer[] = [];
  const done = new Promise<Buffer>((resolve) => {
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
  });
  doc.end();
  const pdf = await done;
  expect(pdf.subarray(0, 5).toString()).toBe("%PDF-");
});
