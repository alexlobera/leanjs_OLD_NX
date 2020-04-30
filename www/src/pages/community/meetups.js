import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { MEETUPS } from 'src/../images/imageNames'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, H3, P } from 'src/components/text'
import { Segment, Image } from 'src/components/elements'
import { RootHeader as Header } from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
  TYPENAME_EVENT,
} from 'src/components/training'
import Link from 'src/components/navigation/Link'
import Ul, { Li } from 'src/components/layout/Ul'
import selectUpcomingTrainings from 'src/components/training/selectUpcomingTrainings'
import UpcomingTrainings from 'src/components/training/UpcomingTrainings'
import { LinkButton } from 'src/components/buttons'
// import { MEETUP } from 'src/config/data'
import { BOOTCAMP_RIGHT } from 'src/config/images'
import { Breadcrumb } from 'src/components/navigation'

export const OurMeetupGroups = () => (
  <React.Fragment>
    <H3>Our groups</H3>
    <Row>
      <Col sm={6}>
        <Ul variant="unstyled" sx={{ mb: 1 }}>
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
        <Ul variant="unstyled" sx={{ mb: 1 }}>
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

const Meetups = ({ data, trainings }) => {
  const upcomingMeetups = selectUpcomingTrainings({
    trainings,
    typename: TYPENAME_EVENT,
  })

  const nextMeetup = selectNthTraining({ trainings: upcomingMeetups }) || {}
  const metaTitle = 'React GraphQL Academy community events and meetups'
  const metaDescription =
    'React GraphQL Academy organizes hands-on meetups for the developer community across Europe'
  const bootcampRightImgSrc = data.file.childImageSharp.fluid.src

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
        titleLines={['The React GraphQL', 'Academy Meetups']}
        subtitle={metaDescription}
        links={[
          { text: 'Upcoming Meetups ', to: '#upcoming-meetups' },
          { text: 'Meetup community', to: '#mentor-community' },
        ]}
        bgImageName={MEETUPS}
        training={nextMeetup}
      />
      <TopSection>
        <Segment>
          <Col lg={11} lgOffset={1}>
            <H2>
              Our upcoming meetups
              <a name="upcoming-meetups" />
            </H2>
            <UpcomingTrainings
              curriculum
              content={null}
              trainings={upcomingMeetups}
              className="upcoming-meetups"
            />
            <OurMeetupGroups />
          </Col>
        </Segment>
      </TopSection>
      <Section>
        <Row>
          <Col md={6}>
            <Image
              src={bootcampRightImgSrc}
              alt="React GraphQL Academy meetup"
            />
          </Col>
          <Col md={5} mdOffset={1}>
            <H2>
              Our meetup community <a name="mentor-community" />
            </H2>
            <P>
              React GraphQL Academy is devoted to helping developers expand
              their knowledge of the React ecosystem and beyond. We organize and
              run free workshops and events for the JavaScript developer
              community across several European cities.
            </P>
            <P>
              Community meetups are a great way to both learn something new and
              connect with other motivated developers in your city :-)
            </P>
            <H3>Would your company like to host a JavaScript meetup?</H3>
            <P>
              We love to bringing the community to interesting companies in the
              tech industry. If you're company has a great space, we'd love to
              hear from you!
            </P>
            <LinkButton
              to="#contact-us"
              className="meetups-community-contact-us"
            >
              Contact us
            </LinkButton>
          </Col>
        </Row>
      </Section>
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  query bootcampRightImg($imgMaxWidth: Int!) {
    file(absolutePath: { regex: "/bootcamp_right/" }) {
      childImageSharp {
        fluid(maxWidth: $imgMaxWidth) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Meetups
