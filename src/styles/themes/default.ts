import { DefaultTheme } from "styled-components";

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1500,
};

const defaultTheme: DefaultTheme = {
  breakpoints: {
    ...breakpoints,
  },
  colors: {
    black: "#313131",
    white: "#fafaee",
  },
  device: {
    xsOnly: `(max-width: ${breakpoints.sm - 1}px)`,
    sm: `(min-width: ${breakpoints.sm}px)`,
    smOnly: `
      (min-width: ${breakpoints.sm}px) and
      (max-width: ${breakpoints.md - 1}px)
    `,
    md: `(min-width: ${breakpoints.md}px)`,
    mdOnly: `
      (min-width: ${breakpoints.md}px) and
      (max-width: ${breakpoints.lg - 1}px)
    `,
    lg: `(min-width: ${breakpoints.lg}px)`,
    lgOnly: `
      (min-width: ${breakpoints.lg}px) and
      (max-width: ${breakpoints.xl - 1}px)
    `,
    xl: `(min-width: ${breakpoints.xl}px)`,
  },
};

export default defaultTheme;
