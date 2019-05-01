import React from 'react'
import styled from 'styled-components'
import { LinkButton } from '../buttons'
import { H3, P } from '../text'
import { Card } from '../elements'
import Price from './Price'
import formatPrice from '../utils/currency'

const InstallmentsContainer = styled.div`
  margin: 12px 0;
`

const InstallmentsCard = ({ currency, price, vatRate = 1.2 }) =>
  price ? (
    <Card small bg="dark" top={20}>
      <H3>
        <strong>Pay by Installments</strong>
      </H3>
      <P>
        Pay in 3 installments - the first being 50% of the total cost and the
        others follow over 3 months. Contact us for more info.
      </P>
      <InstallmentsContainer>
        <Price>{formatPrice(currency, price, vatRate)}</Price>
        <LinkButton
          variant="secondary"
          to="#contact-us"
          style={{ float: 'right' }}
        >
          Contact us
        </LinkButton>
      </InstallmentsContainer>
    </Card>
  ) : null

export default InstallmentsCard
