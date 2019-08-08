import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import { Segment, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB } from 'src/config/images'
import CurriculumAdvancedReact from 'src/components/curriculum/CurriculumAdvancedReact'
import {
  UpcomingTrainingSection,
  selectNthTraining,
  AlternativeTrainings,
  TrainingDetails,
  ALEX_LOBERA,
  HORACIO_HERRERA,
  RICHARD_MOSS,
  AttendeeQuote,
} from 'src/components/training'
import selectUpcomingTrainings from 'src/components/training/selectUpcomingTrainings'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  ADVANCED_REACT,
  GRAPHQL_API,
  GRAPHQL_CLIENT,
  GRAPHQL_BOOTCAMP,
  BERLIN,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import BlogSection from 'src/components/blog/BlogSection'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'Advanced React Training in Berlin | React GraphQL Academy',
  description:
    'Looking for a Advanced React training in Berlin? Learn Advanced React patterns and concepts with our experts in Berlin. Contact us now!',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

const Page = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingAdvancedTrainings = selectUpcomingTrainings({
        trainings,
        type: ADVANCED_REACT,
        city: BERLIN,
      })
      const training =
        selectNthTraining({ trainings: upcomingAdvancedTrainings, nth }) || {}
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        types: [GRAPHQL_API, GRAPHQL_CLIENT, GRAPHQL_BOOTCAMP],
      })
      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            link={[
              {
                rel: 'canonical',
                href: canonical,
              },
            ]}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/advanced',
                label: 'Advanced',
              },
              {
                to: path,
                label: 'Berlin',
              },
            ]}
          />
          <Header
            titleLines={['Advanced React Training Berlin']}
            subtitle="Take your React career to the next level by mastering advanced React - in just 3 days!"
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={ADVANCED_REACT}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="darkMob">
            <Segment variant="primary">
              <Row>
                <Col md={6} lg={5} lgOffset={1}>
                  <PaymentSection
                    training={training}
                    trainingLoading={trainingLoading}
                    trainingError={trainingError}
                  />
                </Col>
                <Col md={6} lg={4} lgOffset={1}>
                  <H4>Lara's student experience</H4>
                  <Video youtubeId="blg40SCle7I" />
                  <TrainingDetails
                    foodIncluded={false}
                    coaches={[ALEX_LOBERA, HORACIO_HERRERA, RICHARD_MOSS]}
                  />
                </Col>
              </Row>
            </Segment>
          </TopSection>
          <Section>
            <Segment>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumAdvancedReact
                    training={training}
                    layout={LIST_TWO_COL}
                  />
                </Col>
              </Row>
            </Segment>
          </Section>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="This course has taught me not just the 'how' but WHY React is good..."
                  fullname="Jim Plimmer"
                  job="Developer"
                  company="Conversion.com"
                  youtubeId="nIK8ouQp17s"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <H2Ref>
                  Is this Advanced React training right for me?{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <CurriculumAdvancedReact.TargetAudienceList />
                </Ul>
                <H3>Not for beginner devs!</H3>
                <P>
                  This is a bootcamp for React developers that are experienced
                  with React. If you don't have 1+ year of experience using
                  React we recommend you to attend our{' '}
                  <Link to="/react/training/bootcamp">React Bootcamp</Link>.
                </P>
              </Col>
            </Row>
          </Section>
          <Section>
            <Row>
              <Col lg={10} lgOffset={1}>
                <AlternativeTrainings trainings={crossSellTrainings} />
              </Col>
            </Row>
          </Section>
          <BlogSection tags={['react', 'advanced']} />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

Page.defaultProps = {
  pageContext: {},
}

export default Page
