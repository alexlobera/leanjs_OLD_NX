import React from 'react'
import { H2Ref, H3, P } from '../text'
import { Ribbon, Card } from '../elements'
import Link from '../navigation/Link'
import Checkout from '../checkout/'
import formatCurrencyPrice from '../utils/currency'

const PaymentSection = ({
  trainingInstanceId,
  price,
  discountPrice,
  currency = 'gbp',
  title,
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
        {/* {discountPrice ? <Ribbon>Save {100 - Math.round(discountPrice * 100 / price)} %</Ribbon> : ''} */}
        {discountPrice ? <Ribbon>Save {formatCurrencyPrice(currency, (price - discountPrice) * 1.2)}</Ribbon> : ''}
        {priceGoesUpOn ? <P>{priceGoesUpOn}</P> : ''}
        <Checkout
          price={price}
          discountPrice={discountPrice}
          trainingInstanceId={trainingInstanceId}
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

export default PaymentSection
