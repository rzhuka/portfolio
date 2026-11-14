import { render, screen } from "@testing-library/react";
import { profile } from "@/data/profile";
import { ProjectList } from "./ProjectList";

describe("ProjectList", () => {
  it("renders a card with a heading for every project", () => {
    render(<ProjectList projects={profile.projects} />);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(profile.projects.length);
    profile.projects.forEach((project) => {
      expect(screen.getByRole("heading", { name: project.name })).toBeInTheDocument();
    });
  });
});
