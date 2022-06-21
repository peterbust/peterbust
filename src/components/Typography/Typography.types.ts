import { ComponentProps, ReactNode } from "react";

type ExtendsComponentProps =
  | ComponentProps<"p">
  | ComponentProps<"h1">
  | ComponentProps<"h2">
  | ComponentProps<"h3">
  | ComponentProps<"h4">
  | ComponentProps<"h5">
  | ComponentProps<"h6">;

export type Props = ExtendsComponentProps & {
  /**
   * Root element.
   */
  as?: Style | "span";
  /**
   * Children.
   */
  children: ReactNode;
  /**
   * Text size.
   * Only supported for paragraphs.
   * @default "normal"
   */
  size?: Size;
  /**
   * Text style.
   * @default "p"
   */
  style?: Style;
};

export type Size = "normal" | "small";

export type Style = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
