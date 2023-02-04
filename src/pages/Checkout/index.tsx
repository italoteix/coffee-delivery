/* eslint-disable no-unused-vars */
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Fragment, useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'

import { CartContext } from '../../contexts/CartContext'
import { formatMonetaryAmount } from '../../utils/formatting'
import { Card } from './partials/Card'

import {
  AddressFieldsContainer,
  CardSeparator,
  CityField,
  ComplementField,
  Container,
  NeighborhoodField,
  NumberField,
  Paper,
  PaperHeader,
  PaymentMethodRadio,
  PaymentMethodRadioContainer,
  PostCodeField,
  SectionTitle,
  StateField,
  StreetField,
  SubmitButton,
  Summary,
} from './styles'

const DELIVERY_FEE = 3.5

export enum PaymentMethods {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  CASH = 'CASH',
}

export interface Order {
  zipCode: string
  street: string
  houseNumber: string
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: PaymentMethods
}

export function Checkout() {
  const { colors } = useTheme()
  const navigate = useNavigate()
  const { cart, addProduct, deleteProduct, removeProduct, resetCart } =
    useContext(CartContext)

  const { register, handleSubmit } = useForm<Order>()

  const productsTotal = Object.values(cart.products).reduce(
    (total, product) => {
      total = total + product.amount * product.price
      return total
    },
    0,
  )

  const orderTotal = productsTotal + DELIVERY_FEE

  const onSubmit: SubmitHandler<Order> = (data) => {
    localStorage.setItem(
      '@@coffee-delivery/checkout/form',
      JSON.stringify(data),
    )
    resetCart()
    navigate('/success')
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <section>
        <SectionTitle>Complete seu pedido</SectionTitle>
        <Paper>
          <PaperHeader>
            <MapPinLine color={colors.main.dark} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </PaperHeader>

          <AddressFieldsContainer>
            <PostCodeField placeholder="CEP" {...register('zipCode')} />
            <StreetField placeholder="Rua" {...register('street')} />
            <NumberField placeholder="Número" {...register('houseNumber')} />
            <ComplementField
              placeholder="Complemento"
              optional
              {...register('complement')}
            />
            <NeighborhoodField
              placeholder="Bairro"
              {...register('houseNumber')}
            />
            <CityField placeholder="Cidade" {...register('city')} />
            <StateField placeholder="UF" {...register('state')} />
          </AddressFieldsContainer>
        </Paper>

        <Paper>
          <PaperHeader>
            <CurrencyDollar color={colors.secondary.base} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaperHeader>

          <PaymentMethodRadioContainer>
            <PaymentMethodRadio>
              <input
                type="radio"
                id=""
                value={PaymentMethods.CREDIT_CARD}
                {...register('paymentMethod')}
              />
              <label htmlFor="">
                <CreditCard />
                Cartão de crédito
              </label>
            </PaymentMethodRadio>
            <PaymentMethodRadio>
              <input
                type="radio"
                id=""
                value={PaymentMethods.DEBIT_CARD}
                {...register('paymentMethod')}
              />
              <label htmlFor="">
                <Bank />
                cartão de débito
              </label>
            </PaymentMethodRadio>
            <PaymentMethodRadio>
              <input
                type="radio"
                id=""
                value={PaymentMethods.CASH}
                {...register('paymentMethod')}
              />
              <label htmlFor="">
                <Money />
                dinheiro
              </label>
            </PaymentMethodRadio>
          </PaymentMethodRadioContainer>
        </Paper>
      </section>

      <section>
        <SectionTitle>Cafés selecionados</SectionTitle>
        <Paper>
          {Object.values(cart.products).map((product) => (
            <Fragment key={product.id}>
              <Card
                product={product}
                increaseProduct={() => addProduct(product)}
                decreaseProduct={() => removeProduct(product.id)}
                removeProduct={() => deleteProduct(product.id)}
              />
              <CardSeparator />
            </Fragment>
          ))}

          <Summary>
            <li>
              <span>Total de itens</span>
              <span>R$ {formatMonetaryAmount(productsTotal)}</span>
            </li>
            <li>
              <span>Entrega</span>
              <span>R$ {formatMonetaryAmount(DELIVERY_FEE)}</span>
            </li>
            <li>
              <span>Total</span>
              <span>R$ {formatMonetaryAmount(orderTotal)}</span>
            </li>
          </Summary>

          <SubmitButton type="submit">Confirmar pedido</SubmitButton>
        </Paper>
      </section>
    </Container>
  )
}
