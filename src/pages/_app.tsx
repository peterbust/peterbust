import { GlobalStyle, Minireset } from "@styles/index";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Minireset />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
