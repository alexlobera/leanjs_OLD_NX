import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, P, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumGraphQLBootcamp } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB } from 'src/config/images'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrainingDetails,
  ALEX_LOBERA,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_BOOTCAMP, LONDON } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'GraphQL Bootcamp in London | React GraphQL Academy',
  description:
    'Interested in GraphQL bootcamp in London? Take your career to the next level by mastering GraphQL server-side & client-side - in just 3 days.Contact us now!',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

const Page = ({ path, pageContext: { canonicalSlug, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingGqlTrainings = selectUpcomingTrainings({
        trainings,
        type: BOOTCAMP_COLLAB,
        city: LONDON,
      })
      const training =
        selectNthTraining({ trainings: upcomingGqlTrainings, nth }) || {}
      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            link={[
              {
                rel: 'canonical',
                href: canonicalSlug,
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
              { to: '/graphql/training', label: 'Training' },
              { to: '/graphql/training/bootcamp', label: 'Bootcamp' },
              { to: path, label: 'London' },
            ]}
          />
          <Header
            titleLines={['GraphQL Bootcamp', `London`]}
            subtitle="Take your dev career to the next level by mastering<br />GraphQL server-side & client-side - in just 3 days!"
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={GRAPHQL_BOOTCAMP}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="dark">
            <Grid>
              <Card bg="dark">
                <Row>
                  <Col md={6} lg={5} lgOffset={1}>
                    <PaymentSection
                      training={training}
                      trainingError={trainingError}
                      trainingLoading={trainingLoading}
                    />
                  </Col>
                  <Col md={6} lg={4} lgOffset={1}>
                    <H4>Jim's student experience</H4>

                    <Video youtubeId="wbIame88UWU" />
                    <TrainingDetails coaches={[ALEX_LOBERA]} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumGraphQLBootcamp
                      enableToggle={true}
                      layout={LIST_TWO_COL}
                    />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </Section>

          <Section>
            <Grid>
              <Row>
                <Col md={5} mdOffset={1}>
                  <AttendeeQuote
                    small
                    quote="The coaches are always available [on the Alumni Slack channel]... Now I'm not alone."
                    fullname="Lara Ramey"
                    job="Software Developer"
                    company="Meredith Corporation"
                    videoUrl="JIWdYuNzeOc"
                  />
                </Col>
                <Col md={4} lgOffset={1}>
                  <H2Ref>
                    Is this GraphQL bootcamp right for me? Are you...{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul>
                    <Li>
                      Familiar with front-end technologies like JavaScript, CSS,
                      and HTML?
                    </Li>
                    <Li>
                      Taking a step forward to become a GraphQL Specialist able
                      to make critical decisions about the architecture of a
                      Production-ready GraphQL & React application
                    </Li>
                    <Li>
                      Not satisfied with the pace of online learning and it's
                      lack of 1-on-1 mentoring?
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, our bootcamp could be for
                    you!
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

Page.defaultProps = {
  pageContext: {},
}

export default Page
