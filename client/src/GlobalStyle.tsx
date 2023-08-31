import { createGlobalStyle } from "styled-components";
import MusinsaMedium from './font/MusinsaMedium.ttf';
import MusinsaLight from './font/MusinsaLight.ttf';
import MusinsaBold from './font/MusinsaBold.ttf';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    @font-face {
        font-family: "MusinsaMedium";
        font-style: normal;
        src: url(${MusinsaMedium})
    }

    @font-face {
        font-family: "MusinsaLight";
        font-style: normal;
        src: url(${MusinsaLight})
    }

    @font-face {
        font-family: "MusinsaBold";
        font-style: normal;
        src: url(${MusinsaBold})
    }

    body {
        font-family: "MusinsaLight";
    }
`;

export default GlobalStyle;
