import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: "SansSerifRegular";
    font-style: normal;
    src: local("SansSerifRegular"),
      url("/assets/fonts/sansSerifRegular.woff2") format("woff2"),
      url("/assets/fonts/sansSerifRegular.woff") format("woff");
    unicode-range: U+000-5FF;
  }
  
  :root {
    --colors-black: #313131;
    --colors-white: #fafaee;
  }

  ::selection {
    background: var(--colors-black);
    color: var(--colors-white);
  }

  *:focus {
    outline: 1px solid var(--colors-black);
  }

  html {
    font-size: 100%;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: var(--colors-white);
    overscroll-behavior: none;
    touch-action: manipulation;
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid var(--colors-black);

    &:hover {
      outline: 1px solid var(--colors-black);
    }
    
    &:hover,
    &:focus {
      border-color: transparent;
    }
  }
`;
