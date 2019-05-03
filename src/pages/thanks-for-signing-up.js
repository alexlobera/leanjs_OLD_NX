import React from 'react'

import Layout from '../components/layout'
import { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import Header from '../components/layout/Header'
import Link from '../components/navigation/Link'
import { Card } from '../components/elements'

const ThanksForSignUp = () => (
  <Layout>
    <Header
      titleLines={['Thanks - your free resources are on their way!']}
      subtitle="Every week for the next 5 weeks, you'll get a new email with juicy React goodness... You don't have to do a thing."
      bgImg="training-event"
    />
    <TopSection marginTop="-250">
      <Grid>
        <Card border="shadow">
          <Row>
            <Col md={5} mdOffset={1}>
              <H2>What happens now?</H2>
              <P>
                Now that you're part of the club, you should be recieving your
                first learning resource very soon. Just keep and eye on your
                email inbox.
              </P>
              <P>
                If you've made a mistake and you don't want to recieve our
                emails (#sadface), just visit our{' '}
                <Link to="/unsubscribe/">unsubscribe</Link> page.
              </P>
              <P>
                If you have any questions, please don’t hesitate in contacting
                us. You can email us:{' '}
                <Link to="mailto:hello@reactjs.academy">
                  hello@reactjs.academy
                </Link>{' '}
                or you can shout us on{' '}
                <Link to="/community/">social media.</Link>
              </P>
            </Col>
            <Col md={4} mdOffset={1} />
          </Row>
        </Card>
      </Grid>
    </TopSection>
  </Layout>
)

export default ThanksForSignUp
