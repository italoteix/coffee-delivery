import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import expressoImg from '../../../../assets/coffes/expresso.png'

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

export function Card() {
  return (
    <Container>
      <Paper>
        <Header>
          <img src={expressoImg} alt="" />
          <span>TRADICIONAL</span>
        </Header>

        <Body>
          <h6>Expresso Tradicional</h6>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </Body>

        <Footer>
          <Price>
            R$ <span>9,90</span>
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
