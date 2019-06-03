import React from 'react'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P, H2Ref } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumGraphQLAPI } from 'src/components/curriculum'
import Header from 'src/components/layout/Header'
import { HideComponentsUsingCss } from 'src/components/utils'
import {
  TrustedBySection,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
} from 'src/components/training'
import { Card } from 'src/components/elements'
import CallToActionNextTrainings from 'src/components/layout/CallToActionNextTrainings'
import { WHY_GQLU_ACADEMY, SMALL_CLASSROOM } from 'src/config/images.js'
import { Image } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_API } from 'src/config/data'
import header from 'src/components/layout/Header.json'

const GraphQL = () => (
  <Layout>
    {({ trainings }) => {
      const upcomingGraphQLTrainings = selectUpcomingTrainings({
        trainings,
        type: GRAPHQL_API,
      })
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/graphql', label: 'GraphQL' },
              { to: '/graphql/training', label: 'Training' },
              { to: '/graphql/training/api', label: 'API' },
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
            <Grid>
              <CallToActionNextTrainings
                left
                trainings={upcomingGraphQLTrainings}
              />
              <Card border="shadow">
                <Link to="#upcoming-courses" name="upcoming-courses" />
                <CurriculumGraphQLAPI
                  trainings={upcomingGraphQLTrainings}
                  enableToggle
                  isOpen={false}
                />
              </Card>
            </Grid>
          </TopSection>

          <Section>
            <Grid>
              <Row>
                <Col md={5} mdOffset={1}>
                  <H2Ref>
                    Is this GraphQL API training right for me? Are you...
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul>
                    <Li>
                      A developer with 1+ year building backends and REST APIs?
                    </Li>
                    <Li>
                      Do you have some experience with JavaScript and npm?
                    </Li>
                    <Li>
                      Not satisfied with the pace of online learning and it's
                      lack of 1-on-1 mentoring?
                    </Li>
                    <Li>
                      For working developers -{' '}
                      <strong>not for beginners!</strong>
                    </Li>
                  </Ul>
                  <P />
                </Col>
                <HideComponentsUsingCss xs sm>
                  <Col md={5} mdOffset={1}>
                    <Image
                      src={WHY_GQLU_ACADEMY}
                      width="100%"
                      alt="Female GraphQL course student wearing glasses concentrating whilst looking into the distance, surrounded by other students with a laptop in the near distance."
                    />
                  </Col>
                </HideComponentsUsingCss>
              </Row>
            </Grid>
          </Section>

          <Section>
            <Grid>
              <Row>
                <Col md={5}>
                  <Image
                    src={SMALL_CLASSROOM}
                    width="100%"
                    alt="Four developers gathered around a laptop, pair programming together on a piece of work during a GraphQL bootcamp."
                  />
                </Col>
                <Col md={5} mdOffset={1}>
                  <H2>Why our GraphQL course is great for your developers</H2>
                  <Ul>
                    <Li>
                      <strong>Build production ready</strong> apps leverging
                      GraphQL.
                    </Li>
                    <Li>
                      Discuss <strong>real-world projects</strong> with
                      experienced developers.
                    </Li>
                    <Li>
                      Learn <strong>best practices</strong>.
                    </Li>
                    <Li>
                      <strong>Mentoring</strong> by our expert coaches.
                    </Li>
                    <Li>
                      Alumni <strong>community</strong>.
                    </Li>
                    <Li>
                      <strong>Stay ahead</strong> in modern development.
                    </Li>
                  </Ul>
                </Col>
              </Row>
            </Grid>
          </Section>

          <TrustedBySection />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default GraphQL
