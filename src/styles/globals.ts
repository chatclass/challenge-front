import { createGlobalStyle } from 'styled-components';
import { breakpoint, colors } from '../theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    color: ${colors.darkGrey}
  }
  body, html, #root {
    height: 100%;
  }
  .h1 {
    font-size: 48px;
    letter-spacing: -1.5;
    @media (max-width: ${breakpoint.sm}px) { font-size: 42px;}
  }
  .h2 {
    font-size: 32px;
    letter-spacing: -0.5;
    @media (max-width: ${breakpoint.sm}px) { font-size: 28px;}
  }
  .h3 {
    font-size: 26px;
    letter-spacing: 0;
    @media (max-width: ${breakpoint.sm}px) { font-size: 24px;}
  }
  .subtitle {
    font-size: 14px;
    letter-spacing: 0.15;
    @media (max-width: ${breakpoint.sm}px) { font-size: 14px;}
  }
  .body {
    font-size: 18px;
    letter-spacing: 0.5;
    @media (max-width: ${breakpoint.sm}px) { font-size: 16px;}
  }
  .caption {
    font-size: 12px;
    letter-spacing: 0.4;
    @media (max-width: ${breakpoint.sm}px) { font-size: 12px;}
  }
`;
