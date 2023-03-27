import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    word-break: keep-all;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    font-size: 62.5%;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body{
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    line-height: 1;
    color: ${(props) => props.theme.gray800};
    background: #ffffff;
  }

  #wrap {
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
    padding: 0;
    border: none;
    background: none;
  }

  a { 
    text-decoration: none;
    color:inherit;
    border: none;
    background: none;
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: local('Pretendard Light'),
        url('../fonts/Pretendard-Light.woff2') format('woff2'),
        url('../fonts/Pretendard-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'),
        url('../fonts/Pretendard-Regular.woff2') format('woff2'),
        url('../fonts/Pretendard-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'),
        url('../fonts/Pretendard-Medium.woff2') format('woff2'),
        url('../fonts/Pretendard-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'),
        url('../fonts/Pretendard-SemiBold.woff2') format('woff2'),
        url('../fonts/Pretendard-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'),
        url('../fonts/Pretendard-Bold.woff2') format('woff2'),
        url('../fonts/Pretendard-Bold.woff') format('woff');
  }

  //숨김텍스트
  .hide-txt {
    ${(props) => props.theme.a11yHidden}
  }
  .pageHead {
    display:none;
  }

  @media (min-width: 500px) {
    
    .pageHead {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 60px;
      background: #fff;
      text-align: center;
      display:flex;
      justify-content: center;
      align-items: center;
      font-size: 2.4rem;
      color: #8f8f99;
      font-weight: 700;
      border-bottom: 1px solid #F0EEF6;
    }

    body {
      height: 100vh;
      overflow: hidden;
    }

    #root {
      width: 100%;
      height: 100%;
    }
    
    #wrap {
      position: relative;
      width: 360px;
      /* max-height: 77.93vh; */
      height: 77.93vh;
      margin-top: calc(60px + 6.9477vh);
      overflow-y: scroll;
      border-radius: 8px;
      -ms-overflow-style: none; /* 인터넷 익스플로러 */
      scrollbar-width: none; /* 파이어폭스 */
      border: 1px solid #ddd;
      
    }

    #wrap::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
    }
  }

  
  
`

export default GlobalStyle
