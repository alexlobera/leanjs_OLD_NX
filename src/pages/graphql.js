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
import { DAVIAN } from '../config/images'
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
  GRAPHQL_BOOTCAMP,
} from '../config/data'
import header from '../components/layout/Header.json'

const trainings = selectTrainings(GRAPHQL_BOOTCAMP)
const nextTraining = selectFirstTraining(GRAPHQL_BOOTCAMP)

const GraphQL = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/graphql', label: 'GraphQL bootcamp' },
      ]}
    />
    <Header
      titleLines={['Take your dev career further', 'by mastering GraphQL']}
      subtitle="In-person development training from industry experts"
      bgImg="full-time"
      links={header.landingPageLinks.links}
      type={GRAPHQL_BOOTCAMP}
    />
    <TopSection>
      <Grid>
        <CallToActionNextTrainings left trainings={trainings} />
        <Card border="shadow">
          <Link to="#upcoming-courses" name="upcoming-courses" />
          <CurriculumBootcamp />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col md={5}>
            <Video youtubeId="6hmKu1-vW-8" />
            <P>
              Listen to Polina Stoyanova, a software engineer from tray.io who
              attended our last bootcamp, on her experience at the bootcamp.
            </P>
            <Link to="https://www.youtube.com/channel/UC8eG6zOgWqeIZlJ8KRgEbSQ/videos">
              Watch further testimonials
            </Link>
          </Col>
          <Col md={5} mdOffset={1}>
            <H2>
              <Link to="#target-audience" name="target-audience" />
              Is this React bootcamp right for me?
            </H2>
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
              quote="After the bootcamp, I felt very very confident. You understand how to use React, how to build components from scratch and then into complex applications. Don’t be afraid - book as quickly as possible!"
              fullname="Davian Robinson"
              job="Senior Software Engineer"
              company="ETZ Payments"
              profilePicUrl={DAVIAN}
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <TrustedBySection />
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default GraphQL
