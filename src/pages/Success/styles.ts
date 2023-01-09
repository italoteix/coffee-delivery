import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  section:last-child {
    align-self: flex-end;
  }
`

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamilies.baloo};
  font-size: ${(props) => props.theme.fontSizes['3xl']};
  font-weight: 800;
  color: ${(props) => props.theme.colors.main.dark};

  margin-bottom: 0.25rem;
`

export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xl};

  margin-bottom: 2.5rem;
`

export const InfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  margin: 0;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.colors.main.base},
        ${(props) => props.theme.colors.secondary.base}
      )
      border-box;

  list-style: none;
`

interface InfoItemProps {
  iconWrapperColor: string
}

export const InfoItem = styled.li<InfoItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;

    background-color: ${(props) => props.iconWrapperColor};

    color: ${(props) => props.theme.colors.white};
  }

  strong {
    font-weight: 700;
  }
`
