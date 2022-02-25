import { screen, render } from "@testing-library/react";

import ProfileCard from "./ProfileCard";

describe("<ProfileCard /> component", () => {
  it("Renders a level 1- and 2 heading", () => {
    render(<ProfileCard />);

    const heading1 = screen.getByRole("heading", { level: 1 });
    expect(heading1).toBeInTheDocument();

    const heading2 = screen.getByRole("heading", { level: 2 });
    expect(heading2).toBeInTheDocument();
  });

  it("Renders a link to LinkedIn", () => {
    render(<ProfileCard />);

    const link = screen.getByRole("link", {
      name: /linkedin/i,
    }) as HTMLAnchorElement;

    expect(link).toBeInTheDocument();
    expect(link.href).toContain("https://www.linkedin.com/");
    expect(link.target).toBe("_blank");
  });

  it("Renders a link to email", () => {
    render(<ProfileCard />);

    const link = screen.getByRole("link", {
      name: /info@peterbust.dev/i,
    }) as HTMLAnchorElement;

    expect(link).toBeInTheDocument();
    expect(link.href).toContain("mailto:info@peterbust.dev");
  });
});
