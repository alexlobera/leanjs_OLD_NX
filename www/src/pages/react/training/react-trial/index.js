import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { FAQSection, getMetaData } from 'src/components/training/PageContent'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import CurriculumReactTrial, {
  LearningObjectives,
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactTrial'
import { Segment } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB } from 'src/config/images'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  selectNthTraining,
  selectUpcomingTrainings,
} from 'src/components/training'
import Link from 'src/components/navigation/Link'
import { REACT_WORKSHOP, TECH_REACT } from 'src/config/data'
import { createMetas } from 'src/components/utils'
import { trainingId, breadcrumbTrainingName } from './config.json'
import NextTrainingButton from 'src/components/training/NextTrainingButton'

const defaultMetas = {
  title: 'React Training Trial | React GraphQL Academy',
  description:
    'Are you not sure yet about buying our React training? With this trial of our React training, you will be able to make an informed decision before purchasing the full training',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

const Page = ({ path, trainings, data }) => {
  const upcomingTrials = selectUpcomingTrainings({
    trainingId,
    trainings,
  })

  const nextTraining = selectNthTraining({
    trainings: upcomingTrials,
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
          {
            to: path,
            label: breadcrumbTrainingName,
          },
        ]}
        tech={TECH_REACT}
        titleLines={['3-Hour React Trial']}
        subtitle="With this trial of our React part-time training, you will be able to make an informed decision before purchasing the full training"
        links={[
          { text: 'Workshop Agenda', to: '#curriculum' },
          { text: 'Is this right for me?', to: '#target-audience' },
        ]}
        type={REACT_WORKSHOP}
      />
      <TopSection>
        <Segment>
          <CurriculumReactTrial
            trainings={upcomingTrials}
            trainingId={trainingId}
            enableToggle
            section={{ isOpen: true }}
            learningObjectives={LearningObjectives}
            pageData={data.sanityTrainingPage}
          />
        </Segment>
      </TopSection>

      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              type={TECH_REACT}
              quote="[The coaches] are very important - they're able to explain things in a way we can understand."
              fullname="Jim Plimmer"
              job="Developer"
              company="Conversion.com"
              youtubeId="GU-IIi-84t8"
            />
          </Col>
          <Col md={4} lgOffset={1}>
            <H2Ref>
              Is this 3-hour trial right for me? Are you...{' '}
              <Link to="#target-audience" name="target-audience">
                #
              </Link>
            </H2Ref>
            <Ul>
              <TargetAudienceList />
            </Ul>
            <P>If you've said 'yes' to these, this trial could be for you!</P>
            <H3>Not for beginner devs!</H3>
            <P>This is not a learn-to-code course!</P>
            <NextTrainingButton type="workshop" training={nextTraining} />
          </Col>
        </Row>
      </Section>
      <FAQSection pageData={data.sanityTrainingPage} />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  query reactTrial($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`

export default Page
