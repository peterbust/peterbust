import { useContext } from "react";

import { AccordionContext } from "../Accordion";
import { StyledButton, StyledIndicator } from "./AccordionSummary.styled";
import { Typography } from "@components/index";
import type { Props } from "./AccordionSummary.types";

const AccordionSummary = ({
  className,
  headinglevel = 3,
  label,
  ...props
}: Props) => {
  // Hooks
  const { toggle, expanded } = useContext(AccordionContext);

  // Renders
  const Heading = `h${headinglevel}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <Heading>
      <StyledButton onClick={toggle} {...props}>
        <Typography as="span" className="name">
          {label}
        </Typography>
        <StyledIndicator isActive={expanded}>
          <span></span>
          <span></span>
        </StyledIndicator>
      </StyledButton>
    </Heading>
  );
};

export default AccordionSummary;
