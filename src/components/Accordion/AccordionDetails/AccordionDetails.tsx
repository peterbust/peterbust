import styled, { css } from "styled-components";
import type { Props } from "./AccordionDetails.types";

export const AccordionDetails = styled.div<Props>`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  padding-bottom: 1.5rem;

  ${({ theme: { device } }) => css`
    @media ${device.md} {
      padding-bottom: 2rem;
    }

    @media ${device.lg} {
      padding-bottom: 3rem;
    }
  `};
`;

export default AccordionDetails;
