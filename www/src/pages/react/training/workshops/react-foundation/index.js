import React from 'react'
import Helmet from 'react-helmet'

import { FAQ } from 'src/components/training/PageContent'
import { BOOTCAMP } from 'src/../images/imageNames'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import CurriculumReactFoundation, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactFoundation'
import { Segment } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import NextTrainingButton from 'src/components/training/NextTrainingButton'
import { Link } from 'src/components/navigation'
import {
  TECH_REACT,
  TRAINING_TYPE_WORKSHOP,
  REACT_WORKSHOP_FOUNDATION_ID,
} from 'src/config/data'
import { title, breadcrumbWorkshopName } from './config.json'

const trainingId = REACT_WORKSHOP_FOUNDATION_ID

const Workshop = ({ path, trainings, data }) => {
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
        subtitle="Get started with React by creating a solid foundation that will help you speed up your career as React developer "
        links={[
          { text: 'Workshop Agenda', to: '#curriculum' },
          { text: 'Is this right for me?', to: '#target-audience' },
        ]}
        bgImageName={BOOTCAMP}
        trainingType={TRAINING_TYPE_WORKSHOP}
      />
      <TopSection>
        <Segment>
          <CurriculumReactFoundation
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
              quote="We're moving to React so I've looked at the codebase to identify where we could be using advanced patterns..."
              fullname="Lara Ramey"
              job="Software Developer"
              company="Meredith Corporation"
              youtubeId="blg40SCle7I"
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
            <NextTrainingButton type="workshop" training={nextTraining} />
          </Col>
        </Row>
      </Section>
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  query reactFoundationWorkshop($path: String) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`

export default Workshop
