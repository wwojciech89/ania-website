import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    padding: 80px 65px 0;
    font-family: 'Lato';
}

button {
    padding: 0;
    cursor: pointer;
    font-family: 'Lato'
}

ul {
    padding: 0;
    maring 0;
}
`;

export default GlobalStyle;