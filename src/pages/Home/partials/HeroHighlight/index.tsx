import { ReactNode } from 'react'

import { Container, ContainerProps } from './styles'

interface HeroHighlightProps extends ContainerProps {
  icon: ReactNode
  children: ReactNode
}

export function HeroHighlight({
  circleColor,
  icon,
  children,
}: HeroHighlightProps) {
  return (
    <Container circleColor={circleColor}>
      <span>{icon}</span>
      <p>{children}</p>
    </Container>
  )
}
