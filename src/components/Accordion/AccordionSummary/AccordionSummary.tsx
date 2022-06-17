import { forwardRef, useContext } from "react";

import { AccordionContext } from "../Accordion";
import { StyledButton } from "./AccordionSummary.styled";
import { Typography } from "@components/index";
import type { Props } from "./AccordionSummary.types";

const AccordionSummary = forwardRef<HTMLButtonElement, Props>(
  function DsAccordionSummary(props, forwardRef) {
    const { className, headinglevel = 3, label, ...remainingProps } = props;

    // Hooks
    const { toggle } = useContext(AccordionContext);

    // Renders
    const Heading = `h${headinglevel}` as
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6";

    return (
      <Heading>
        {/* @ts-ignore */}
        <StyledButton onClick={toggle} ref={forwardRef} {...remainingProps}>
          <Typography as="span">{label}</Typography>
        </StyledButton>
      </Heading>
    );
  }
);

export default AccordionSummary;
