import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      main: {
        base: string
        light: string
        dark: string
      }
      secondary: {
        base: string
        light: string
        dark: string
      }
      gray: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      white: string
    }

    fontSizes: {
      '2xs': string
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
    }

    fontFamilies: {
      baloo: string
      roboto: string
    }

    lineHeights: {
      base: number
      lg: number
    }
  }
}
