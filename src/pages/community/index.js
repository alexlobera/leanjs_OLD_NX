import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { LONDON_BOOTCAMP } from '../../../images/imageNames'
import Layout from '../../components/layout'
import { formatUTC } from '../../components/utils'
import Section, { TopSection } from '../../components/layout/Section'
import Grid, { Col, Row } from '../../components/layout/Grid'
import { H2, H3, P } from '../../components/text'
import { Link } from '../../components/navigation'
import { Card, Image } from '../../components/elements'
import { RootHeader as Header } from '../../components/layout/Header'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from '../../components/training'
import { LinkButton } from '../../components/buttons'
import { MEETUP, instagramPictures } from '../../config/data'
import { CallToActionRow } from '../../components/layout/CallToActionRow'
import Ul, { Li } from '../../components/layout/Ul'
import { Breadcrumb } from '../../components/navigation'

// TODO replace margin-top: 36px; with props from styled system once Card is refactored
const SecondaryCard = styled(Card)`
  margin-top: 36px;
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

const Community = ({ data }) => (
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
      const mentorshipImgSrc = data.file.childImageSharp.fluid.src
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/community', label: 'Community' },
            ]}
          />
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
            training={nextMeetup}
          />
          <TopSection>
            <Grid>
              <CallToActionRow>
                <Col sm={4} lgOffset={1}>
                  <LinkButton
                    variant="primary"
                    to={nextMeetup && nextMeetup.toPath}
                    children={`Next Meetup: ${nextMeetupStartDate}, ${nextMeetup &&
                      nextMeetup.city}`}
                  />
                </Col>
              </CallToActionRow>
              <Row>
                <Col md={6}>
                  <Card border="shadow">
                    <Col md={8} mdOffset={2}>
                      <H2>
                        Meetups? Yes! <a name="meetups" />
                      </H2>
                      <P>
                        We run and help support meetups all over the world
                        covering both React and GraphQL.{' '}
                      </P>
                      <LinkButton
                        to="/community/meetups"
                        className="meetups-clicks"
                      >
                        See All MeetUps
                      </LinkButton>
                      <OurMeetupGroups />
                    </Col>
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
                <Col md={6}>
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
                <Col md={6} />
              </Row>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={6}>
                  <Image
                    src={mentorshipImgSrc}
                    alt="A group of React GraphQL Academy coaches and mentors, looking very happy indeed"
                  />
                </Col>
                <Col md={5} mdOffset={1}>
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

export const query = graphql`
  query mentorshipImg {
    file(absolutePath: { regex: "/mentorship/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const OurMeetupGroups = () => (
  <React.Fragment>
    <H3>Our groups</H3>
    <Row>
      <Col sm={6}>
        <Ul variant="unstyled" mb={1}>
          {[
            {
              to: 'http://meetup.com/JavaScript-London',
              txt: 'JavaScript London',
            },
            {
              to: 'http://meetup.com/JavaScript-Barcelona',
              txt: 'JavaScript Barcelona',
            },
            {
              to: 'http://meetup.com/JavaScript-Paris',
              txt: 'JavaScript Paris',
            },
          ].map(({ to, txt }) => (
            <Li>
              <Link to={to} className="meetups-clicks">
                {txt}
              </Link>
            </Li>
          ))}
        </Ul>
      </Col>
      <Col sm={6}>
        <Ul variant="unstyled" mb={1}>
          {[
            {
              to: 'http://meetup.com/JavaScript-Lisbon',
              txt: 'JavaScript Lisbon',
            },
            {
              to: 'http://meetup.com/JavaScript-Amsterdam',
              txt: 'JavaScript Amsterdam',
            },
            {
              to: 'http://meetup.com/JavaScript-Berlin',
              txt: 'JavaScript Berlin',
            },
          ].map(({ to, txt }) => (
            <Li>
              <Link to={to} className="meetups-clicks">
                {txt}
              </Link>
            </Li>
          ))}
        </Ul>
      </Col>
    </Row>
  </React.Fragment>
)

export default Community
