import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    word-break: keep-all;
  }

  #wrap {
    max-width: 480px; //최소 360px
    width: 100%;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle
