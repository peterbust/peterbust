import styled from "styled-components";

export const StyledContainer = styled.div<{ expanded: boolean }>`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  padding-bottom: 3rem;
`;
