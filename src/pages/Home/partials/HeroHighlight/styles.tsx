import styled from 'styled-components'

export interface ContainerProps {
  readonly circleColor: 'mainBase' | 'mainDark' | 'secondary' | 'gray'
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  span {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${(props) => {
      switch (props.circleColor) {
        case 'gray':
          return props.theme.colors.gray[700]
        case 'mainBase':
          return props.theme.colors.main.base
        case 'mainDark':
          return props.theme.colors.main.dark
        case 'secondary':
        default:
          return props.theme.colors.secondary.base
      }
    }};

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.75rem;
  }

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`
