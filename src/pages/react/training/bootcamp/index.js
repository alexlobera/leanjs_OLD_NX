import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { formatUTC } from 'src/components/utils'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumBootcamp } from 'src/components/curriculum'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  getUpcomingTrainingsByType,
  AlternativeTrainings,
} from 'src/components/training'
import { Card, Video } from 'src/components/elements'
import CallToActionNextTrainings from 'src/components/layout/CallToActionNextTrainings'
import { Breadcrumb } from 'src/components/navigation'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  PART_TIME,
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
  ONE_DAY_WORKSHOP,
} from 'src/config/data'
import header from 'src/components/layout/Header.json'
import BlogSection from 'src/components/blog/BlogSection'

const Bootcamps = props => (
  <Layout>
    {({ trainings }) => {
      const upcomingBootCampTrainings = selectUpcomingTrainings({
        type: REACT_BOOTCAMP,
        trainings,
      })
      const nextTraining = selectNthTraining({
        trainings: upcomingBootCampTrainings,
      })
      const reactTrainings = getUpcomingTrainingsByType({
        trainings,
        types: [
          REACT_FUNDAMENTALS,
          REACT_WORKSHOP,
          ADVANCED_REACT,
          ONE_DAY_WORKSHOP,
          PART_TIME,
        ],
        first: 3,
      })

      return (
        <React.Fragment>
          <Helmet
            title="React Bootcamp"
            meta={[
              {
                name: 'description',
                content: 'React Bootcamp - master React in a few days',
              },
            ]}
          />
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/bootcamp',
                label: 'Bootcamp',
              },
            ]}
          />
          <Header
            titleLines={['React, Redux,', 'GraphQL Bootcamp']}
            subtitle="For a few days, expert coaches and mentors will work alongside you <br/> to master the React ecosystem so you return to work as a React specialist"
            bgImageName={BOOTCAMP}
            links={header.landingPageLinks.links}
            type={REACT_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <CallToActionNextTrainings
                left
                trainings={upcomingBootCampTrainings}
              />
              <Card border="shadow">
                <Link to="#upcoming-courses" name="upcoming-courses" />
                <CurriculumBootcamp trainings={upcomingBootCampTrainings} />
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={5} mdOffset={1}>
                  <H2>
                    <Link to="#target-audience" name="target-audience" />
                    Is this React bootcamp right for me?
                  </H2>
                  <Ul>
                    <Li>Extremely rapid, intense learning</Li>
                    <Li>
                      Ideal for experienced programmers familiar with good
                      practices. Not for beginners!
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
                  <P>
                    {nextTraining && (
                      <LinkButton variant="primary" to={nextTraining.toPath}>
                        Next bootcamp:{' '}
                        {formatUTC(
                          nextTraining.startDate,
                          nextTraining.utcOffset,
                          'D MMM'
                        )}
                        , {nextTraining.city}
                      </LinkButton>
                    )}
                  </P>
                </Col>
                <Col md={5}>
                  <Video youtubeId="6hmKu1-vW-8" />
                  <P>
                    Listen to Polina Stoyanova, a software engineer from tray.io
                    who attended our last bootcamp, on her experience at the
                    bootcamp.
                  </P>
                  <Link to="https://www.youtube.com/channel/UC8eG6zOgWqeIZlJ8KRgEbSQ/videos">
                    Watch further testimonials
                  </Link>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section>
            <Grid>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <AlternativeTrainings trainings={reactTrainings} />
                </Col>
              </Row>
            </Grid>
          </Section>
          <TrustedBySection />
          <BlogSection tags={['react', 'beginner']} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default Bootcamps
