import { render } from "@testing-library/react";

import AccordionSummary from "./AccordionSummary";

describe("AccordionSummary component", () => {
  it("should render correctly", () => {
    const { getByRole, getAllByRole } = render(
      <AccordionSummary label="Question" />
    );

    const heading = getByRole("heading");

    expect(heading.tagName).toBe("H3");
    expect(heading).toHaveTextContent("Question");
  });

  it("should render a different heading for prop 'headinglevel' ", () => {
    const { getByRole } = render(
      <AccordionSummary label="Question" headinglevel={2} />
    );

    const heading = getByRole("heading");

    expect(heading.tagName).toBe("H2");
  });
});
