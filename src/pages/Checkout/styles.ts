import styled from 'styled-components'

import { AddressField } from './partials/AddressField'

export const Container = styled.form`
  display: flex;
  gap: 2rem;

  margin-top: 2.5rem;

  section {
    flex: 3;
  }

  section + section {
    flex: 2;
  }
`

export const SectionTitle = styled.h2`
  font-family: ${(props) => props.theme.fontFamilies.baloo};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[800]};

  margin-bottom: 1rem;
`

export const Paper = styled.div`
  padding: 2.5rem;
  border-radius: ${(props) => props.theme.borderRadius};

  background-color: ${(props) => props.theme.colors.gray[200]};

  & + & {
    margin-top: 0.75rem;
  }
`

export const PaperHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  svg {
    font-size: 1.375rem;
  }

  div {
    flex: 1;

    display: flex;
    flex-direction: column;
  }

  h3 {
    font-weight: normal;
    color: ${(props) => props.theme.colors.gray[800]};

    margin-bottom: 0.125rem;
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`

export const PaymentMethodRadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`

export const PaymentMethodRadio = styled.div`
  position: relative;

  flex: 1;

  input[type='radio'] {
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: transparent;
    /* Not removed via appearance */
    margin: 0;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    cursor: pointer;

    :hover + label {
      background-color: ${(props) => props.theme.colors.gray[500]};
    }

    :checked + label {
      background-color: ${(props) => props.theme.colors.secondary.light};
      border: 1px solid ${(props) => props.theme.colors.secondary.base};
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.gray[400]};

    background-color: ${(props) => props.theme.colors.gray[400]};

    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSizes.xs};
    line-height: ${(props) => props.theme.lineHeights.lg};

    transition: all 0.1s;
  }

  svg {
    font-size: ${(props) => props.theme.fontSizes.base};
    color: ${(props) => props.theme.colors.secondary.base};
  }
`

export const AddressFieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr) 3.75rem;
  grid-template-rows: repeat(4, 2.625rem);
  gap: 1rem 0.75rem;
`

export const PostCodeField = styled(AddressField)`
  grid-column: 1 / span 2;
`

export const StreetField = styled(AddressField)`
  grid-column: 1 / span 6;
`
export const NumberField = styled(AddressField)`
  grid-column: 1 / span 2;
`

export const ComplementField = styled(AddressField)`
  grid-column: 3 / span 4;
`

export const NeighborhoodField = styled(AddressField)`
  grid-column: 1 / span 2;
`

export const CityField = styled(AddressField)`
  grid-column: 3 / span 3;
`

export const StateField = styled(AddressField)`
  grid-column: 6;
`

export const CardSeparator = styled.hr`
  margin-block: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray[400]};
`

export const Summary = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;

    span:first-child {
      font-size: ${(props) => props.theme.fontSizes.sm};
    }

    + li {
      margin-top: 0.75rem;
    }
  }

  li:last-child span {
    font-size: ${(props) => props.theme.fontSizes.xl};
    font-weight: 700;
  }
`

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.main.base};

  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  margin-top: 1.5rem;
  padding: 0.75rem;
  width: 100%;

  text-transform: uppercase;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeights.lg};
  color: ${(props) => props.theme.colors.white};

  cursor: pointer;

  transition: background-color 0.1s;

  &:hover {
    background-color: ${(props) => props.theme.colors.main.dark};
  }
`
