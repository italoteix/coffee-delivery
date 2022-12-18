import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  borderRadius: '6px',

  colors: {
    main: {
      base: '#DBAC2C',
      light: '#F1E9C9',
      dark: '#C47F17',
    },
    secondary: {
      base: '#8047F8',
      light: '#EBE5F9',
      dark: '#4B2995',
    },
    gray: {
      100: '#FAFAFA',
      200: '#F3F2F2',
      300: '#EDEDED',
      400: '#E6E5E5',
      500: '#D7D5D5',
      600: '#8D8686',
      700: '#574F4D',
      800: '#403937',
      900: '#272221',
    },
    white: '#FFFFFF',
  },

  fontSizes: {
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '3rem',
  },

  fontFamilies: {
    baloo: 'Baloo 2, sans-serif',
    roboto: 'Roboto, sans-serif',
  },

  lineHeights: {
    base: '130%',
    lg: '160%',
  },
}

export { theme }
