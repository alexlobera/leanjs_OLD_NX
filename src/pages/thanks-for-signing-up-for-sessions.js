import React from 'react'

import { BOOTCAMP } from '../../images/imageNames'
import { TopSection } from '../components/layout/Section'
import { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import { RootHeader as Header } from '../components/layout/Header'
import Link from '../components/navigation/Link'
import { Segment } from '../components/elements'

const ThanksForSignUpSessions = () => (
  <React.Fragment>
    <Header
      titleLines={['Thanks - your signed up for 1-day session info!']}
      subtitle="If you also also asked for free learning resources, every week for the next 5 weeks, you'll get a new email with juicy React goodness..."
      bgImageName={BOOTCAMP}
      fullHeight={false}
    />
    <TopSection>
      <Segment>
        <Row>
          <Col md={5} mdOffset={1}>
            <H2>What happens now?</H2>
            <P>
              As soon as we have a date for the 1-day trainings you are
              intersted in, you'll recieve an email.
            </P>
            <P>
              If you also asked for learning resources, you should be receiving
              your first learning resource very soon. Just keep and eye on your
              email inbox.
            </P>
            <P>
              If you've made a mistake and you don't want to recieve our emails
              (#sadface), just visit our{' '}
              <Link to="/unsubscribe/">unsubscribe</Link> page.
            </P>
            <P>
              If you have any questions, please don’t hesitate in contacting us.
              You can email us:{' '}
              <Link to="mailto:hello@reactgraphql.academy">
                hello@reactgraphql.academy
              </Link>{' '}
              or you can shout us on <Link to="/community/">social media.</Link>
            </P>
          </Col>
          <Col md={4} mdOffset={1} />
        </Row>
      </Segment>
    </TopSection>
  </React.Fragment>
)

export default ThanksForSignUpSessions
