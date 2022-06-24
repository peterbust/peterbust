import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Fragment } from "react";

import { GlobalStyle, Minireset, themes } from "@styles";

type Props = { children: JSX.Element };

const AllTheProviders = ({ children }: Props) => (
  <ThemeProvider theme={themes.default}>
    <Minireset />
    <GlobalStyle />
    <Fragment>{children}</Fragment>
  </ThemeProvider>
);

// @ts-ignore
const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
