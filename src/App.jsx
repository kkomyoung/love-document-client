import React from 'react'
import GlobalStyle from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import Header from './components/header/header'
import { RoundButton } from './components/buttons/buttons'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header></Header>
      <RoundButton large text="버튼"></RoundButton>
      <RoundButton text="버튼"></RoundButton>
      <RoundButton color="white" text="버튼"></RoundButton>
      <RoundButton color="pink" text="버튼" icon="arrow"></RoundButton>
    </ThemeProvider>
  )
}

export default App
