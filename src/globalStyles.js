import { createGlobalStyle } from 'styled-components';

import { colors } from '_constants';

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${colors.background};
    font-family: Inter;
}

a {
    text-decoration: none;
    color: white;
}
    
    a:visited {
    text-decoration: none;
    color: white;
}

`;
