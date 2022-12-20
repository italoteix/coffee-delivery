import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { HeroHighlight } from './partials/HeroHighlight'

import coffeesData from '../../data/coffees'

import heroImg from '../../assets/hero.png'

import {
  Grid,
  GridTitle,
  Hero,
  HeroTitle,
  HighlightsGrid,
  Subtitle,
} from './styles'
import { Card } from './partials/Card'

export function Home() {
  return (
    <main>
      <Hero>
        <div>
          <HeroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </HeroTitle>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
          <HighlightsGrid>
            <HeroHighlight
              circleColor="mainDark"
              icon={<ShoppingCart weight="fill" />}
            >
              Compra simples e segura
            </HeroHighlight>
            <HeroHighlight circleColor="gray" icon={<Package weight="fill" />}>
              Embalagem mantém o café intacto
            </HeroHighlight>
            <HeroHighlight
              circleColor="mainBase"
              icon={<Timer weight="fill" />}
            >
              Entrega rápida e rastreada
            </HeroHighlight>
            <HeroHighlight
              circleColor="secondary"
              icon={<Coffee weight="fill" />}
            >
              O café chega fresquinho até você
            </HeroHighlight>
          </HighlightsGrid>
        </div>
        <div>
          <img
            src={heroImg}
            alt="Coffe cup with coffe seeds in the background"
          />
        </div>
      </Hero>

      <section>
        <GridTitle>Nossos cafés</GridTitle>
        <Grid>
          {coffeesData.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </Grid>
      </section>
    </main>
  )
}
