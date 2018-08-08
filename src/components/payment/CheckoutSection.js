import React from 'react'
import { H2Ref, H3, P } from '../text'
import { Ribbon, Card } from '../elements'
import Link from '../navigation/Link'
import BuyQuantityButton from '../old_checkout/containers/PurchaseQuantityContainer'

const CheckoutSection = ({
  trainingInstanceId,
  price,
  title,
  discountPercentage,
  priceGoesUpOn,
  ticketName,
}) => (
  <React.Fragment>
    <H2Ref>
      Prices{' '}
      <Link to="#pricing" name="pricing">
        #
      </Link>
    </H2Ref>
    <P>
      Please be aware that the tickets cover the cost of the training, it does
      not include the cost of the flights, accomodation, food.
    </P>
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
  </React.Fragment>
)

export default CheckoutSection
