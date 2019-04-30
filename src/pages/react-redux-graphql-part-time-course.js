import React from 'react'
import { Link, Breadcrumb } from '../components/navigation'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2 } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  TrustedBySection,
  withUpcomingTrainings,
  selectUpcomingTrainings,
  selectNthTraining,
} from '../components/training'
import { formatUTC } from '../components/utils'

import { Card, Video } from '../components/elements'
import { CurriculumPartTime } from '../components/curriculum'
import Header from '../components/layout/Header'
import CallToActionNextTrainings from '../components/layout/CallToActionNextTrainings'
import {
  CollabsIcon,
  NotBegginerIcon,
  NotBegginersIcon,
  SpannerIcon,
  TrainerIcon,
  BulletIcon,
  DiscussIcon,
} from '../components/icons'
import { STEFANO } from '../config/images'
import { PART_TIME } from '../config/data'
import header from '../components/layout/Header.json'

const PartTime = ({ trainings }) => {
  const upcomingPartTimeTrainings = selectUpcomingTrainings({
    type: PART_TIME,
    trainings,
  })
  const nextTraining = selectNthTraining({
    trainings: upcomingPartTimeTrainings,
  })

  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: '/react-redux-graphql-part-time-course', label: 'Part-time' },
        ]}
      />
      <Header
        titleLines={['5-week part-time', 'React Redux course']}
        subtitle="Expert coaches work with you, 2 evenings a week, <br /> to master React without having to cut into valuable work-days"
        bgImg="part-time"
        type={PART_TIME}
        links={header.landingPageLinks.links}
      />
      <TopSection>
        <Grid>
          <CallToActionNextTrainings trainings={upcomingPartTimeTrainings} />
          <Card border="shadow">
            <Link to="#upcoming-courses" name="upcoming-courses" />
            <CurriculumPartTime
              trainings={upcomingPartTimeTrainings}
              showCallToActionBottom={true}
            />
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
              <Link to="#target-audience" name="target-audience" />
              <H2>Is this React part-time course right for me?</H2>
              <Ul unstyled>
                <Li>
                  <BulletIcon icon={CollabsIcon} />
                  Meaningful, collaborative learning
                </Li>
                <Li>
                  <BulletIcon icon={TrainerIcon} />
                  Personal mentoring rather than online learning
                </Li>
                <Li>
                  <BulletIcon icon={SpannerIcon} />
                  Don't miss work days or projects - only 2 evenings a week
                </Li>
                <Li>
                  <BulletIcon icon={NotBegginersIcon} />
                  Not for beginners! Looking for a{' '}
                  <Link to="https://makers.tech/">
                    Learn-to-Code course?
                  </Link>{' '}
                </Li>
                <Li>
                  <BulletIcon icon={DiscussIcon} />
                  Discuss real-world projects to learn best practices
                </Li>
                <Li>
                  <BulletIcon icon={NotBegginerIcon} />
                  Expert coaches with extensive React experience
                </Li>
              </Ul>
              {nextTraining && (
                <LinkButton cta to={nextTraining.toPath}>
                  Next bootcamp:{' '}
                  {formatUTC(
                    nextTraining.startDate,
                    nextTraining.utcOffset,
                    'D MMM'
                  )}
                  , {nextTraining.city}
                </LinkButton>
              )}
            </Col>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Row>
            <Col lg={10} lgOffset={1}>
              <AttendeeQuote
                quote="I like the fact that you meet other students that are workers in the same professional conditions as you - you share those experiences. I really felt comfortable during the training."
                fullname="Stefano Mezza"
                job="Core Developer"
                company="SISLAB UniTN"
                profilePicUrl={STEFANO}
              />
            </Col>
          </Row>
        </Grid>
      </Section>

      <TrustedBySection />

      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export default withUpcomingTrainings()(PartTime)
