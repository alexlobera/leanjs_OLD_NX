import React from 'react';

import { BOOTCAMP } from '../../images/imageNames';
import { TopSection } from '../components/layout/Section';
import { Col, Row } from '../components/layout/Grid';
import { H2, P } from '../components/text';
import { RootHeader as Header } from '../components/layout/Header';
import Link from '../components/navigation/Link';
import { Segment } from '../components/elements';

const ThanksForSignUp = () => (
  <React.Fragment>
    <Header
      titleLines={['Thanks, you’re now subscribed!']}
      subtitle="We’ll be sending you only the most relevant news & next training updates. No spam ;)"
      bgImageName={BOOTCAMP}
      fullHeight={false}
    />
    <TopSection>
      <Segment>
        <Row>
          <Col md={5} mdOffset={1}>
            <H2>What happens now?</H2>
            <P>
              You don’t have to do a thing! You’re now part of the club, just
              keep an eye on your email inbox not to miss our next newsletter.
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
);

export default ThanksForSignUp;
