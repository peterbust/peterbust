export type Size = "normal" | "small";

export type Style = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type Props = {
  /**
   * Root element.
   */
  as?: Style | "span";
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
