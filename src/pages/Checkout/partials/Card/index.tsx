import { Minus, Plus, Trash } from 'phosphor-react'

import { Product } from '../../../../reducers/cart/reducer'
import { formatMonetaryAmount } from '../../../../utils/formatting'

import {
  AmountSelector,
  CardBody,
  Container,
  DeleteButton,
  Price,
} from './styles'

interface CardProps {
  product: Product
  increaseProduct: () => void
  decreaseProduct: () => void
  removeProduct: () => void
}

export function Card({
  product,
  increaseProduct,
  decreaseProduct,
  removeProduct,
}: CardProps) {
  const price = formatMonetaryAmount(product.price)

  return (
    <Container>
      <img src={product.srcImg} alt="" />

      <CardBody>
        <p>{product.title}</p>

        <div>
          <AmountSelector>
            <button
              title="Diminuir quantidade"
              type="button"
              onClick={decreaseProduct}
            >
              <Minus />
            </button>
            <span>{product.amount}</span>
            <button
              title="Aumentar quantidade"
              type="button"
              onClick={increaseProduct}
            >
              <Plus />
            </button>
          </AmountSelector>

          <DeleteButton type="button" onClick={removeProduct}>
            <Trash />
            remover
          </DeleteButton>
        </div>
      </CardBody>

      <Price>R$ {price}</Price>
    </Container>
  )
}
