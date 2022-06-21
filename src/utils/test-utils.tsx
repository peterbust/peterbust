import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import React from "react";

import { GlobalStyle, Minireset, themes } from "@styles/index";

// @ts-ignore
const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={themes.default}>
    <Minireset />
    <GlobalStyle />
    <React.Fragment>{children}</React.Fragment>
  </ThemeProvider>
);

// @ts-ignore
const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
