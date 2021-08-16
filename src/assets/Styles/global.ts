import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased;
  }

  body, textarea, input, button {
    font: 400 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
