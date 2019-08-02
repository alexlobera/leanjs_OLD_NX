import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2 } from 'src/components/text'
import { Link } from 'src/components/navigation'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumReactNative from 'src/components/curriculum/workshops/CurriculumReactNative'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import { Card } from 'src/components/elements'
import { Video } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { REACT_NATIVE } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import NextTrainingButton from 'src/components/training/NextTrainingButton'

export const title = '1-Day React Native Workshop'
export const WORKSHOP_TRAINING_ID = '5b68c76daff9b939d15e5099'

const ReactNativeBoocamp = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const nextTraining = getNextTrainingByTrainingId({
        trainings,
        trainingId: WORKSHOP_TRAINING_ID,
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
                label: '1-Day React Native',
              },
            ]}
          />
          <Header
            titleLines={[title]}
            subtitle="Intense hands-on React Native workshop, <br /> return to work as a React Native specialist"
            bgImageName={BOOTCAMP}
            type={REACT_NATIVE}
            links={header.landingPageLinks.links}
          />
          <TopSection>
            <Card>
              <Link to="#upcoming-courses" name="upcoming-courses" />
              <CurriculumReactNative />
            </Card>
          </TopSection>
          <Section>
            <Row>
              <Col md={5}>
                <Video youtubeId="Z4s1gf09oeY" />
              </Col>
              <Col md={5} mdOffset={1}>
                <Link to="#target-audience" name="target-audience" />
                <H2>Is this React Native training right for me?</H2>
                <Ul>
                  <Li>
                    Ideal for React developers who want to expand their skills
                    into React Native. <strong>Not for React beginners!</strong>
                  </Li>
                  <Li>Extremely rapid, intense learning</Li>
                  <Li>Small classes with expert developer coaches</Li>
                  <Li>
                    Hands-on project-based training - most of the time you'll be
                    coding.
                  </Li>
                  <Li>
                    Join a growing network of alumni for advice, knowledge and
                    social fun!
                  </Li>
                </Ul>
                <NextTrainingButton type="workshop" training={nextTraining} />
              </Col>
            </Row>
          </Section>
          <Section>
            <Row>
              <Col lg={10} lgOffset={1}>
                <AttendeeQuote
                  quote="I like how friendly the training was. I loved spending time pair programming and then sharing what we'd learnt from each other - that was the best bit. I would definitely recommend [React GraphQL Academy]."
                  fullname="Polina Stoyanova"
                  job="Front-end and UX developer"
                  company="tray.io"
                  youtubeId="6hmKu1-vW-8"
                />
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
