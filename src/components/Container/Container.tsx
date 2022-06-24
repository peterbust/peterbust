import styled, { css } from "styled-components";

import { rem } from "@utils";

const Container = styled.div`
  width: 94%;
  margin: 4rem auto 8rem;

  ${({ theme: { device } }) => css`
    @media ${device.sm} {
      margin: 8rem auto 16rem;
      max-width: ${rem(450)};
    }

    @media ${device.md} {
      margin: 8rem 0 16rem 10%;
      max-width: ${rem(600)};
    }

    @media ${device.lg} {
      margin: 10rem 0 20rem 10%;
      max-width: ${rem(850)};
    }
  `};
`;

export default Container;
