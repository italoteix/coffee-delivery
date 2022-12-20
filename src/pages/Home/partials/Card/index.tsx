import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import { Coffee } from '../../../../model/coffee'

import {
  AmountSelector,
  Body,
  CartButton,
  Container,
  Footer,
  Header,
  Paper,
  Price,
} from './styles'

interface CardProps {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  const price = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(coffee.price)

  return (
    <Container>
      <Paper>
        <Header>
          <img src={coffee.srcImg} alt="" />
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Header>

        <Body>
          <h6>{coffee.title}</h6>
          <p>{coffee.description}</p>
        </Body>

        <Footer>
          <Price>
            R$ <span>{price}</span>
          </Price>

          <AmountSelector>
            <button title="Diminuir quantidade">
              <Minus />
            </button>
            <span>1</span>
            <button title="Aumentar quantidade">
              <Plus />
            </button>
          </AmountSelector>

          <CartButton title="Adicionar ao carrinho">
            <ShoppingCart weight="fill" />
          </CartButton>
        </Footer>
      </Paper>
    </Container>
  )
}
