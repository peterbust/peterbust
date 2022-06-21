type Config = {
  /**
   * Number of rem width.
   */
  x?: number;
  /**
   * Number of rem height.
   */
  y?: number;
};

export type Props = Config & {
  /**
   * Overwrites per breakpoint.
   */
  breakpoints?: {
    sm?: Config;
    md?: Config;
    lg?: Config;
    xl?: Config;
  };
};
