import React from 'react'
import moment from 'moment'
import { LinkButton } from '../components/buttons'
import { Link } from '../components/navigation'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, Span } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumAdvancedReact } from '../components/curriculum'
import Header from '../components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
} from '../components/training'
import { Card, Video } from '../components/elements'
import CallToActionNextTrainings from '../components/layout/CallToActionNextTrainings'
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
import { selectTrainings, ADVANCED_REACT } from '../config/data'

const trainings = selectTrainings(ADVANCED_REACT)
const startDate = moment(trainings[0].dateStartsOn).format('D MMM')

const Boocamps = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        {
          to: '/advanced-react-redux-graphql-bootcamp',
          label: 'Advanced React',
        },
      ]}
    />
    <Header
      titleLines={['Advanced React, Redux,', 'GraphQL Bootcamp']}
      subtitle="For 3 days, expert coaches and mentors will work<br />alongside you to master the React ecosystem so<br />you return to work as a Senior React developer"
      bgImg="full-time"
      type={ADVANCED_REACT}
    />
    <TopSection>
      <Grid>
        <CallToActionNextTrainings left trainings={trainings} />
        <Card border="shadow">
          <CurriculumAdvancedReact />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col md={5}>
            <Video youtubeId="1TLeIEkyUE4" />
            <P>
              Listen to Ben Parish, a senior developer who attended our last
              bootcamp, on his experience at the bootcamp.
            </P>
            <Link to="https://www.youtube.com/channel/UC8eG6zOgWqeIZlJ8KRgEbSQ/videos">
              Watch further testimonials
            </Link>
          </Col>
          <Col md={5} mdOffset={1}>
            <H2>Is this advanced React bootcamp right for me?</H2>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={RunFastIcon} />
                Extremely rapid, intense learning
              </Li>
              <Li>
                <BulletIcon icon={NotBegginersIcon} />
                Ideal for{' '}
                <strong>
                  React developers with 1+ year of profesional experience
                </strong>
                . Not for React beginners!
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
              <LinkButton cta to="/react-redux-graphql-bootcamp-lisbon">
                Next one: {`${startDate}, ${trainings[0].city} >>`}
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
              quote="Small numbers of students means you get the attention you need.  We programmed in pairs, feeding off other experienced students - something you don’t get in a lot of training. It’s a really good environment to learn"
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
