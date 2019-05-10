import React from 'react'
import styled from 'styled-components'
import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import { formatUTC, SCREEN_XS_MAX } from 'src/components/utils'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P, H3 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CallToActionRow } from '../../../components/layout/CallToActionNextTrainings'
import { CurriculumGraphQL } from '../../../components/curriculum'
import { CurriculumBootcamp } from 'src/components/curriculum'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { Card, Image, Video } from 'src/components/elements'

import {
  CodeIcon,
  CollabsIcon,
  ProductionReadyIcon,
  StarIcon,
  TrainerIcon,
  BulletIcon,
} from 'src/components/icons'

import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_BOOTCAMP, CONVINCE_THE_BOSS_PDF } from 'src/config/data'
import header from 'src/components/layout/Header.json'

const SectionButtonRow = styled(Row)`
  margin-top: 30px;
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      margin-top: 5px;
      display: block;
    }
  }
`

const TrainingPage = props => (
  <Layout>
    {({ trainings }) => {
      const upcomingBootCampTrainings = selectUpcomingTrainings({
        type: GRAPHQL_BOOTCAMP,
        trainings,
      })
      const nextTraining = selectNthTraining({
        trainings: upcomingBootCampTrainings,
      })
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              {
                to: '/graphql',
                label: 'GraphQL',
              },
              {
                to: '/graphql/training',
                label: 'Training',
              },
            ]}
          />
          <Header
            titleLines={['GraphQL Training Courses']}
            subtitle="Take your development career to the next level and learn how to use GraphQL effectively"
            bgImageName={BOOTCAMP}
            links={[
              {
                text: 'Curriculum',
                to: '#curriculum',
              },
              {
                text: 'Upcoming Courses',
                to: '#upcoming-courses',
              },
              {
                text: 'Free Learning Resources',
                to: '#free-learning-resources',
              },
              {
                text: 'Corporate Training',
                to: '#corporate-training',
              },
              {
                text: 'Student Outcomes',
                to: '#student-outcomes',
              },
            ]}
            type={GRAPHQL_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <CallToActionRow>
                <Col xs={12} sm={4}>
                  <LinkButton
                    variant="primary"
                    to="/graphql/training/bootcamp"
                    children="1-week Bootcamp"
                  />
                </Col>
                <Col xs={12} sm={3}>
                  <LinkButton
                    to="/graphql/training/corporate"
                    children="Corporate Team Training"
                    variant="secondary"
                  />
                </Col>
              </CallToActionRow>
              <Card border="shadow">
                <CurriculumGraphQL trainings={trainings} />
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={5}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/homepage_rightForMe.jpg?alt=media&" />
                </Col>
                <Col md={5} mdOffset={1}>
                  <Link to="#student-outcomes" name="student-outcomes" />
                  <H2>What students get from a our training</H2>
                  <Ul unstyled>
                    <Li>
                      <BulletIcon icon={ProductionReadyIcon} />
                      <strong>Build production ready</strong> apps.
                    </Li>
                    <Li>
                      <BulletIcon icon={CollabsIcon} />
                      Discuss <strong>real-world projects</strong>.
                    </Li>
                    <Li>
                      <BulletIcon icon={StarIcon} />
                      Learn <strong>best practices</strong>.
                    </Li>
                    <Li>
                      <BulletIcon icon={TrainerIcon} />
                      <strong>Mentoring</strong> by our expert coaches.
                    </Li>
                    <Li>
                      <BulletIcon icon={CodeIcon} />
                      <strong>Stay tech-relevent</strong> in modern development.
                    </Li>
                  </Ul>
                  <LinkButton pdf to={CONVINCE_THE_BOSS_PDF}>
                    Download: Why Devs Should Learn With Us
                  </LinkButton>
                  <H3>Not for beginner devs!</H3>
                  <P>
                    <strong>We do not run learn-to-code bootcamps</strong>. If
                    you want to learn to code, we recommend you to contact our
                    London-based partner{' '}
                    <Link to="https://makers.tech/">Makers</Link>. PLUS you'll
                    get a &pound;250 discount using our reference "ReactJS
                    Academy".
                  </P>
                  <Link to="/blog/the-perfect-react-bootcamp-student/">
                    Blog: Are YOU the Perfect React Student?
                  </Link>
                </Col>
              </Row>
            </Grid>
          </Section>
          <TrustedBySection />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default TrainingPage
