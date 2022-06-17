import { GlobalStyle, Minireset } from "@styles/index";
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import Link from "next/link";
import type { AppProps } from "next/app";

import { linkResolver, repositoryName } from "../../prismicio";

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
        <Minireset />
        <GlobalStyle />
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
