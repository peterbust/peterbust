import styled from "styled-components";

import type { Props } from "./Spacer.types";

const Spacer = styled.div<Props>`
  display: inline-block;
  height: ${({ y }) => (y ? `${y}rem` : "auto")};
  width: ${({ x }) => (x ? `${x}rem` : "auto")};
`;

export default Spacer;
