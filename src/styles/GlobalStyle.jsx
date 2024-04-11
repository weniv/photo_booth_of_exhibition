import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'DungGeunMo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
    ${reset}

    :root {
        --main-color: #6DF2CC;
        --bg-color: #160E26;
        --white-color: #FFFFFF;
        --gray-lv2-color: #595F66;
        --gray-lv3-color: #8D9299;
    }

    * {
        box-sizing: border-box;
    }

    html {
        font-family: Pretendard;
        overflow: hidden;
        background: #160E26;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--main-color);
        color: var(--bg-color);
        font-family: DungGeunMo;
        font-size: 2.25rem;
        border: none;
        border-radius: 0.4375rem;
    }

    .ir {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
    }
`;

export default GlobalStyles;
