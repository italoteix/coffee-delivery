import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'

import logoImg from '../../assets/logo.svg'

import { CheckoutLink, LocationDisplay, NavBar } from './styles'

export function Header() {
  const theme = useTheme()

  return (
    <header>
      <NavBar>
        <NavLink to="/">
          <img src={logoImg} alt="copo de café com um foguete decolando" />
        </NavLink>
        <LocationDisplay>
          <MapPin weight="fill" size={22} color={theme.colors.secondary.base} />
          Porto Alegre, RS
        </LocationDisplay>
        <CheckoutLink to="/checkout">
          <ShoppingCart
            weight="fill"
            size={22}
            color={theme.colors.main.dark}
          />
        </CheckoutLink>
      </NavBar>
    </header>
  )
}
