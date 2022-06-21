import styled, { css } from "styled-components";

import type { Props } from "./Spacer.types";

const Spacer = styled.div<Props>`
  display: block;
  height: ${({ y }) => (y ? `${y}rem` : "auto")};
  width: ${({ x }) => (x ? `${x}rem` : "auto")};

  ${({ breakpoints, theme: { device } }) => css`
    @media ${device.sm} {
      height: ${breakpoints?.sm?.y ? `${breakpoints.sm.y}rem` : null};
      width: ${breakpoints?.sm?.x ? `${breakpoints.sm.x}rem` : null};
    }

    @media ${device.md} {
      height: ${breakpoints?.md?.y ? `${breakpoints.md.y}rem` : null};
      width: ${breakpoints?.md?.x ? `${breakpoints.md.x}rem` : null};
    }

    @media ${device.lg} {
      height: ${breakpoints?.lg?.y ? `${breakpoints.lg.y}rem` : null};
      width: ${breakpoints?.lg?.x ? `${breakpoints.lg.x}rem` : null};
    }

    @media ${device.xl} {
      height: ${breakpoints?.xl?.y ? `${breakpoints.xl.y}rem` : null};
      width: ${breakpoints?.xl?.x ? `${breakpoints.xl.x}rem` : null};
    }
  `};
`;

export default Spacer;
