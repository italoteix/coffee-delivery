import styled from 'styled-components'

export const Hero = styled.section`
  display: flex;
  gap: 3.5rem;

  padding-block: 5.75rem;

  & > div:first-child {
    flex: 5;
  }

  & > div:last-child {
    flex: 4;
  }
`

export const HeroTitle = styled.h1`
  font-family: ${(props) => props.theme.fontFamilies.baloo};
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSizes['4xl']};
  color: ${(props) => props.theme.colors.gray[900]};

  margin-bottom: 1rem;
`

export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.gray[800]};

  margin-bottom: 4.125rem;
`

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;
`

export const GridTitle = styled.h3`
  font-family: ${(props) => props.theme.fontFamilies.baloo};
  font-size: ${(props) => props.theme.fontSizes['3xl']};
  font-weight: 800;
  color: ${(props) => props.theme.colors.gray[800]};

  margin-bottom: 2rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem 2rem;
`
