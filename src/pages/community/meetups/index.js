import React from 'react'
import { Match } from '@reach/router'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { MEETUPS } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, H3, P } from 'src/components/text'
import { Card, Image } from 'src/components/elements'
import { RootHeader as Header } from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  UpcomingTrainings,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { LinkButton } from 'src/components/buttons'
import { MEETUP } from 'src/config/data'
import { BOOTCAMP_RIGHT } from 'src/config/images'
import { OurMeetupGroups } from '../index'
import { Breadcrumb } from 'src/components/navigation'
import Meetup from './Meetup'

export const MEETUP_PATH = '/community/meetups/:id'

const IndexPage = ({ data }) => (
  <Match path={MEETUP_PATH}>
    {({ match }) =>
      match && match.id ? (
        <Meetup instanceId={match.id} />
      ) : (
        <Meetups data={data} />
      )
    }
  </Match>
)

const Meetups = ({ data, path }) => (
  <Layout>
    {({ trainings }) => {
      const upcomingMeetups = selectUpcomingTrainings({
        trainings,
        type: MEETUP,
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
              { to: path, label: 'Meetups' },
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
            <Card>
              <Col lg={11} lgOffset={1}>
                <H2>
                  Our upcoming meetups
                  <a name="upcoming-meetups" />
                </H2>
                <UpcomingTrainings
                  curriculum
                  removeAdditionalCTAs
                  trainings={upcomingMeetups}
                  className="upcoming-meetups"
                />
                <OurMeetupGroups />
              </Col>
            </Card>
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
                  their knowledge of the React ecosystem and beyond. We organize
                  and run free workshops and events for the JavaScript developer
                  community across several European cities.
                </P>
                <P>
                  Community meetups are a great way to both learn something new
                  and connect with other motivated developers in your city :-)
                </P>
                <H3>Would your company like to host a JavaScript meetup?</H3>
                <P>
                  We love to bringing the community to interesting companies in
                  the tech industry. If you're company has a great space, we'd
                  love to hear from you!
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
    }}
  </Layout>
)

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

export default IndexPage
