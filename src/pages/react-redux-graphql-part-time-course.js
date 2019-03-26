import React from 'react'
import moment from 'moment'
import { Query } from 'react-apollo'
import { Link, Breadcrumb } from '../components/navigation'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  TrustedBySection,
} from '../components/training'
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
import { PART_TIME as PART_TIME_IMG, STEFANO } from '../config/images'
import { selectTrainings, selectFirstTraining, PART_TIME } from '../config/data'
import header from '../components/layout/Header.json'
import GET_TRAINING_INSTANCES from '../components/training/query/getTrainingInstances.graphql'

// const trainings = selectTrainings(PART_TIME)
const nextTraining = selectFirstTraining(PART_TIME)

const PartTime = () => (
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
        <Query query={GET_TRAINING_INSTANCES}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Sorry there was an error :-(`

            return (
              <CallToActionNextTrainings
                left
                type="Part-time"
                trainings={data.trainingInstancesConnection.edges}
              />
            )
          }}
        </Query>
        <Card border="shadow">
          <Link to="#upcoming-courses" name="upcoming-courses" />
          <CurriculumPartTime showCallToActionBottom={true} />
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
            <LinkButton cta to={nextTraining.pathUrl}>
              Next bootcamp: {moment(nextTraining.dateStartsOn).format('D MMM')}
              , {nextTraining.city}
            </LinkButton>
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

    <UpcomingTrainingSection />
  </React.Fragment>
)

export default PartTime
