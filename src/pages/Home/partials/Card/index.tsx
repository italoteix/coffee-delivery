import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../../../contexts/CartContext'
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
  const { cart, addProduct, removeProduct } = useContext(CartContext)

  const amount = cart.products[coffee.id]?.amount || 0

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
            <button
              title="Diminuir quantidade"
              onClick={() => removeProduct(coffee.id)}
            >
              <Minus />
            </button>
            <span>{amount}</span>
            <button
              title="Aumentar quantidade"
              onClick={() => addProduct(coffee)}
            >
              <Plus />
            </button>
          </AmountSelector>

          <Link to="/checkout">
            <CartButton title="Adicionar ao carrinho">
              <ShoppingCart weight="fill" />
            </CartButton>
          </Link>
        </Footer>
      </Paper>
    </Container>
  )
}
