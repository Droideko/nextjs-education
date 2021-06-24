import { createGlobalStyle } from 'styled-components';

const BLACK_COLOR = '#00000';

const PRIMARY_COLOR = '#2f665c';
const SECONDARY_COLOR = '#eff6f2';

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    --btn-white-text: ${BLACK_COLOR};
    --primary-color: ${PRIMARY_COLOR};
    --secondary-color: ${SECONDARY_COLOR};

    background-color: var(--btn-white-text);
    color: white;
  }
`;
