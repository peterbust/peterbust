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

  ::selection {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }


  // Start backwards compatibility solution for ':focus-visible'
  // https://stackoverflow.com/a/45191208
  // https://caniuse.com/css-focus-visible
  *:focus {
    outline: 1px solid ${({ theme }) => theme.colors.black};
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }
  // End

  html {
    font-size: 100%;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: ${({ theme }) => theme.colors.white};
    overscroll-behavior: none;
    touch-action: manipulation;
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};

    &:hover {
      outline: 1px solid ${({ theme }) => theme.colors.black};
    }
    
    &:hover,
    &:focus {
      border-color: transparent;
    }
  }
`;
