import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import Header from '../components/layout/Header'
import Link from '../components/navigation/Link'
import { Card } from '../components/elements'
import trackUserBehaviour, {
  CHECKOUT_PAYMENT_SUCCESS,
} from '../components/utils/trackUserBehaviour'

class PaymentConfirmation extends React.Component {
  componentDidMount() {
    const { makePayment, trainingInstanceId } = this.props.location.state || {}
    const { trackUserBehaviour } = this.props
    const { id, metadata } = makePayment || {}
    if (id) {
      window.dataLayer = window.dataLayer || []

      function gtag() {
        dataLayer.push(arguments)
      }

      gtag('js', new Date())
      gtag('config', 'AW-877316317')

      let value = makePayment.amount * 0.01
      let currency = makePayment.currency.toUpperCase()

      //conversion
      gtag('event', 'conversion', {
        send_to: 'AW-877316317/KPHjCIHC7ocBEN2Rq6ID',
        value,
        currency,
        transaction_id: `${trainingInstanceId}_${id}`,
      })

      trackUserBehaviour({
        event: CHECKOUT_PAYMENT_SUCCESS,
        payload: {
          makePayment,
          trainingInstanceId,
        },
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          titleLines={['Thanks!']}
          subtitle="We can’t wait to help you on your React journey."
          bgImg="training-event"
        />
        <TopSection marginTop="-250">
          <Grid>
            <Card border="shadow">
              <Row>
                <Col md={5} mdOffset={1}>
                  <H2>What happens now?</H2>
                  <P>
                    You should shortly recieve an order confirmation and receipt
                    and further details about the training you’ve signed up to.
                    Just check your inbox soon (be sure to check your spam
                    folder if you can’t see it).
                  </P>
                  <P>
                    If you have any questions, please don’t hesitate in
                    contacting us. You can email us:{' '}
                    <Link to="mailto:hello@reactjs.academy">
                      hello@reactjs.academy
                    </Link>{' '}
                    or you can contact us on social media.
                  </P>
                </Col>
                <Col md={4} mdOffset={1} />
              </Row>
            </Card>
          </Grid>
        </TopSection>
      </React.Fragment>
    )
  }
}

PaymentConfirmation.defaultProps = {
  trackUserBehaviour,
}

export default PaymentConfirmation
