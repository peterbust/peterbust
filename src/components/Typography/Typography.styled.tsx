import styled, { css } from "styled-components";

import { Size } from "./Typography.types";
import { rem } from "@utils";

const Global = css`
  color: ${({ theme }) => theme.colors.black};
  font-family: SansSerifRegular, Helvetica, Arial;
`;

export const StyledHeading = styled.h1`
  ${Global}
  font-size: ${rem(38)};
  font-weight: normal;
  letter-spacing: -0.025em;
  line-height: 1;

  ${({ theme: { device } }) => css`
    @media ${device.sm} {
      font-size: ${rem(34)};
    }

    @media ${device.md} {
      font-size: ${rem(45)};
    }

    @media ${device.lg} {
      font-size: ${rem(64)};
    }
  `};
`;

export const StyledParagraph = styled.p<{ size: Size }>`
  ${Global}
  font-size: ${({ size }) => (size === "normal" ? rem(18) : rem(16))};
  line-height: 1.4;

  ${({ size, theme: { device } }) => css`
    @media ${device.md} {
      font-size: ${size === "normal" ? rem(20) : rem(16)};
    }

    @media ${device.lg} {
      font-size: ${size === "normal" ? rem(26) : rem(20)};
    }
  `};
`;
