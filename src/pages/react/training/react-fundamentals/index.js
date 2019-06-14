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
import { CurriculumReactFundamentals } from 'src/components/curriculum'
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
import { DAVIAN } from 'src/config/images'
import { Breadcrumb } from 'src/components/navigation'
import { REACT_FUNDAMENTALS } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import BlogSection from 'src/components/blog/BlogSection'

const ReactFundamentals = props => (
  <Layout>
    {({ trainings }) => {
      const upcomingFundamentalsTrainings = selectUpcomingTrainings({
        type: REACT_FUNDAMENTALS,
        trainings,
      })
      const nextTraining = selectNthTraining({
        trainings: upcomingFundamentalsTrainings,
      })
      return (
        <React.Fragment>
          <Helmet
            title="React Fundamentals"
            meta={[
              {
                name: 'description',
                content:
                  'React Fundamentals - learn the foundation in React you need to create great apps',
              },
            ]}
          />
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/react-fundamentals',
                label: 'React Fundamentals',
              },
            ]}
          />
          <Header
            titleLines={['React, Redux Fundamentals']}
            subtitle="In 3 days, our coaches will work with you and help you use React ecosystem giving you a solid foundation for your career in React."
            bgImageName={BOOTCAMP}
            links={header.landingPageLinks.links}
            type={REACT_FUNDAMENTALS}
          />
          <TopSection>
            <Grid>
              <CallToActionNextTrainings
                left
                trainings={upcomingFundamentalsTrainings}
              />
              <Card border="shadow">
                <Link to="#upcoming-courses" name="upcoming-courses" />
                <CurriculumReactFundamentals
                  trainings={upcomingFundamentalsTrainings}
                />
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={5} mdOffset={1}>
                  <H2>
                    <Link to="#target-audience" name="target-audience" />
                    Is the React Fundamentals course right for me?
                  </H2>
                  <Ul>
                    <Li>
                      <strong>Not for beginners!</strong> Ideal for experienced
                      programmers with at least 1 year's experience with
                      JavaScript
                    </Li>
                    <Li>Extremely rapid, intense learning</Li>
                    <Li>
                      Small classes with expert devs - roughly one for every
                      four students
                    </Li>
                    <Li>
                      Hands-on project-based training - most of the time you'll
                      be coding.
                    </Li>
                  </Ul>
                  <P>
                    {nextTraining && (
                      <LinkButton variant="primary" to={nextTraining.toPath}>
                        Next training:{' '}
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
                    who attended our last bootcamp, on her experience at our
                    React bootcamp.
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
          <BlogSection tags={['react', 'beginner']} />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default ReactFundamentals
