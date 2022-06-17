import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Accordion from "./Accordion";
import AccordionDetails from "./AccordionDetails/AccordionDetails";
import AccordionSummary from "./AccordionSummary/AccordionSummary";

describe("Accordion component", () => {
  it("should render correctly", () => {
    const { getByRole } = render(
      <Accordion>
        <AccordionSummary label="Question" />
        <AccordionDetails>Answer</AccordionDetails>
      </Accordion>
    );

    const heading = getByRole("heading");
    const region = getByRole("region");

    expect(heading.tagName).toBe("H3");
    expect(heading).toHaveTextContent("Question");
    expect(region).toHaveTextContent("Answer");
  });

  it("should not render without children", () => {
    // @ts-ignore
    const { container } = render(<Accordion />);

    expect(container).toBeEmptyDOMElement();
  });

  // @todo
  // it("should not render without expected children", () => {
  //   const { container } = render(
  //     <DsAccordion>
  //       <p>Test</p>
  //       <button>Test</button>
  //     </DsAccordion>,
  //     null
  //   );

  //   expect(container).toBeEmptyDOMElement();
  // });

  // @todo
  // it("should not render if children in the wrong order", () => {
  //   const { container } = render(
  //     <DsAccordion>
  //       <DsAccordionDetails>Answer</DsAccordionDetails>
  //       <DsAccordionSummary label="Question" />
  //     </DsAccordion>,
  //     null
  //   );

  //   expect(container).toBeEmptyDOMElement();
  // });

  it("should open and close on clicking the button", async () => {
    const { getByRole } = render(
      <Accordion>
        <AccordionSummary label="Question" />
        <AccordionDetails>Answer</AccordionDetails>
      </Accordion>
    );

    const button = getByRole("button");

    expect(button).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("should handle A11Y requirements", async () => {
    const { getByRole } = render(
      <Accordion>
        <AccordionSummary label="Question" />
        <AccordionDetails>Answer</AccordionDetails>
      </Accordion>
    );

    const button = getByRole("button");
    const region = getByRole("region");

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
    const { getByRole } = render(
      <Accordion>
        <AccordionSummary id="test1" label="Question" />
        <AccordionDetails id="test2">Answer</AccordionDetails>
      </Accordion>
    );

    const button = getByRole("button");
    const region = getByRole("region");

    expect(button).toHaveAttribute("id", "test1");
    expect(button).toHaveAttribute("aria-controls", "test2");

    expect(region).toHaveAttribute("id", "test2");
    expect(region).toHaveAttribute("aria-labelledby", "test1");
  });
});
