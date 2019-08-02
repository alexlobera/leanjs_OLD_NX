import React from 'react'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumGraphQLApollo from 'src/components/curriculum/workshops/CurriculumGraphQLApollo'
import { Card, Video } from 'src/components/elements'
import { BOOTCAMP_COLLAB } from 'src/config/images'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  TrainingDetails,
  ALEX_LOBERA,
  AlternativeTrainings,
  AttendeeQuote,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  GRAPHQL_CLIENT,
  GRAPHQL_API,
  GRAPHQL_BOOTCAMP,
  ADVANCED_REACT,
  REACT_WORKSHOP,
  LONDON,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'GraphQL Apollo Client Training in London | React GraphQL Academy',
  description:
    'Looking for a GraphQL Apollo Client training in London? Learn how to consume GraphQL APIs with our experts in London. Contact us now!',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const workshops = selectUpcomingTrainings({
        trainings,
        type: GRAPHQL_CLIENT,
        city: LONDON,
      })
      const training = selectNthTraining({ trainings: workshops, nth }) || {}
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        types: [GRAPHQL_API, GRAPHQL_BOOTCAMP, ADVANCED_REACT, REACT_WORKSHOP],
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
              { to: '/graphql', label: 'GraphQL' },
              { to: '/graphql/training/', label: 'Training' },
              { to: '/graphql/training/workshops', label: 'Workshops' },
              {
                to: '/graphql/training/workshops/graphql-apollo-client',
                label: 'GraphQL Apollo Client',
              },
              {
                to: path,
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={['GraphQL Apollo Client Workshop - London']}
            subtitle="Create production-ready React applications with the most community-driven GraphQL client"
            links={header.landingTraining.links}
            bgImageName={LONDON_BOOTCAMP}
            type={GRAPHQL_CLIENT}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="dark">
            <Card variant="primary">
              <Row>
                <Col md={6} lg={5} lgOffset={1}>
                  <PaymentSection
                    training={training}
                    trainingError={trainingError}
                    trainingLoading={trainingLoading}
                  />
                </Col>
                <Col md={6} lg={4} lgOffset={1}>
                  <H4>Charlie's student experience</H4>
                  <Video youtubeId="F_lx5iRTuaI" />
                  <TrainingDetails coaches={[ALEX_LOBERA]} />
                </Col>
              </Row>
            </Card>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="I enjoyed how the coaches interacted with us. They talked in a way that was super positive and really supportive."
                  fullname="Lara Ramey"
                  job="Software Developer"
                  company="Meredith Corporation"
                  youtubeId="Syktu6ICNfw"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <H2Ref>
                  Is this one day workshop right for me? Are you...{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <Li>
                    Familiar with front-end technologies like React, JavaScript,
                    CSS, and HTML?
                  </Li>
                  <Li>
                    Taking a step forward to become a GraphQL Specialist able to
                    make critical decisions about the architecture of an
                    application.
                  </Li>
                  <Li>
                    Not satisfied with the pace of online learning and it's lack
                    of 1-on-1 mentoring?
                  </Li>
                </Ul>
                <P>
                  If you've said 'yes' to these, this workshop could be for you!
                </P>
                <H3>Not for beginner devs!</H3>
                <Link
                  className="perfect-course-student"
                  to="/blog/are-you-the-perfect-react-graphql-student/"
                >
                  Blog: Are YOU the Perfect React Student?
                </Link>
              </Col>
            </Row>
          </Section>
          <Section>
            <Card>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumGraphQLApollo layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Card>
          </Section>

          <Section>
            <Row>
              <Col lg={10} lgOffset={1}>
                <AlternativeTrainings trainings={crossSellTrainings} />
              </Col>
            </Row>
          </Section>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

InstancePage.defaultProps = {
  pageContext: {},
}

export default InstancePage
