import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import { GlobalStyle } from './styles/Global'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
