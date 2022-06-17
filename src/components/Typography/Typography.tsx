import { StyledHeading, StyledParagraph } from "./Typography.styled";
import type { Props } from "./Typography.types";

const Typography = ({
  as,
  children,
  size = "normal",
  style = "p",
  ...props
}: Props) => {
  let StyledComponent = StyledHeading;
  if (style === "p") StyledComponent = StyledParagraph;

  return (
    <StyledComponent as={as ?? style} {...{ size }} {...props}>
      {children}
    </StyledComponent>
  );
};

export default Typography;
