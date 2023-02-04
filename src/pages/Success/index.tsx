import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import successImg from '../../assets/success.svg'
import { Order, PaymentMethods } from '../Checkout'

import { Grid, InfoContainer, InfoItem, Subtitle, Title } from './styles'

function getPaymentMethodLabel(method: PaymentMethods) {
  switch (method) {
    case PaymentMethods.CASH:
      return 'Dinheiro'
    case PaymentMethods.CREDIT_CARD:
      return 'Cartão de Crédito'
    case PaymentMethods.DEBIT_CARD:
      return 'Cartão de Débito'
    default:
      return ''
  }
}

export function Success() {
  const { colors } = useTheme()

  const storedOrderData = localStorage.getItem(
    '@@coffee-delivery/checkout/form',
  )

  if (!storedOrderData) return null

  const orderData: Order = JSON.parse(storedOrderData)

  return (
    <Grid>
      <section>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>

        <div>
          <InfoContainer>
            <InfoItem iconWrapperColor={colors.secondary.base}>
              <span>
                <MapPin weight="fill" />
              </span>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {orderData.street}, {orderData.houseNumber}
                  </strong>
                </p>
                <p>
                  {orderData.neighborhood} - {orderData.city}, {orderData.state}
                </p>
              </div>
            </InfoItem>

            <InfoItem iconWrapperColor={colors.main.base}>
              <span>
                <Timer weight="fill" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </InfoItem>

            <InfoItem iconWrapperColor={colors.main.dark}>
              <span>
                <CurrencyDollar weight="fill" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>
                    {getPaymentMethodLabel(orderData.paymentMethod)}
                  </strong>
                </p>
              </div>
            </InfoItem>
          </InfoContainer>
        </div>
      </section>

      <section>
        <img src={successImg} alt="A man on a scooter doing a delivery" />
      </section>
    </Grid>
  )
}
