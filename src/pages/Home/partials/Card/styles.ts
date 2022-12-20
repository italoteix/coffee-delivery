import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 2.5rem;
  width: 16rem;
`

export const Paper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.25rem;
  padding-top: 0;
  border-radius: 6px 36px;

  background-color: ${(props) => props.theme.colors.gray[200]};
`

export const Header = styled.header`
  text-align: center;
  margin-top: -2.5rem;
  margin-bottom: 1rem;

  img {
    margin: 0 auto 0.75rem;
  }

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 12px;

    background-color: ${(props) => props.theme.colors.main.light};

    color: ${(props) => props.theme.colors.main.dark};
    font-size: ${(props) => props.theme.fontSizes['2xs']};
    font-weight: 700;
    text-transform: uppercase;

    + span {
      margin-left: 0.25rem;
    }
  }
`

export const Body = styled.div`
  text-align: center;

  margin-bottom: 2rem;

  h6 {
    font-family: ${(props) => props.theme.fontFamilies.baloo};
    font-size: ${(props) => props.theme.fontSizes.xl};
    font-weight: 700;
    color: ${(props) => props.theme.colors.gray[800]};

    margin-bottom: 0.5rem;
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.gray[600]};
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
`

export const Price = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};

  span {
    font-family: ${(props) => props.theme.fontFamilies.baloo};
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    font-weight: 700;
  }
`

export const AmountSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme.colors.gray[400]};

  padding: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  margin-right: 0.5rem;
  margin-left: auto;

  button {
    border: none;
    padding: 0;

    background-color: inherit;

    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.secondary.base};

    transition: background-color 0.1s;

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.secondary.dark};
    }
  }

  span {
    color: ${(props) => props.theme.colors.gray[900]};
    text-align: center;

    min-width: 1.25rem;
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.secondary.dark};
  color: ${(props) => props.theme.colors.white};

  padding: 0.5rem;
  border: none;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: ${(props) => props.theme.borderRadius};

  transition: background-color 0.1s;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.base};
  }
`
