import React from 'react'
import { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2 } from '../components/text'
import Header from '../components/layout/Header'
import { Card } from '../components/elements'

const Unsubscribe = () => (
  <React.Fragment>
    <Header
      bgImg="about-us"
      titleLines={['Unsubscribe from email communications']}
      subtitle="You are now unsubscribed from recieving further emails, for any further support please contact us here: unsubscribe@reactjs.academy"
    />
    <TopSection>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col md={10} mdOffset={1}>
              <H2>
                We are sorry to see you go! If you'd like to re-subscribe to our
                maining list at any time you can do so by re-entering your email
                address or contact us directly: hello@reactjs.academy
              </H2>
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
  </React.Fragment>
)

export default Unsubscribe
