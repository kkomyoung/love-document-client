import React, { useEffect } from 'react'
import GlobalStyle from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Router from './Router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'
import { init as firebaseInit } from './apis/firebase'

const queryClient = new QueryClient()
firebaseInit()

function App() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <p className="pageHead">두근-두근 연애서류합</p>
          <div id="wrap">
            <Router />
          </div>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
