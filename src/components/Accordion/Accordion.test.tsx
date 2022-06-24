import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import { Accordion, AccordionDetails, AccordionSummary } from "@components";

describe("Accordion component", () => {
  it("should render correctly", () => {
    render(
      <Accordion>
        <AccordionSummary label="Question" />
        <AccordionDetails>Answer</AccordionDetails>
      </Accordion>,
      null
    );

    const heading = screen.getByRole("heading");
    const region = screen.getByRole("region", { hidden: true });

    expect(heading.tagName).toBe("H3");
    expect(heading).toHaveTextContent("Question");
    expect(region).toHaveTextContent("Answer");
  });

  it("should not render without children", () => {
    // @ts-ignore
    const { container } = render(<Accordion />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should open and close on clicking the button", async () => {
    render(
      <Accordion>
        <AccordionSummary label="Question" />
        <AccordionDetails>Answer</AccordionDetails>
      </Accordion>,
      null
    );

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("should handle A11Y requirements", async () => {
    render(
      <Accordion>
        <AccordionSummary label="Question" />
        <AccordionDetails>Answer</AccordionDetails>
      </Accordion>,
      null
    );

    const button = screen.getByRole("button");
    const region = screen.getByRole("region", { hidden: true });

    expect(button).toHaveAttribute("id", "accordion-summary-question");
    expect(button).toHaveAttribute(
      "aria-controls",
      "accordion-details-question"
    );
    expect(button).toHaveAttribute("aria-expanded", "false");

    expect(region).toHaveAttribute("id", "accordion-details-question");
    expect(region).toHaveAttribute(
      "aria-labelledby",
      "accordion-summary-question"
    );

    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("should handle A11Y requirements if overwritten", () => {
    render(
      <Accordion>
        <AccordionSummary id="test1" label="Question" />
        <AccordionDetails id="test2">Answer</AccordionDetails>
      </Accordion>,
      null
    );

    const button = screen.getByRole("button");
    const region = screen.getByRole("region", { hidden: true });

    expect(button).toHaveAttribute("id", "test1");
    expect(button).toHaveAttribute("aria-controls", "test2");

    expect(region).toHaveAttribute("id", "test2");
    expect(region).toHaveAttribute("aria-labelledby", "test1");
  });
});
