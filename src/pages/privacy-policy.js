import React from 'react'

import Layout from '../components/layout'
import Section, { TopSection } from '../components/layout/Section'
import { Col, Row } from '../components/layout/Grid'
import { H2, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { RootHeader as Header } from '../components/layout/Header'
import Link from '../components/navigation/Link'
import { Segment } from '../components/elements'

const PrivacyPolicy = () => (
  <React.Fragment>
    <Header titleLines={['Privacy Policy']} />
    <TopSection>
      <Segment>
        <Row>
          <Col md={10} mdOffset={1}>
            <P>
              Here at ReactGraphQL.Academy, we take your privacy seriously and
              are always aiming to ensure your personal information is kept
              safe. We aim to instill trust in everything that we do and give
              you the best quality experience with us.
            </P>
            <P>
              ReactGraphQL.Academy is part of the LeanJS family. LeanJS is a
              digital design, development and training company who produces
              digital products, trainings and associated services based in
              London, UK. For more information, please check out{' '}
              <Link to="https://leanjs.com/" target="_blank">
                https://leanjs.com/
              </Link>{' '}
              and if you have any question, please don’t hesitate in contacting
              us on{' '}
              <Link to="mailto:hello@reactgraphql.academy">
                hello@reactgraphql.academy
              </Link>
              .
            </P>
          </Col>
        </Row>
      </Segment>
    </TopSection>
    <Section>
      <Row>
        <Col md={10} mdOffset={1}>
          <H2>What’s on this page:</H2>
          <Ul>
            <Li>
              <Link to="#1">What information of mine is being collected?</Link>
            </Li>
            <Li>
              <Link to="#2">Who is collecting my information?</Link>
            </Li>
            <Li>
              <Link to="#3">How are my details collected?</Link>
            </Li>
            <Li>
              <Link to="#4">Why is it being collected?</Link>
            </Li>
            <Li>
              <Link to="#5">How is my information used?</Link>
            </Li>
            <Li>
              <Link to="#6">Who will my information be shared with?</Link>
            </Li>
            <Li>
              <Link to="#7">How long are my details kept for?</Link>
            </Li>
            <Li>
              <Link to="#8">
                What will be the effect of May 2018's GDPR regulations to me?
              </Link>
            </Li>
            <Li>
              <Link to="#9">How do I remove my details from your servers?</Link>
            </Li>
            <Li>
              <Link to="#10">
                What are cookies and what do they do with my details?
              </Link>
            </Li>
          </Ul>
          <H2>
            <Link name="1" />
            What information of mine is being collected?
          </H2>
          <P>
            As a base level of information, we might collect your email address
            but only when you give it to us.
          </P>
          <H2>
            <Link name="2" />
            Who is collecting my information?
          </H2>
          <P>
            React GraphQL Academy will be collecting information. As mentioned
            previously, React GraphQL Academy is part of the LeanJS family. Find
            out more about LeanJS at{' '}
            <Link to="https://leanjs.com/" target="_blank">
              LeanJS.com/
            </Link>{' '}
          </P>
          <H2>
            <Link name="3" />
            How are my details collected?
          </H2>
          <P>
            Aside from when you sign up to a training, ReactGraphQL.Academy is
            collecting your email through a newsletter sign-up form.{' '}
          </P>
          <H2>
            <Link name="4" />
            Why is it collected?
          </H2>
          <P>
            Apart from sending you details about any purchases with us, your
            email address is used to send you newsletters about React GraphQL
            Academy news and offers.
          </P>
          <H2>
            <Link name="5" />
            How is my information used?
          </H2>
          <P>
            Using your email as the primary way of setting up the account means
            that, whatever happens - issues with your account, important
            notifications about our service etc - we have a means of contacting
            you.
          </P>
          <P>
            Another key reason for collecting your email is to confirm your
            attendance at one of the trainings you have shown interest in
            attending. These communications will not be unsolicited and only
            initiated if you have indicated you’d like to receive them. These
            communications could be, but not excluded to, the following:
            Confirmation of event/training ticket purchase Reminder of upcoming
            events/training
          </P>
          <P>
            Lastly, if you have opted-in to the email newsletter, you will
            receive emails of a marketing nature that will feature
            events/trainings/services that you may not have indicated to us that
            you are interested in but we feel will enrich your experience with
            us. You are able to unsubscribe to these marketing emails by
            contacting us at{' '}
            <Link to="mailto:hello@reactgraphql.academy">
              hello@reactgraphql.academy
            </Link>{' '}
            or using the <Link to="/unsubscribe/">unsubscribe</Link> page .
          </P>
          <H2>
            <Link name="6" />
            Who will my information be shared with?
          </H2>
          <P>
            Your information security is very important to us so we will never
            share your personal details with third parties without your consent.
          </P>
          <P>The key parties we share information with will be:</P>
          <H3>Third party training providers</H3>
          <P>
            When you sign up to a training/event/service, we will send third
            party providers your information to ensure that you are able to
            attend and get the best customer service possible. This is the
            information that you will provide to us when you sign up to the
            training/event/service.{' '}
          </P>
          <P>
            For example, we hold many training events at third party venues and
            to ensure you are allowed to enter the building, your details will
            be sent to them to create a vistors list.
          </P>
          <P>
            ReactGraphQL.Academy promises not to share your information with
            third parties that aren't connected to a training/event/service that
            you've signed up for without expressed consent from you.
          </P>
          <H3>Our hosting providers</H3>
          <P>
            All our information is stored on servers owned by{' '}
            <Link to="https://aws.amazon.com/" target="_blank">
              Amazon Web Services, Inc
            </Link>{' '}
            and what you share with us will inevitably be stored on their
            property. Please find Amazon Web Services' Privacy Policy{' '}
            <Link to="https://aws.amazon.com/privacy/" target="_blank">
              here
            </Link>
            .
          </P>
          <H2>
            <Link name="7" />
            How long will my details be kept for?
          </H2>
          <P>
            ReactGraphQL.Academy promises that we will not keep your details on
            file for more than 10 years and we will be in contact then to ask
            whether you would like us to keep your information on file.
          </P>
          <H2>
            <Link name="8" />
            What will be the effect of GDPR regulations to me?
          </H2>
          <P>
            There shouldn’t be any difference in the way that you have
            experienced ReactGraphQL.Academy previously. However, due to the way
            that the GDPR regulations have been introduced in May 2018, you will
            have to make sure you opt-in to email newsletters again from
            ReactGraphQL.Academy or any other LeanJS-related parties.
          </P>
          <H2>
            <Link name="9" />
            How do I remove my details from your servers?
          </H2>
          <P>
            Easily! Just email us at{' '}
            <Link to="mailto:hello@reactgraphql.academy">
              hello@reactgraphql.academy
            </Link>{' '}
            and let us know and we’ll remove all your details (forever).
          </P>
          <H2>
            <Link name="10" />
            What are cookies and what do they do with my information?
          </H2>
          <P>
            In addition to personal information that you give us, there is
            anonymous data that is collected through ‘Cookies’. Cookies is a
            small text file that our site may place on your computer that helps
            us understand how people use ReactGraphQL.Academy - this in turn
            helps us improve our service. For more information about cookies,
            click{' '}
            <Link
              to="https://www.theguardian.com/technology/2012/apr/23/cookies-and-web-tracking-intro"
              target="_blank"
            >
              here
            </Link>
            .
          </P>
          <P>
            The information that is collected from cookies can include (but not
            excluded to):
          </P>
          <Ul>
            <Li>Browser type</Li>
            <Li>Rough location (they can never determine exact locations)</Li>
            <Li>Which sites you’ve come from</Li>
            <Li>How you’ve travelled through the site</Li>
          </Ul>
          <P>
            You may refuse the use of these cookies by selecting the appropriate
            settings on your browser, but please be aware that doing so may
            affect the functionality of ReactGraphQL.Academy.
          </P>
          <P>
            We use two systems that employ cookies on ReactGraphQL.Academy.
            These are:
          </P>
          <H3>Google Analytics</H3>
          <P>
            ReactGraphQL.Academy utilises the Google Analytics platform - which
            transmits website data to their servers in the United States of
            America. Google Analytics does not identify individual users to your
            IP addresses or any other data that Google holds. For more
            information, please check out{' '}
            <Link
              to="https://www.google.com/analytics/terms/us.html"
              target="_blank"
            >
              Google Analytics’ terms of use
            </Link>
            .
          </P>
          <H3>Stripe</H3>
          <P>
            Our payment system is Stripe which also employs cookies to help
            improve our services. For more information about Stripe and its use
            of cookies, please click{' '}
            <Link to="https://stripe.com/cookies-policy/legal" target="_blank">
              here
            </Link>
            .
          </P>
        </Col>
      </Row>
    </Section>
  </React.Fragment>
)

export default PrivacyPolicy
