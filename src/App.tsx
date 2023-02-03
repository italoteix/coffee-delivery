import { ThemeProvider } from 'styled-components'

import { CartProvider } from './contexts/CartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/Global'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Router />
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
