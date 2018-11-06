import React from 'react'
import moment from 'moment'
import { LinkButton } from '../components/buttons'
import { Link } from '../components/navigation'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, Span } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumBootcamp } from '../components/curriculum'
import Header from '../components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
} from '../components/training'
import { Card, Video } from '../components/elements'
import CallToActionNextTrainings from '../components/layout/CallToActionNextTrainings'
import { Image } from '../components/elements'
import { OLU } from '../config/images'
import {
  NotBegginersIcon,
  RunFastIcon,
  TargetIcon,
  TickBadgeIcon,
  BulletIcon,
  PeopleNetWorkIcon,
} from '../components/icons'
import { Breadcrumb } from '../components/navigation'
import {
  selectTrainings,
  selectFirstTraining,
  REACT_BOOTCAMP,
} from '../config/data'

const trainings = selectTrainings(REACT_BOOTCAMP)
const nextTraining = selectFirstTraining(REACT_BOOTCAMP)

const Boocamps = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/react-redux-graphql-bootcamp', label: 'React bootcamp' },
      ]}
    />
    <Header
      titleLines={['1-week full-time React, Redux,', 'GraphQL Bootcamp']}
      subtitle="For a week, expert coaches and mentors will work<br />alongside you to master the React ecosystem so<br />you return to work as a React specialist"
      bgImg="full-time"
    />
    <TopSection>
      <Grid>
        <CallToActionNextTrainings left trainings={trainings} />
        <Card border="shadow">
          <CurriculumBootcamp />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col md={5}>
            <Video youtubeID="6hmKu1-vW-8" />
            <P>
              Listen to Polina Stoyanova, a software engineer from tray.io who
              attended our last bootcamp, on her experience at the bootcamp.
            </P>
            <Link to="https://www.youtube.com/channel/UC8eG6zOgWqeIZlJ8KRgEbSQ/videos">
              Watch further testimonials
            </Link>
          </Col>
          <Col md={5} mdOffset={1}>
            <H2>Is this React bootcamp right for me?</H2>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={RunFastIcon} />
                Extremely rapid, intense learning
              </Li>
              <Li>
                <BulletIcon icon={NotBegginersIcon} />
                Ideal for experienced programmers familiar with good practices.
                Not for beginners!
              </Li>
              <Li>
                <BulletIcon icon={TickBadgeIcon} />
                Small classes with expert developer coaches - roughly one for
                every four students
              </Li>
              <Li>
                <BulletIcon icon={TargetIcon} />
                Hands-on project-based training - most of the time you'll be
                coding.
              </Li>
              <Li>
                <BulletIcon icon={PeopleNetWorkIcon} />
                Join a growing network of alumni for advice, knowledge and
                social fun!
              </Li>
            </Ul>
            <P>
              <LinkButton cta to={nextTraining.pathUrl}>
                Next bootcamp:{' '}
                {moment(nextTraining.dateStartsOn).format('D MMM')},{' '}
                {nextTraining.city}
              </LinkButton>
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col lg={10} lgOffset={1}>
            <AttendeeQuote
              quote="Small numbers of students means you’re guaranteed to get the attention you need.  We programmed in pairs, feeding off people sitting next to you who also have a lot of knowledge - something  you don’t get in a lot of training. It’s a really good environment to learn"
              fullname="Olu Omoniyi"
              job="React & React Native Developer"
              company="S&P Global"
              profilePicUrl={OLU}
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <TrustedBySection />
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default Boocamps
