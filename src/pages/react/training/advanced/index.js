import React from 'react'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { formatUTC } from 'src/components/utils'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumAdvancedReact } from 'src/components/curriculum'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { Card, Video } from 'src/components/elements'
import CallToActionNextTrainings from 'src/components/layout/CallToActionNextTrainings'
import { OLU } from 'src/config/images'
import { Breadcrumb } from 'src/components/navigation'
import { ADVANCED_REACT } from 'src/config/data'

const AdvancedTraining = () => (
  <Layout>
    {({ trainings }) => {
      const upcomingAdvancedTrainings = selectUpcomingTrainings({
        type: ADVANCED_REACT,
        trainings,
      })
      const nextTraining = selectNthTraining({
        trainings: upcomingAdvancedTrainings,
      })
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/advanced',
                label: 'Advanced',
              },
            ]}
          />
          <Header
            titleLines={['Advanced React Training']}
            subtitle="For 3 days, expert coaches and mentors will work<br />alongside you to master the React ecosystem so<br />you return to work as a Senior React developer"
            bgImageName={BOOTCAMP}
            type={ADVANCED_REACT}
          />
          <TopSection>
            <Grid>
              <CallToActionNextTrainings
                left
                trainings={upcomingAdvancedTrainings}
              />
              <Card border="shadow">
                <CurriculumAdvancedReact
                  trainings={upcomingAdvancedTrainings}
                />
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={5}>
                  <Video youtubeId="1TLeIEkyUE4" />
                  <P>
                    Listen to Ben Parish, a senior developer who attended our
                    last bootcamp, on his experience at the bootcamp.
                  </P>
                  <Link to="https://www.youtube.com/channel/UC8eG6zOgWqeIZlJ8KRgEbSQ/videos">
                    Watch further testimonials
                  </Link>
                </Col>
                <Col md={5} mdOffset={1}>
                  <H2>Is this advanced React training right for me?</H2>
                  <Ul>
                    <Li>Extremely rapid, intense learning</Li>
                    <Li>
                      Ideal for{' '}
                      <strong>
                        React developers with 1+ year of profesional experience
                      </strong>
                      . Not for React beginners!
                    </Li>
                    <Li>
                      Small classes with expert developer coaches - roughly one
                      for every four students
                    </Li>
                    <Li>
                      Hands-on project-based training - most of the time you'll
                      be coding.
                    </Li>
                    <Li>
                      Join a growing network of alumni for advice, knowledge and
                      social fun!
                    </Li>
                  </Ul>
                  {nextTraining ? (
                    <P>
                      <LinkButton variant="primary" to={nextTraining.toPath}>
                        Next one:{' '}
                        {`${formatUTC(
                          nextTraining.startDate,
                          nextTraining.utcOffset,
                          'D MMM'
                        )}, ${nextTraining.city} >>`}
                      </LinkButton>
                    </P>
                  ) : null}
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
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default AdvancedTraining
