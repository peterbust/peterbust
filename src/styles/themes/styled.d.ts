import "styled-components";

export type BreakpointHook =
  | "xsOnly"
  | "sm"
  | "smOnly"
  | "md"
  | "mdOnly"
  | "lg"
  | "lgOnly"
  | "xl";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    colors: {
      black: string;
      white: string;
    };
    device: {
      [key in BreakpointHook]: string;
    };
  }
}
