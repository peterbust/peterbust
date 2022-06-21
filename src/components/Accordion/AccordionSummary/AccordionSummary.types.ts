import type { ComponentPropsWithoutRef } from "react";

// export type Props = StyledComponent<"button", DefaultTheme> & {
export type Props = ComponentPropsWithoutRef<"button"> & {
  /**
   * Heading level to use.
   * @default 3
   */
  headinglevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Accordion summary text.
   */
  label: string;
};
