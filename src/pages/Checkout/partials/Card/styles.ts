import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  background-color: ${(props) => props.theme.colors.gray[200]};

  img {
    margin-right: 1.25rem;
    width: 4rem;
    height: 4rem;
  }
`

export const CardBody = styled.div`
  margin-right: auto;

  p {
    color: ${(props) => props.theme.colors.gray[800]};

    margin-bottom: 0.5rem;
  }

  & > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const AmountSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme.colors.gray[400]};

  padding: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius};

  button {
    border: none;
    padding: 0;

    background-color: inherit;

    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.secondary.base};

    transition: color 0.1s;

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

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.5rem;

  background-color: ${(props) => props.theme.colors.gray[400]};

  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: ${(props) => props.theme.lineHeights.lg};
  color: ${(props) => props.theme.colors.gray[800]};

  transition: background-color 0.1s;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[500]};
  }

  svg {
    color: ${(props) => props.theme.colors.secondary.base};
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`

export const Price = styled.span`
  font-weight: 700;
`
