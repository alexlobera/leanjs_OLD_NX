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
import { FullCurriculumsReact } from '../../../components/curriculum'
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
import CallToActionNextTrainings from 'src/components/layout/CallToActionNextTrainings'
import { DAVIAN, COURSE_COLLAB } from 'src/config/images'
import {
  NotBegginersIcon,
  RunFastIcon,
  TargetIcon,
  TickBadgeIcon,
  PeopleNetWorkIcon,
  BussinessIcon,
  CalendarIcon,
  CodeIcon,
  CollabsIcon,
  EnterMindIcon,
  HeartIcon,
  NotBegginerIcon,
  ProductionReadyIcon,
  SpannerIcon,
  StarIcon,
  TimeIcon,
  TrainerIcon,
  ReactIcon,
  BulletIcon,
} from 'src/components/icons'

import { Breadcrumb } from 'src/components/navigation'
import { REACT_BOOTCAMP, CONVINCE_THE_BOSS_PDF } from 'src/config/data'
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
        type: REACT_BOOTCAMP,
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
                to: '/react',
                label: 'React',
              },
              {
                to: '/react/training',
                label: 'Training',
              },
            ]}
          />
          <Header
            titleLines={['React Training Courses']}
            subtitle="Take your development career to the next level and move into the React ecosystem"
            bgImageName={BOOTCAMP}
            links={[
              {
                text: 'Curriculum',
                to: '#please-change-paul',
              },
              {
                text: 'Upcoming Courses',
                to: '#please-change-paul',
              },
              {
                text: 'Free Learning Resources',
                to: '#please-change-paul',
              },
              {
                text: 'Corporate Training',
                to: '#please-change-paul',
              },
              {
                text: 'Student Outcomes',
                to: '#please-change-paul',
              },
            ]}
            type={REACT_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <CallToActionRow>
                <Col xs={12} sm={3}>
                  <LinkButton
                    variant="primary"
                    to="/react/training/bootcamp"
                    children="7-Day Bootcamp "
                  />
                </Col>
                <Col xs={12} sm={3}>
                  <LinkButton
                    to="/graphql/training/bootcamp"
                    children="Part-Time Course"
                    variant="secondary"
                  />
                </Col>
                <Col xs={12} sm={3}>
                  <LinkButton
                    variant="secondary"
                    to="/corporate-team-training/"
                    children="React Advanced"
                  />
                </Col>
                <Col xs={12} sm={3}>
                  <LinkButton
                    variant="secondary"
                    to="/corporate-team-training/"
                    children="Workshops"
                  />
                </Col>
              </CallToActionRow>
              <Card border="shadow">
                <Link to="#upcoming-courses" name="upcoming-courses" />
                <FullCurriculumsReact trainings={trainings} />
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={5}>
                  <Video youtubeId="E_4eQQHjc7A" />
                </Col>
                <Col md={5} mdOffset={1}>
                  <H2>What students get from a our training</H2>
                  <Ul unstyled>
                    <Li>
                      <BulletIcon icon={ProductionReadyIcon} />
                      <strong>Build production ready</strong> React apps.
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
