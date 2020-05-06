import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { FAQSection, getMetaData } from 'src/components/training/PageContent'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumOneDayReactReason'
import { Segment } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
  AlternativeTrainingSection,
  selectUpcomingTrainings,
  TrustedBySection,
} from 'src/components/training'
import BlogSection from 'src/components/blog/BlogSection'

import Link from 'src/components/navigation/Link'
import NextTrainingButton from 'src/components/training/NextTrainingButton'
import {
  TECH_REACT,
  TRAINING_TYPE_WORKSHOP,
  REACT_WORKSHOP_REACT_REASON_ID,
} from 'src/config/data'
import {
  title,
  tech,
  breadcrumbTrainingName,
  breadcrumbWorkshopName,
  tags,
} from './config.json'
import { crossSellTypes } from 'src/templates/instance/1-day-react-reasonml'
import { createMetas } from 'src/components/utils'

const trainingId = REACT_WORKSHOP_REACT_REASON_ID

const defaultMetas = {
  title: `React Reason Workshop | React GraphQL Academy`,
  type: 'website',
}

const ReactReasonLanding = ({ path, trainings, data }) => {
  const nextTraining = getNextTrainingByTrainingId({
    trainings,
    trainingId,
  })

  const crossSellTrainings = selectUpcomingTrainings({
    trainings,
    types: crossSellTypes,
    excludeTrainingId: trainingId,
  })

  const metas = getMetaData({ defaultMetas, metaData: data.sanityTrainingPage })

  return (
    <React.Fragment>
      <Helmet title={metas.title}>{createMetas(metas)}</Helmet>
      <Header
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          { to: '/react', label: tech },
          { to: '/react/training/', label: 'Training' },
          {
            to: '/react/training/workshops',
            label: breadcrumbTrainingName,
          },
          {
            to: path,
            label: breadcrumbWorkshopName,
          },
        ]}
        tech={TECH_REACT}
        titleLines={[title]}
        subtitle="Learn how and why we should write our code in ReasonML, plus use cases of using ReasonML in new or existing React projects"
        links={[
          { text: 'Workshop Agenda', to: '#curriculum' },
          { text: 'Is this right for me?', to: '#target-audience' },
        ]}
        trainingType={TRAINING_TYPE_WORKSHOP}
      />
      <TopSection>
        <Segment>
          <Curriculum
            section={{ isOpen: true }}
            trainings={trainings}
            trainingId={trainingId}
            pageData={data.sanityTrainingPage}
          />
        </Segment>
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
            <H3>Not for React beginners!</H3>
            <NextTrainingButton type="workshop" training={nextTraining} />
          </Col>
        </Row>
      </Section>
      <FAQSection pageData={data.sanityTrainingPage} />
      <AlternativeTrainingSection trainings={crossSellTrainings} />
      <TrustedBySection />
      <BlogSection tags={tags} />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  query reactReasonWorkshop($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`

export default ReactReasonLanding
