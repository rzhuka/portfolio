import PDFDocument from "pdfkit";
import type { CvModel } from "./cvModel";

const FONT = { regular: "Helvetica", bold: "Helvetica-Bold" } as const;

/** Renders the model as a single-column PDF with real text. Caller pipes and ends the doc. */
export function renderCv(model: CvModel): PDFKit.PDFDocument {
  const doc = new PDFDocument({
    size: "A4",
    margin: 50,
    info: { Title: `${model.name} - CV`, Author: model.name },
  });

  const write = (
    text: string,
    font: string = FONT.regular,
    size = 10,
    options: PDFKit.Mixins.TextOptions = {},
  ) => doc.font(font).fontSize(size).fillColor("#000").text(text, options);

  write(model.name, FONT.bold, 20);
  write(model.role);
  write(model.contact);

  for (const section of model.sections) {
    doc.moveDown(0.9);
    write(section.title.toUpperCase(), FONT.bold, 11.5);
    doc.moveDown(0.3);

    for (const entry of section.entries) {
      if (entry.title) write(entry.title, FONT.bold, 10.5);
      if (entry.meta) write(entry.meta);
      for (const line of entry.lines) write(line, FONT.regular, 10, { lineGap: 2 });
      for (const bullet of entry.bullets) write(`- ${bullet}`, FONT.regular, 10, { lineGap: 1.5 });
      if (entry.title) doc.moveDown(0.6);
    }
  }

  return doc;
}
