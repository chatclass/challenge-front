import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: linear-gradient(180deg, #FF7F00 0%, #FFB600 100%);
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }

  body {
  font-size: 1.6rem;
}

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }


  *, button, input {
    border: 0;
    background: none;
  }


  :root {
    --color-primary: #F5F5F5;
    --color-black: #333;
    --color-white: #FFF;
    --color-gray: #666;
    --color-blue: #3483fa;
    --color-green: #00a650;

    --color-header: #FFF159;
    --color-search-placeholder: #AAAAAA;
    --color-border: #ddd;

    --reputation-1: #FFE7E6;
    --reputation-2: #FFF4E7;
    --reputation-3: #FFFDE5;
    --reputation-4: #F3FEE0;
    --reputation-5: #00A650;

    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }
`;