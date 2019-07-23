import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { CurriculumPartTime } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  TargetAudienceSection,
  TrainingDetails,
  HORACIO_HERRERA,
  ALEX_LOBERA,
} from 'src/components/training'
import Header from 'src/components/layout/Header'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Breadcrumb } from 'src/components/navigation'
import { PART_TIME, BARCELONA } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'

const metas = {
  title: 'React Course Barcelona| React GraphQL Academy',
  description:
    'Interested in a React course in Barcelona? Learn the fundamentas of the React ecosystem and become a confident React developer with our React part time course Barcelona.',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const PartTimeBarcelona = ({
  path,
  pageContext: { canonicalSlug, nth = 1 },
}) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingPartTimeTrainings = selectUpcomingTrainings({
        trainings,
        type: PART_TIME,
        city: BARCELONA,
      })
      const training =
        selectNthTraining({ trainings: upcomingPartTimeTrainings, nth }) || {}
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
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/part-time-course',
                label: 'Part Time Course',
              },
              {
                to: path,
                label: 'Barcelona',
              },
            ]}
          />
          <Header
            titleLines={['React Redux part-time course - Barcelona']}
            subtitle="Take your dev career to the next level by mastering<br />React and Redux - without missing a day at work!"
            links={header.landingTraining.links}
            type={PART_TIME}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="dark" top>
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
                    <Video youtubeId="E_4eQQHjc7A" />
                    <TrainingDetails coaches={[HORACIO_HERRERA, ALEX_LOBERA]} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>
          <TargetAudienceSection />
          <Section>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumPartTime layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </Section>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

PartTimeBarcelona.defaultProps = {
  pageContext: {},
}

export default PartTimeBarcelona
