import styled, { css } from "styled-components";

import { Size } from "./Typography.types";

const Global = css`
  color: var(--colors-black);
  font-family: SansSerifRegular, Helvetica, Arial;
`;

export const StyledHeading = styled.h1`
  ${Global}
  font-size: 4vw;
  font-weight: normal;
  letter-spacing: -0.025em;
  line-height: 1;
`;

export const StyledParagraph = styled.p<{ size: Size }>`
  ${Global}
  font-size: ${({ size }) => (size === "normal" ? "1.6vw" : "1.2vw")};
  line-height: 1.4;
`;
