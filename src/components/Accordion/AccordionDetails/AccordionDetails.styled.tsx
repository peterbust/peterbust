import styled from "styled-components";

export const StyledContainer = styled.div<{ expanded: boolean }>`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  padding-bottom: 3rem;

  /**
   * Correct margins on DsTypography to not conflict with the accordion
   */

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
