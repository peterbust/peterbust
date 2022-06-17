import { forwardRef } from "react";

import { StyledContainer } from "./AccordionDetails.styled";
import type { Props } from "./AccordionDetails.types";

const AccordionDetails = forwardRef<HTMLDivElement, Props>(
  function DsAccordionDetails(props, forwardRef) {
    const { children, className, expanded = false, ...remainingProps } = props;

    return (
      <StyledContainer
        // @ts-ignore @todo
        ref={forwardRef}
        role="region"
        {...{ expanded }}
        {...remainingProps}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default AccordionDetails;
