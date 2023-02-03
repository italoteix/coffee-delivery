import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;

  padding-block: 2rem;
`

export const LocationDisplay = styled.span`
  background-color: ${(props) => props.theme.colors.secondary.light};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.5rem;
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.secondary.dark};
`

export const CheckoutLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  margin-left: 0.75rem;

  background-color: ${(props) => props.theme.colors.main.light};

  position: relative;
`

export const CartCounter = styled.span`
  position: absolute;
  top: -25%;
  right: -25%;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme.colors.main.dark};

  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 700;
`
