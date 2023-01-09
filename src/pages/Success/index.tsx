import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import successImg from '../../assets/success.svg'

import { Grid, InfoContainer, InfoItem, Subtitle, Title } from './styles'

export function Success() {
  const { colors } = useTheme()
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
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
                  <strong>Cartão de Crédito</strong>
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
