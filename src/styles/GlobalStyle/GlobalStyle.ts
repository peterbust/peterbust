import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: "Monospace";
    font-style: normal;
    src: local("Monospace"),
      url("/assets/fonts/monospace.woff2") format("woff2"),
      url("/assets/fonts/monospace.woff") format("woff");
    unicode-range: U+000-5FF;
  }
  
  ::selection {
    background: blue;
  }

  html {
    font-size: 100%;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background: #141414;
    color: #eeffff;
    font-family: Monospace, Helvetica, Arial;
    line-height: 1.4;
    overscroll-behavior: none;
    touch-action: manipulation;
  }

  a {
    background: #0f4372;
    color: inherit;
    text-decoration: none;
  }
`;
