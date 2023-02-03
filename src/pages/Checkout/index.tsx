import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Fragment, useContext } from 'react'
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

export function Checkout() {
  const { colors } = useTheme()
  const { cart, addProduct, deleteProduct, removeProduct } =
    useContext(CartContext)

  const productsTotal = Object.values(cart.products).reduce(
    (total, product) => {
      total = total + product.amount * product.price
      return total
    },
    0,
  )

  const orderTotal = productsTotal + DELIVERY_FEE

  return (
    <Container>
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
            <PostCodeField placeholder="CEP" />
            <StreetField placeholder="Rua" />
            <NumberField placeholder="Número" />
            <ComplementField placeholder="Complemento" optional />
            <NeighborhoodField placeholder="Bairro" />
            <CityField placeholder="Cidade" />
            <StateField placeholder="UF" />
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
              <input type="radio" name="paymentMethod" id="" />
              <label htmlFor="">
                <CreditCard />
                Cartão de crédito
              </label>
            </PaymentMethodRadio>
            <PaymentMethodRadio>
              <input type="radio" name="paymentMethod" id="" />
              <label htmlFor="">
                <Bank />
                cartão de débito
              </label>
            </PaymentMethodRadio>
            <PaymentMethodRadio>
              <input type="radio" name="paymentMethod" id="" />
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
