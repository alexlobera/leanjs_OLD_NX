import React from 'react'
import { Match } from '@reach/router'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { formatUTC } from 'src/components/utils'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, H3, P } from 'src/components/text'
import { Link } from 'src/components/navigation'
import { Card, Image } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { LinkButton } from 'src/components/buttons'
import { MEETUP } from 'src/config/data'
import { BOOTCAMP_RIGHT } from 'src/config/images'
import { CallToActionRow } from 'src/components/layout/CallToActionNextTrainings'
import Ul, { Li } from 'src/components/layout/Ul'
import { Breadcrumb } from 'src/components/navigation'
import Meetup from './Meetup'

export const MEETUP_PATH = '/community/meetups/:id'

const IndexPage = () => (
  <Match path={MEETUP_PATH}>
    {({ match }) =>
      match && match.id ? <Meetup instanceId={match.id} /> : <Meetups />
    }
  </Match>
)

const Meetups = () => (
  <Layout>
    {({ trainings }) => {
      const upcomingMeetups = selectUpcomingTrainings({
        trainings,
        type: MEETUP,
      })
      const nextMeetup = selectNthTraining({ trainings: upcomingMeetups }) || {}
      const nextMeetupStartDate =
        nextMeetup &&
        formatUTC(nextMeetup.startDate, nextMeetup.utcOffset, 'D MMM')
      const metaTitle = 'React GraphQL Academy community events and meetups'
      const metaDescription =
        'React GraphQL Academy organizes hands-on meetups for the developer community across Europe'
      return (
        <React.Fragment>
          <Helmet
            title={metaTitle}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
            ]}
          >
            <meta property="og:title" content={metaTitle} />
            <meta property="og:image" content={BOOTCAMP_RIGHT} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="article" />
          </Helmet>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/community', label: 'Community' },
              { to: '/community/meetups/', label: 'Meetups' },
            ]}
          />
          <Header
            titleLines={['The React GraphQL', 'Academy community']}
            subtitle="We are not a group of people - but a movement!"
            links={[
              { text: 'Upcoming Meetups ', to: '#upcoming-meetups' },
              { text: 'Meetup community', to: '#mentor-community' },
            ]}
            bgImageName={LONDON_BOOTCAMP}
            training={nextMeetup}
          />
          <TopSection>
            <Grid>
              <CallToActionRow left>
                <Col sm={5} lgOffset={1}>
                  <LinkButton
                    variant="primary"
                    to={nextMeetup && nextMeetup.toPath}
                    children={`Next Meetup: ${nextMeetupStartDate}, ${nextMeetup &&
                      nextMeetup.city} `}
                  />
                </Col>
              </CallToActionRow>
              <Card border="shadow">
                <Col lg={11} lgOffset={1}>
                  <H2>
                    Our upcoming meetups
                    <a name="upcoming-meetups" />
                  </H2>
                  <UpcomingTrainingSection
                    curriculum
                    removeAdditionalCTAs
                    trainings={upcomingMeetups}
                  />
                  <H3>Our groups</H3>
                  <Row>
                    <Col sm={6}>
                      <Ul unstyled>
                        <Li>
                          <Link to="http://meetup.com/JavaScript-London">
                            JavaScript London
                          </Link>
                        </Li>
                        <Li>
                          <Link to="http://meetup.com/JavaScript-Barcelona">
                            JavaScript Barcelona
                          </Link>
                        </Li>
                        <Li>
                          <Link to="http://meetup.com/JavaScript-Paris">
                            JavaScript Paris
                          </Link>
                        </Li>
                      </Ul>
                    </Col>
                    <Col sm={6}>
                      <Ul unstyled>
                        <Li>
                          <Link to="http://meetup.com/JavaScript-Lisbon">
                            JavaScript Lisbon
                          </Link>
                        </Li>
                        <Li>
                          <Link to="http://meetup.com/JavaScript-Amsterdam">
                            JavaScript Amsterdam
                          </Link>
                        </Li>
                        <Li>
                          <Link to="http://meetup.com/JavaScript-Berlin">
                            JavaScript Berlin
                          </Link>
                        </Li>
                      </Ul>
                    </Col>
                  </Row>
                </Col>
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={6}>
                  <Image
                    src={BOOTCAMP_RIGHT}
                    alt="React GraphQL Academy meetup"
                  />
                </Col>
                <Col md={5} mdOffset={1}>
                  <H2>
                    Our meetup community <a name="mentor-community" />
                  </H2>
                  <P>
                    React GraphQL Academy is devoted to helping developers
                    expand their knowledge of the React ecosystem and beyond. We
                    organize and run free workshops and events for the
                    JavaScript developer community across several European
                    cities.
                  </P>
                  <P>
                    Community meetups are a great way to both learn something
                    new and connect with other motivated developers in your city
                    :-)
                  </P>
                  <H3>Would your company like to host a JavaScript meetup?</H3>
                  <P>
                    We love to bringing the community to interesting companies
                    in the tech industry. If you're company has a great space,
                    we'd love to hear from you!
                  </P>
                  <LinkButton to="#contact-us">Contact us</LinkButton>
                </Col>
              </Row>
            </Grid>
          </Section>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default IndexPage
