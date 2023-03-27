import React from 'react'
import GlobalStyle from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Router from './Router'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <p className="pageHead">두근-두근 연애서류합</p>
        <div id="wrap">
          <Router />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
