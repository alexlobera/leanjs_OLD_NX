import React from 'react'
import { H2Ref, H3, P } from '../text'
import { Ribbon, Card } from '../elements'
import Link from '../navigation/Link'
import Checkout from '../checkout/'

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
        Please be aware that the ticket only covers the cost of the training, it
        does not include travel expenses.
      </P>
      <Card small style={{ position: 'relative' }}>
        <H3>
          <strong>{ticketName}</strong>
        </H3>
        {discountPercentage ? <Ribbon>Save {discountPercentage}%</Ribbon> : ''}
        {priceGoesUpOn ? <P>{priceGoesUpOn}</P> : ''}
        <Checkout
          course={{
            price: 2000,
            discountPrice: 1500,
            trainingInstanceId,
            title,
          }}
        />
        {/* <P sm>
          By purchasing a training, you agree to our{' '}
          <Link target="_blank" to="terms-of-service">
            Terms of Service
        </Link>{' '}
          &{' '}
          <Link target="_blank" to="code-of-conduct">
            Code of conduct
        </Link>
        </P> */}
      </Card>
    </React.Fragment>
  )

export default CheckoutSection
