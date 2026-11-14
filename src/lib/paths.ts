export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBasePath = (path: string): string => `${BASE_PATH}${path}`;

export const CV_HREF = withBasePath("/cv.pdf");
export const CV_FILENAME = "CV.pdf";
