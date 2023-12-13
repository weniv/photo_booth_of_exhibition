import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
    ${reset}

    // :root {
    //     --main-color: #ED7A3A;
    //     --bg-color: #F3EBE0;
    //     --white-color: #FFFFFF;
    //     --gray-color: #D9D9D9
    // }

    * {
        box-sizing: border-box;
    }

    html {
        font-family: Pretendard;
        overflow: hidden;
        background: #E9E4D8;
    }
`;

export default GlobalStyles;
