import { createGlobalStyle } from "styled-components";
import pattern from "../assets/pattern.jpg";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
}

:root {
    --black: #2b2b2b;
    --gold: #d4af37;
    --darkGray: #444444;
    --softGray: #AAAAAA;
}

html {
    font-size: 16px;
}

body {
    background-image: url(${pattern});
    background-repeat: repeat;
    background-size: 600px 600px;
    box-shadow: inset 0 0 0 1000px rgba(100,100,100,.5);
}
`;

export default GlobalStyles;
