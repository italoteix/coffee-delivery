import { Minus, Plus, Trash } from 'phosphor-react'

import img from '../../../../assets/coffees/expresso.png'

import {
  AmountSelector,
  CardBody,
  Container,
  DeleteButton,
  Price,
} from './styles'

export function Card() {
  return (
    <Container>
      <img src={img} alt="" />

      <CardBody>
        <p>Expresso Tradicional</p>

        <div>
          <AmountSelector>
            <button title="Diminuir quantidade" type="button">
              <Minus />
            </button>
            <span>1</span>
            <button title="Aumentar quantidade" type="button">
              <Plus />
            </button>
          </AmountSelector>

          <DeleteButton type="button">
            <Trash />
            remover
          </DeleteButton>
        </div>
      </CardBody>

      <Price>R$ 9,90</Price>
    </Container>
  )
}
