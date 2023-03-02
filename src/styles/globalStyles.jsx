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

  table {
    border-collapse: collapse;
    border-spacing: 0;
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
