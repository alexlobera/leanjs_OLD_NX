import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { P, H2Ref } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumGraphQLAPI from 'src/components/curriculum/CurriculumGraphQLAPI'
import Header from 'src/components/layout/Header'
import {
  AttendeeQuote,
  TrustedBySection,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
} from 'src/components/training'
import { Card } from 'src/components/elements'
import { WHY_GQLU_ACADEMY } from 'src/config/images.js'
import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_API } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'GraphQL API Training | React GraphQL Academy',
  description:
    'Looking for a GraphQL API training? Build real-world GraphQL APIs. In-person GraphQL API training from industry experts Contact us now!',
  image: WHY_GQLU_ACADEMY,
  type: 'website',
}

const GraphQL = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const upcomingGraphQLTrainings = selectUpcomingTrainings({
        trainings,
        type: GRAPHQL_API,
      })
      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
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
              { to: '/graphql/training', label: 'Training' },
              { to: path, label: 'API' },
            ]}
          />
          <Header
            titleLines={['Build real-world', `GraphQL APIs`]}
            subtitle="In-person GraphQL API training from industry experts"
            bgImageName={BOOTCAMP}
            links={header.landingPageLinks.links}
            type={GRAPHQL_API}
          />
          <TopSection>
            <Card>
              <Link to="#upcoming-courses" name="upcoming-courses" />
              <CurriculumGraphQLAPI
                trainings={upcomingGraphQLTrainings}
                isOpen={false}
              />
            </Card>
          </TopSection>

          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="[The coaches] are very important - they're able to explain things in a way we can understand."
                  fullname="Jim Plimmer"
                  job="Developer"
                  company="Conversion.com"
                  youtubeId="GU-IIi-84t8"
                />
              </Col>
              <Col md={4} mdOffset={1}>
                <H2Ref>
                  Is this GraphQL course right for me?
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <Li>
                    For working developers, experience with JavaScript and npm -{' '}
                    <strong>not for beginners!</strong>
                  </Li>
                  <Li>
                    Perfect for developers with 1+ year building backends and
                    REST APIs?
                  </Li>
                  <Li>
                    <strong>Hands-on practical</strong> training.
                  </Li>
                  <Li>
                    <strong>Build production ready</strong> apps leverging
                    GraphQL.
                  </Li>
                  <Li>
                    Expert coaches who are <strong>working developers</strong>
                  </Li>
                  <Li>
                    Learn <strong>best practices</strong>.
                  </Li>
                  <Li>
                    Alumni <strong>community</strong>.
                  </Li>
                </Ul>
                <P />
              </Col>
            </Row>
          </Section>

          <TrustedBySection />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default GraphQL
