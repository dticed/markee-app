import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { App } from 'app'
import { theme } from 'resources/theme'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  * {
    /* box-sizing: border-box; */
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
  }
`

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export { Root }
