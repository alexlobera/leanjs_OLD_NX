import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import CurriculumTestingInReact from 'src/components/curriculum/workshops/CurriculumTestingInReact'
import TargetAudienceList from 'src/components/curriculum/workshops/CurriculumTestingInReact/TargetAudienceList'
import LearningObjectives from 'src/components/curriculum/workshops/CurriculumTestingInReact/LearningObjectivesList'
import { Segment } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import { Link } from 'src/components/navigation'
import { REACT_WORKSHOP, TECH_REACT } from 'src/config/data'
import NextTrainingButton from 'src/components/training/NextTrainingButton'
import { title, trainingId, breadcrumbWorkshopName } from './config.json'

const AdvancedReactWorkshop = ({ path, trainings }) => {
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
          {
            to: '/react/training/workshops',
            label: 'Workshops',
          },
          {
            to: path,
            label: breadcrumbWorkshopName,
          },
        ]}
        tech={TECH_REACT}
        titleLines={[title]}
        subtitle="Learn how to write tests for real-world applications that are flexible and increase the quality"
        links={[
          { text: 'Workshop Agenda', to: '#curriculum' },
          { text: 'Is this right for me?', to: '#target-audience' },
        ]}
        bgImageName={BOOTCAMP}
        type={REACT_WORKSHOP}
      />
      <TopSection>
        <Segment>
          <CurriculumTestingInReact
            section={{ isOpen: true }}
            trainings={trainings}
            trainingId={trainingId}
            learningObjectives={LearningObjectives}
          />
        </Segment>
      </TopSection>
      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              quote="As a freelance developer, I was tired of doing online courses. [The course] was fantastic - the teachers didn't leave a single question unanswered."
              fullname="Rafa Fraga"
              job="Software Engineer"
              youtubeId="hZZksRcqtkc"
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

      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export default AdvancedReactWorkshop
