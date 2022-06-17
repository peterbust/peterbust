import type { FC } from "react";

import { StyledHeading, StyledParagraph } from "./Typography.styled";
import type { Props } from "./Typography.types";

const Typography: FC<Props> = ({
  as,
  children,
  size = "normal",
  style = "p",
  ...props
}) => {
  let StyledComponent = StyledHeading;
  if (style === "p") StyledComponent = StyledParagraph;

  return (
    <StyledComponent as={as ?? style} {...{ size }} {...props}>
      {children}
    </StyledComponent>
  );
};

export default Typography;
