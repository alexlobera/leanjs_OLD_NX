import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { FAQSection, getMetaData } from 'src/components/training/PageContent'
import { BOOTCAMP } from 'src/../images/imageNames'
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
import {
  TECH_REACT,
  TRAINING_TYPE_WORKSHOP,
  REACT_WORKSHOP_REACT_NATIVE_ID,
} from 'src/config/data'
import header from 'src/components/layout/Header.json'
import NextTrainingButton from 'src/components/training/NextTrainingButton'
import { title, breadcrumbWorkshopName } from './config.json'
import { createMetas } from 'src/components/utils'

const trainingId = REACT_WORKSHOP_REACT_NATIVE_ID

const defaultMetas = {
  title: `React Native Workshop | React GraphQL Academy`,
  type: 'website',
}

const ReactNativeBoocamp = ({ path, trainings, data }) => {
  const nextTraining = getNextTrainingByTrainingId({
    trainings,
    trainingId,
  })

  const metas = getMetaData({ defaultMetas, metaData: data.sanityTrainingPage })

  return (
    <React.Fragment>
      <Helmet title={metas.title}>{createMetas(metas)}</Helmet>
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
        trainingType={TRAINING_TYPE_WORKSHOP}
        links={header.landingPageLinks.links}
        pageData={data.sanityTrainingPage}
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
      <FAQSection pageData={data.sanityTrainingPage} />
      <TrustedBySection />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  query reactNativeWorkshop($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`

export default ReactNativeBoocamp
