import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import main from "./main";

const GlobalStyle = createGlobalStyle`
  ${variables}
  ${main}
  
  body {
    margin: 0;
    font-weight: bold;
    width: 100%;
    max-width: 100vw;
    min-height: 100%;
    pverflow: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  p {
    margin: 0 0 16px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  h1 {
    font-size: 40px;
    margin: 0 0 30px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 12px;
  }

  h6 {
    font-size: 10px;
  }
`;

export default GlobalStyle;