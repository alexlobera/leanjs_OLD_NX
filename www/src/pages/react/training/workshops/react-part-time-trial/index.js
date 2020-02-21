import React from 'react'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import CurriculumReactPartTimeTrial, {
  LearningObjectives,
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactPartTimeTrial'
import { Segment } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB } from 'src/config/images'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import Link from 'src/components/navigation/Link'
import { REACT_WORKSHOP, TECH_REACT } from 'src/config/data'
import { createMetas } from 'src/components/utils'
import { trainingId, breadcrumbWorkshopName } from './config.json'
import NextTrainingButton from 'src/components/training/NextTrainingButton'

const metas = {
  title: 'React Part-Time Trial | React GraphQL Academy',
  description:
    'Are you not sure yet about buying our React part-time training course? With this trial of our React part-time training course, you will be able to make an informed decision before purchasing the full training course',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

const Page = ({ path, trainings }) => {
  const nextTraining = getNextTrainingByTrainingId({
    trainings,
    trainingId,
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
        {createMetas(metas)}
      </Helmet>
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
        titleLines={['3-Hour React Trial']}
        subtitle="With this trial of our React part-time training course, you will be able to make an informed decision before purchasing the full training course"
        links={[
          { text: 'Workshop Agenda', to: '#curriculum' },
          { text: 'Is this right for me?', to: '#target-audience' },
        ]}
        bgImageName={LONDON_BOOTCAMP}
        type={REACT_WORKSHOP}
      />
      <TopSection>
        <Segment>
          <CurriculumReactPartTimeTrial
            trainings={trainings}
            trainingId={trainingId}
            enableToggle
            type={REACT_WORKSHOP}
            section={{ isOpen: true }}
            learningObjectives={LearningObjectives}
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

      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export default Page
