import React from 'react'
import styled from 'styled-components'

import { LONDON_BOOTCAMP } from '../../../images/imageNames.js'
import Layout from '../../components/layout'
import { formatUTC } from '../../components/utils'
import Section, { TopSection } from '../../components/layout/Section'
import Grid, { Col, Row } from '../../components/layout/Grid'
import { Li } from '../../components/layout/Ul'
import { H2, H3, P } from '../../components/text'
import { Link } from '../../components/navigation'
import { Card, Image, Newsletter } from '../../components/elements'
import Header from '../../components/layout/Header'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from '../../components/training'
import { LinkButton } from '../../components/buttons'
import { MEETUP, selectMeetups, instagramPictures } from '../../config/data'
import { MENTORSHIP_IMG } from '../../config/images'
import { CallToActionRow } from '../../components/layout/CallToActionNextTrainings'

const CallToAction = styled(LinkButton)`
  position: absolute;
  top: -25px;
`
const SecondaryCard = styled(Card)`
  margin-top: 36px;
`

const EventList = styled.ul`
  list-style: none;
  margin-left: 0;
  h3 {
    padding-top: 0;
  }
  li {
    margin-top: 18px;
  }
  > li:first-child {
    margin-top: 0;
  }
`

const MeetupLink = styled(Link)`
  font-size: 0.9rem;
`

