import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, P, H4 } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import CurriculumStylingAndAdvUI, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI'
import { Card, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  AlternativeTrainingSection,
  ALEX_LOBERA,
  RICHARD_MOSS,
  selectNthTraining,
  selectUpcomingTrainings,
  AttendeeQuote,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  REACT_WORKSHOP,
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  LONDON,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { WORKSHOP_TRAINING_ID } from '../'

const metas = {
  title:
    'Advanced React UIs & Styling With Design Systems Workshop London | React GraphQL Academy',
  description:
    'Interested in Design Systems? React GraphQL Academy offers London Design Systems in React workshops, focussing on the design part of the React ecosystem. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcoming = selectUpcomingTrainings({
        trainings,
        trainingId: WORKSHOP_TRAINING_ID,
        city: LONDON,
      })
      const training = selectNthTraining({
        trainings: upcoming,
        nth,
      })
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        city: LONDON,
        types: [REACT_BOOTCAMP, ADVANCED_REACT, REACT_WORKSHOP],
        excludeTrainingId: WORKSHOP_TRAINING_ID,
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
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to:
                  '/react/training/workshops/advanced-uis-styling-design-systems',
                label: 'Adv UIs and Design Systems',
              },
              {
                to: path,
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={[
              'Advanced React UIs & Styling With Design Systems in London',
            ]}
            subtitle="See in this workshop how React can look gorgeous and encourage design consistency"
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={REACT_WORKSHOP}
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

                  <Video youtubeId="CP422OORbPA" />
                  <TrainingDetails coaches={[ALEX_LOBERA, RICHARD_MOSS]} />
                </Col>
              </Row>
            </Card>
          </TopSection>
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
                  Is this one day workshop right for me? Are you...{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <TargetAudienceList />
                </Ul>
                <P>
                  If you've said 'yes' to these, this workshop could be for you!
                </P>
                <P>
                  If you're a developer who's not yet familar with React, we
                  recommend first attending the{' '}
                  <Link to="/react/training/react-fundamentals/">
                    React Fundamentals Course.
                  </Link>
                </P>
              </Col>
            </Row>
          </Section>
          <Section>
            <Card>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumStylingAndAdvUI layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Card>
          </Section>
          <AlternativeTrainingSection trainings={crossSellTrainings} />
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
