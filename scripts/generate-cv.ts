import { createWriteStream, mkdirSync } from "node:fs";
import { profile } from "../src/data/profile";
import { buildCvModel } from "../src/features/cv/cvModel";
import { renderCv } from "../src/features/cv/renderCv";

mkdirSync("public", { recursive: true });

const doc = renderCv(buildCvModel(profile));
const stream = createWriteStream("public/cv.pdf");
stream.on("finish", () => console.log("Generated public/cv.pdf"));
doc.pipe(stream);
doc.end();
