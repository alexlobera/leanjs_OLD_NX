import React from 'react'
import { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import Header from '../components/layout/Header'
import Link from '../components/navigation/Link'
import { Card } from '../components/elements'

const ThanksForSignUpSessions = () => (
  <React.Fragment>
    <Header
      titleLines={['Thanks - your signed up for 1-day session info!']}
      subtitle="If you also also asked for free resources, every week for the next 5 weeks, you'll get a new email with juicy React goodness..."
      bgImg="training-event"
    />
    <TopSection marginTop="-250">
      <Grid>
        <Card border="shadow">
          <Row>
            <Col md={5} mdOffset={1}>
              <H2>What happens now?</H2>
              <P>
                As soon as we have a date for the 1-day trainings you are
                intersted in, you'll recieve an email.
              </P>
              <P>
                If you also asked for learning resources, you should be
                recieving your first learning resource very soon. Just keep and
                eye on your email inbox.
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
  </React.Fragment>
)

export default ThanksForSignUpSessions
