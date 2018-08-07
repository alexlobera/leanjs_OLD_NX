import React from 'react'
import { H3, P } from '../text'
import { Ribbon, Card } from '../elements'
import Link from '../navigation/Link'
import BuyQuantityButton from '../old_checkout/containers/PurchaseQuantityContainer'

const CheckoutCard = ({
  trainingInstanceId,
  price,
  title,
  discountPercentage,
  priceGoesUpOn,
  ticketName,
}) => (
  <Card small style={{ position: 'relative' }}>
    {discountPercentage ? <Ribbon>Save {discountPercentage}%</Ribbon> : ''}
    <H3>
      <strong>{ticketName}</strong>
    </H3>
    {priceGoesUpOn ? <P>{priceGoesUpOn}</P> : ''}
    <BuyQuantityButton
      course={{
        price,
        trainingInstanceId,
        title,
      }}
    />
    <P sm>
      By purchasing a training, you agree to our{' '}
      <Link target="_blank" to="terms-of-service">
        Terms of Service
      </Link>{' '}
      &{' '}
      <Link target="_blank" to="code-of-conduct">
        Code of conduct
      </Link>
    </P>
  </Card>
)

export default CheckoutCard
