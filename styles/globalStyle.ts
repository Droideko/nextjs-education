import { createGlobalStyle } from 'styled-components';

const BLACK = '#00000';
const WHITE = '#ffffff';

const PRIMARY_LIGHT = '#2f665c';
const PRIMARY_DARK = '#000'; // TODO

const SECONDARY_LIGHT = '#eff6f2';
const SECONDARY_DARK = '#000'; // TODO

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    --btn-white-text: ${BLACK};
    --primary-color: ${PRIMARY_LIGHT};
    --secondary-color: ${SECONDARY_LIGHT};

    background-color: var(--btn-white-text);
    color: var(--primary-color);

    .light {

    }

    .dark {
      
    }
  }
`;
