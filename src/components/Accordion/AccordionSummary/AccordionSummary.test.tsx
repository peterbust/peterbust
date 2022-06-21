import { render, screen } from "@utils/test-utils";
import AccordionSummary from "./AccordionSummary";

describe("AccordionSummary component", () => {
  it("should render correctly", () => {
    render(<AccordionSummary label="Question" />, null);

    const heading = screen.getByRole("heading");

    expect(heading.tagName).toBe("H3");
    expect(heading).toHaveTextContent("Question");
  });

  it("should render a different heading for prop 'headinglevel' ", () => {
    render(<AccordionSummary label="Question" headinglevel={2} />, null);

    const heading = screen.getByRole("heading");

    expect(heading.tagName).toBe("H2");
  });
});
