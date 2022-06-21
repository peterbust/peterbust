import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import { ThemeProvider } from "styled-components";
import Link from "next/link";
import type { AppProps } from "next/app";

import { linkResolver, repositoryName } from "../../prismicio";
import { GlobalStyle, Minireset, themes } from "@styles/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <ThemeProvider theme={themes.default}>
          <Minireset />
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
