import React from 'react'

import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P, H2Ref } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumGraphQL } from 'src/components/curriculum'
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
import { GRAPHQL_BOOTCAMP } from 'src/config/data'
import header from 'src/components/layout/Header.json'

const GraphQL = () => (
  <Layout>
    {({ trainings }) => {
      const upcomingGraphQLTrainings = selectUpcomingTrainings({
        trainings,
        type: GRAPHQL_BOOTCAMP,
      })
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/graphql', label: 'GraphQL' },
              { to: '/graphql/training', label: 'Training' },
              { to: '/graphql/training/bootcamp', label: 'Bootcamp' },
            ]}
          />
          <Header
            titleLines={[
              'Take your dev career further',
              'by mastering GraphQL',
            ]}
            subtitle="In-person development training from industry experts"
            bgImageName={BOOTCAMP}
            links={header.landingPageLinks.links}
            type={GRAPHQL_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <CallToActionNextTrainings
                left
                trainings={upcomingGraphQLTrainings}
              />
              <Card border="shadow">
                <Link to="#upcoming-courses" name="upcoming-courses" />
                <CurriculumGraphQL
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
                    Is React GraphQL Academy's GraphQL course right for me?
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul>
                    <Li>
                      For working developers -{' '}
                      <strong>not for beginners!</strong>
                    </Li>
                    <Li>
                      <strong>Hands-on project-based</strong> training.
                    </Li>
                    <Li>
                      <strong>collaborative</strong> learning environment.
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
