import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { P, H2Ref } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumGraphQLBootcamp } from 'src/components/curriculum'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  UpcomingTrainingSection,
  AttendeeQuote,
  selectUpcomingTrainings,
} from 'src/components/training'
import { Card } from 'src/components/elements'
import { WHY_GQLU_ACADEMY } from 'src/config/images.js'
import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_BOOTCAMP } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import BlogSection from 'src/components/blog/BlogSection'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'GraphQL Bootcamp | React GraphQL Academy',
  description:
    'Interested in GraphQL bootcamp? React GraphQL Academy offers in-person GraphQL bootcamp from industry experts. Contact us now!',
  image: WHY_GQLU_ACADEMY,
  type: 'website',
}

const GraphQL = () => (
  <Layout>
    {({ trainings }) => {
      const upcomingGraphQLTrainings = selectUpcomingTrainings({
        trainings,
        type: GRAPHQL_BOOTCAMP,
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
              { to: '/graphql/training/bootcamp', label: 'Bootcamp' },
            ]}
          />
          <Header
            titleLines={[
              'Take your dev career further',
              'with our GraphQL Bootcamp',
            ]}
            subtitle="In-person GraphQL bootcamp from industry experts"
            bgImageName={BOOTCAMP}
            links={header.landingPageLinks.links}
            type={GRAPHQL_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <Card border="shadow">
                <Link to="#upcoming-courses" name="upcoming-courses" />
                <CurriculumGraphQLBootcamp
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
                  <AttendeeQuote
                    small
                    quote="It's nice to have people there who know their stuff. I feel like [the course] has definitely improved my career trajectory"
                    fullname="Charlie Wilson"
                    job="Software Engineer"
                    company="ESG PLC"
                    videoUrl="tYhT8F82-z8"
                  />
                </Col>
                <Col md={4} mdOffset={1}>
                  <H2Ref>
                    Is this GraphQL bootcamp right for me?
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
            </Grid>
          </Section>

          <TrustedBySection />
          <BlogSection tags={['graphql', 'beginner']} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default GraphQL
