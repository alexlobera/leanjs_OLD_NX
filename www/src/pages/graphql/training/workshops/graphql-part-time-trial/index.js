import React from 'react'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumGraphQLPartTimeTrial, {
  LearningObjectives,
} from 'src/components/curriculum/workshops/CurriculumGraphQLPartTimeTrial'
import { Segment } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB } from 'src/config/images'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import { Link } from 'src/components/navigation'
import { GRAPHQL_WORKSHOP, TECH_GRAPHQL } from 'src/config/data'
import { createMetas } from 'src/components/utils'
import { trainingId, breadcrumbWorkshopName } from './config.json'
import NextTrainingButton from 'src/components/training/NextTrainingButton'

const metas = {
  title: 'GraphQL Part-Time Course Trial | React GraphQL Academy',
  description:
    'Are you not sure yet about buying our GraphQL part-time course? With this trial of our GraphQL part-time course, you will be able to make an informed decision before purchasing the full course',
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
          { to: '/graphql', label: 'GraphQL' },
          { to: '/graphql/training/', label: 'Training' },
          { to: '/graphql/training/workshops', label: 'Workshops' },
          {
            to: path,
            label: breadcrumbWorkshopName,
          },
        ]}
        tech={TECH_GRAPHQL}
        titleLines={['3-Hour GraphQL Trial']}
        subtitle="With this trial of our GraphQL part-time course, you will be able to make an informed decision before purchasing the full course"
        links={[
          { text: 'Workshop Agenda', to: '#curriculum' },
          { text: 'Is this right for me?', to: '#target-audience' },
        ]}
        bgImageName={LONDON_BOOTCAMP}
        type={GRAPHQL_WORKSHOP}
      />
      <TopSection>
        <Segment>
          <CurriculumGraphQLPartTimeTrial
            trainings={trainings}
            trainingId={trainingId}
            enableToggle
            type={GRAPHQL_WORKSHOP}
            section={{ isOpen: true }}
            learningObjectives={LearningObjectives}
          />
        </Segment>
      </TopSection>

      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              type={GRAPHQL_WORKSHOP}
              quote="As a freelance developer, I was tired of doing online courses. [The course] was fantastic - the teachers didn't leave a single question unanswered."
              fullname="Rafa Fraga"
              job="Software Engineer"
              youtubeId="hZZksRcqtkc"
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
              <Li>
                A developer with some experience developing Nodes.js APIs?
              </Li>
              <Li>
                Familiar with front-end technologies like React (used during the
                GraphQL part-time course) and JavaScript?
              </Li>
              <Li>
                Taking a step forward to become a GraphQL Specialist to build
                modern and efficient APIs?
              </Li>
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