const TwitterWidgetsOnlyOnClientSide = () => {
  if (typeof window !== 'undefined') {
    // package react-twitter-embed does not work on SSR, therefore it breaks the Gatsby build
    const {
      TwitterTimelineEmbed,
      TwitterFollowButton,
    } = require('react-twitter-embed')

    return (
      <React.Fragment>
        <TwitterFollowButton
          screenName="reactgqlacademy"
          options={{ size: 'large' }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactgqlacademy"
          options={{ height: 800 }}
        />
        <TwitterFollowButton
          screenName="reactgqlacademy"
          options={{ size: 'large' }}
        />
      </React.Fragment>
    )
  } else {
    return null
  }
}

const Community = () => (
  <Layout>
    {({ trainings }) => {
      const upcomingBootcamps = selectUpcomingTrainings({
        trainings,
        type: MEETUP,
      })
      const nextBootcamp =
        selectNthTraining({ trainings: upcomingBootcamps }) || {}
      const nextBootcampStartDate =
        nextBootcamp &&
        formatUTC(nextBootcamp.startDate, nextBootcamp.utcOffset, 'D MMM')
      const meetups = selectMeetups()

      return (
        <React.Fragment>
          <Header
            titleLines={['The React GraphQL', 'Academy community']}
            subtitle="We are not a group of people - but a movement!"
            links={[
              { text: 'Twitter ', to: '#twitter' },
              { text: 'Meetups', to: '#meetups' },
              { text: 'Instagram', to: '#instagram' },
              { text: 'Mentor community', to: '#mentor-community' },
            ]}
            bgImageName={LONDON_BOOTCAMP}
            training={nextBootcamp}
          />
          <TopSection>
            <Grid>
              <CallToActionRow>
                <Col xs={12} sm={4}>
                  <LinkButton
                    variant="primary"
                    to={nextBootcamp && nextBootcamp.toPath}
                    children={`Next Meetup: ${nextBootcampStartDate}, ${nextBootcamp &&
                      nextBootcamp.city}`}
                  />
                </Col>
              </CallToActionRow>
              <Row>
                <Col md={6}>
                  <Card border="shadow">
                    <H2>
                      Meetups? Yes! <a name="meetups" />
                    </H2>
                    <P>
                      We run and help support meetups all over the world
                      covering both React and GraphQL.{' '}
                    </P>
                    <LinkButton to="/community/meetups">
                      See All MeetUps
                    </LinkButton>
                    {meetups.length ? (
                      <React.Fragment>
                        <EventList>
                          <Li>
                            <H3>Events</H3>
                          </Li>
                          {meetups.map(
                            ({
                              cityShortName,
                              country,
                              dateStartsOn,
                              utcOffset,
                              url,
                              title,
                              imgUrl,
                            }) => (
                              <Li key={url}>
                                <Row>
                                  <Col sm={6}>
                                    <Image src={imgUrl} />
                                  </Col>
                                  <Col sm={6}>
                                    <div>
                                      <P>
                                        <strong>{title}</strong>
                                        <br />
                                        {formatUTC(
                                          dateStartsOn,
                                          utcOffset,
                                          'D MMM'
                                        )}{' '}
                                        - {cityShortName}, {country}
                                      </P>
                                      <LinkButton
                                        variant="secondary"
                                        to={url}
                                        children={'Read more'}
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </Li>
                            )
                          )}
                        </EventList>
                      </React.Fragment>
                    ) : null}
                    <H3>Our groups</H3>
                    <Row>
                      <Col xs={6}>
                        <MeetupLink to="http://meetup.com/JavaScript-London">
                          JavaScript London
                        </MeetupLink>
                      </Col>
                      <Col xs={6}>
                        <MeetupLink to="http://meetup.com/JavaScript-Lisbon">
                          JavaScript Lisbon
                        </MeetupLink>
                      </Col>
                      <Col xs={6}>
                        <MeetupLink to="http://meetup.com/JavaScript-Barcelona">
                          JavaScript Barcelona
                        </MeetupLink>
                      </Col>
                      <Col xs={6}>
                        <MeetupLink to="http://meetup.com/JavaScript-Amsterdam">
                          JavaScript Amsterdam
                        </MeetupLink>
                      </Col>
                      <Col xs={6}>
                        <MeetupLink to="http://meetup.com/JavaScript-Paris">
                          JavaScript Paris
                        </MeetupLink>
                      </Col>
                      <Col xs={6}>
                        <MeetupLink to="http://meetup.com/JavaScript-Berlin">
                          JavaScript Berlin
                        </MeetupLink>
                      </Col>
                    </Row>
                  </Card>
                  <SecondaryCard border="shadow">
                    <Col md={8} mdOffset={2}>
                      <H2>
                        Instagram - boom! <a name="instagram" />
                      </H2>
                      <p>
                        <Link to="https://www.instagram.com/reactgraphqlacademy/">
                          @reactgraphqlacademy
                        </Link>
                      </p>
                      <Row>
                        {instagramPictures.map(({ imageUrl, pageUrl }) => (
                          <Col xs={4} key={pageUrl}>
                            <Link to={pageUrl}>
                              <Image
                                src={imageUrl}
                                alt="React GraphQL Academy Instagram images. We were unable to bring the descriptive text from Instagram, apologies."
                              />
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </SecondaryCard>
                </Col>
                <Col xs={12} md={6}>
                  <Card border="shadow">
                    <Col md={8} mdOffset={2}>
                      <H2>
                        Twitter? Sure.
                        <a name="twitter" />
                      </H2>
                      <TwitterWidgetsOnlyOnClientSide />
                    </Col>
                  </Card>
                </Col>
                <Col xs={12} md={6} />
              </Row>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col xs={12} md={6}>
                  <Image
                    src={MENTORSHIP_IMG}
                    alt="A group of React GraphQL Academy coaches and mentors, looking very happy indeed"
                  />
                </Col>
                <Col xs={12} md={5} mdOffset={1}>
                  <H2>
                    Our mentor community <a name="mentor-community" />
                  </H2>
                  <P>
                    React GraphQL Academy is devoted to helping developers grow
                    in their professional career. Our dedication stands beyond
                    making them awesome React developers. We want them to make
                    an impact in the organizations and people they choose to
                    work with.
                  </P>
                  <P>
                    Our experience tells us that the best way to master a skill
                    is by teaching it. We believe sharing knowledge also
                    contributes to creating collaborative workplaces &
                    communities.
                  </P>
                  <P>
                    The React GraphQL Academy mentorship program enables those
                    experienced developers in our community to take a step
                    farther and become a mentor in our community events and
                    workshops. This way they can build the experience required
                    to become not only a great developer but also a great coach,
                    speaker, and team player.
                  </P>
                  <P>
                    <LinkButton
                      target="_self"
                      to="mailto:hello@reactgraphql.academy?subject=Become a coach"
                    >
                      Become a coach
                    </LinkButton>
                  </P>
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

export default Community
