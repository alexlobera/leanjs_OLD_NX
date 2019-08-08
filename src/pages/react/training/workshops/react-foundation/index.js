import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
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
import { Link, Breadcrumb } from 'src/components/navigation'
import { REACT_WORKSHOP } from 'src/config/data'
import { title, trainingId, breadcrumbTrainingName } from './config.json'

const Workshop = ({ path }) => (
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
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to: path,
                label: breadcrumbTrainingName,
              },
            ]}
          />
          <Header
            titleLines={[title]}
            subtitle="Get started with React by creating a solid foundation that will help you speed up your career as React developer "
            links={[
              { text: 'Workshop Agenda', to: '#curriculum' },
              { text: 'Is this right for me?', to: '#target-audience' },
            ]}
            bgImageName={BOOTCAMP}
            type={REACT_WORKSHOP}
          />
          <TopSection>
            <Segment>
              <CurriculumReactFoundation
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
    }}
  </Layout>
)

export default Workshop
