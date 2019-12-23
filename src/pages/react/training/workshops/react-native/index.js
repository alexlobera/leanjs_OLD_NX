import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2 } from 'src/components/text'
import { Link } from 'src/components/navigation'
import Ul from 'src/components/layout/Ul'
import CurriculumReactNative, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactNative3Day'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import { REACT_WORKSHOP, TECH_REACT } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import NextTrainingButton from 'src/components/training/NextTrainingButton'
import { title, trainingId, breadcrumbWorkshopName } from './config.json'

const ReactNativeBoocamp = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const nextTraining = getNextTrainingByTrainingId({
        trainings,
        trainingId,
      })
      return (
        <React.Fragment>
          <Helmet
            title={title}
            meta={[
              {
                name: 'description',
                content: title,
              },
            ]}
          />
          <Header
            breadcrumbPath={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to: path,
                label: breadcrumbWorkshopName,
              },
            ]}
            tech={TECH_REACT}
            titleLines={[title]}
            subtitle="3-day React Native Immersive training, <br /> return to work as a React Native specialist"
            bgImageName={BOOTCAMP}
            type={REACT_WORKSHOP}
            links={header.landingPageLinks.links}
          />
          <TopSection>
            <Segment>
              <CurriculumReactNative
                section={{ isOpen: true }}
                trainings={trainings}
                trainingId={trainingId}
              />
            </Segment>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="Demystifying Complex Animations Creation Process in React Native"
                  fullname="Vladimir Novick"
                  youtubeId="aOiq-xNSqRo"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <Link to="#target-audience" name="target-audience" />
                <H2>Is this React Native training right for me?</H2>
                <Ul>
                  <TargetAudienceList />
                </Ul>
                <NextTrainingButton type="workshop" training={nextTraining} />
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

export default ReactNativeBoocamp
