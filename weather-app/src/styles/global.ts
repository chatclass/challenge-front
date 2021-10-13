import styled, { createGlobalStyle } from 'styled-components';

interface LineProps {
  color?: string;
  margin?: string;
}

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;

export const Line = styled.div<LineProps>`
  width: 100%;
  height: 1px;
  background: ${props => props.color || '#fff'};
  margin: ${props => props.margin || '20px 0'};
`;
