import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}


  * {
    word-break: keep-all;
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
    font-weight: 500;
    line-height: 1;

  }

  #wrap {
    max-width: 480px; //최소 360px
    width: 100%;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

  a { 
    text-decoration: none;
    color:inherit;
  }

  ol, ul, li {
    list-style: none;
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

  
  
`

export default GlobalStyle
