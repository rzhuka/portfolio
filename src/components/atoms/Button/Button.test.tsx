import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders a link when href is provided", () => {
    render(<Button href="/cv.pdf" download="CV.pdf">Download CV</Button>);
    const link = screen.getByRole("link", { name: "Download CV" });
    expect(link).toHaveAttribute("href", "/cv.pdf");
    expect(link).toHaveAttribute("download", "CV.pdf");
  });

  it("renders a native button otherwise", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button", { name: "Click" })).toHaveAttribute("type", "button");
  });
});
