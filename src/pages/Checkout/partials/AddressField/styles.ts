import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.gray[400]};
  padding: 0.75rem;

  background-color: ${(props) => props.theme.colors.gray[300]};

  &:focus-within {
    border-color: ${(props) => props.theme.colors.main.dark};
  }

  span {
    margin-left: 0.25rem;

    font-size: ${(props) => props.theme.fontSizes.xs};
    line-height: 1;
    color: ${(props) => props.theme.colors.gray[600]};
  }
`

export const Input = styled.input`
  flex: 1;

  max-width: 100%;

  border: none;
  padding: 0;
  outline: none;

  background-color: inherit;

  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: 1;
  color: ${(props) => props.theme.colors.gray[700]};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[600]};
  }
`
