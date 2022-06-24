import { ComponentPropsWithRef, ReactNode } from "react";

type ComponentProps =
  | ComponentPropsWithRef<"p">
  | ComponentPropsWithRef<"h1">
  | ComponentPropsWithRef<"h2">
  | ComponentPropsWithRef<"h3">
  | ComponentPropsWithRef<"h4">
  | ComponentPropsWithRef<"h5">
  | ComponentPropsWithRef<"h6">;

export type Props = ComponentProps & {
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
