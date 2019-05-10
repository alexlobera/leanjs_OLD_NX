import React from 'react'
import styled from 'styled-components'
import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, H3, H4, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { Card, Video } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { REACT_BOOTCAMP } from 'src/config/data'

const LearningResource = styled.div`
  img {
    max-height: 5rem;
    width: 100%;
    object-fit: cover;
    margin-bottom: 0;
  }
  h4 p {
    margin: 0.5rem 2rem;
  }
  h4 {
    margin-top: 1rem;
  }
`

const LearningResourceWrapper = styled.div`
  margin-top: 2rem;
`

const TrainingType = styled.div`
  border-left: 5px solid blue;
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 2rem 1rem 0;
  button {
    display: inline-block;
  }
`

const MoreFreeResouces = styled.div``

const ReactPage = props => (
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
            ]}
          />
          <Header
            titleLines={['Learn React with us...']}
            subtitle="Move into the future of development with the React Ecosystem"
            bgImageName={BOOTCAMP}
            links={[
              {
                text: 'Free React Learning',
                to: '#free-react-resources',
              },
              {
                text: 'Our React training',
                to: '#our-react-training',
              },
              {
                text: 'What is React?',
                to: '#what-is-react',
              },
              {
                text: 'Should I learn React?',
                to: '#should-i-learn-react',
              },
            ]}
            type={REACT_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Link
                    to="#free-react-resources"
                    name="free-react-resources"
                  />

                  <Col md={1} />
                  <Col md={6}>
                    <H2>Learn React - Free Resources</H2>
                    <LearningResourceWrapper>
                      <Card border="shadow" small bottom={36}>
                        <LearningResource>
                          <img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Fthink-outside-box.jpeg?alt=media" />
                          <Link to="/blog/introduction-to-thinking-in-react/">
                            <H4>Introduction to Thinking in React</H4>
                          </Link>
                          <P>
                            "React is a library that creates user interfaces;
                            and it does in a predictable, efficient, and
                            declarative way..."{' '}
                            <Link to="/blog/introduction-to-thinking-in-react/">
                              Learn More
                            </Link>
                          </P>
                        </LearningResource>
                      </Card>
                      <Card border="shadow" small bottom={36}>
                        <LearningResource>
                          <img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fstyling%2Fstyled-components-make-up-min.jpeg?alt=media" />
                          <Link to="/blog/styling-in-react/">
                            <H4>Styling in React</H4>
                          </Link>
                          <P>
                            "Styling is an important and underestimated task.
                            Let's learn how to do it right following the React
                            philosophy..."{' '}
                            <Link to="/blog/styling-in-react/">Learn More</Link>
                          </P>
                        </LearningResource>
                      </Card>
                      <Card border="shadow" small bottom={36}>
                        <LearningResource>
                          <img src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fzen-stones.jpeg?alt=media" />
                          <Link to="/blog/react-is-all-about-composition-react-hooks-render-props-hocs/">
                            <H4>React Hooks - it's all about composition</H4>
                          </Link>
                          <P>
                            "Software development is, in essence, the process of
                            breaking a problem down into small er problems..."{' '}
                            <Link to="/blog/react-is-all-about-composition-react-hooks-render-props-hocs/">
                              Learn More
                            </Link>
                          </P>
                        </LearningResource>
                      </Card>
                      <MoreFreeResouces>
                        <H3>Get more learning resources</H3>
                        <P>
                          Over 5 weeks, we email you directly with free
                          resources{' '}
                          <strong>
                            directly from our{' '}
                            <Link to="/react/curriculum">
                              <strong>React Curriculum</strong>
                            </Link>
                          </strong>{' '}
                          . We'd love for you to enjoy and learn from them!{' '}
                        </P>
                        <LinkButton variant="primary" to="#newsletter">
                          Sign up now
                        </LinkButton>
                      </MoreFreeResouces>
                    </LearningResourceWrapper>
                  </Col>
                  <Link to="#our-react-training" name="our-react-training" />
                  <Col md={1} />
                  <Col md={4}>
                    <H3>Our React training</H3>
                    <TrainingType>
                      <H4>7-day Bootcamp</H4>
                      <P>
                        Rapid learning with a deep-dive into the whole React
                        Ecosystem
                      </P>
                      <LinkButton
                        variant="secondary"
                        to="/react/training/bootcamp/"
                      >
                        Find Out More
                      </LinkButton>
                    </TrainingType>
                    <TrainingType>
                      <H4>Part-Time Course</H4>
                      <P>
                        Maximum flexibility React training that fits around your
                        job
                      </P>
                      <LinkButton
                        to="react/training/part-time-course"
                        variant="secondary"
                      >
                        Find Out More
                      </LinkButton>
                    </TrainingType>
                    <TrainingType>
                      <H4>Corporate Team Training</H4>
                      <P>
                        We come to you, teach skills and best practice to your
                        entire team!
                      </P>
                      <LinkButton
                        to="/react/training/corporate"
                        variant="secondary"
                      >
                        Find Out More
                      </LinkButton>
                    </TrainingType>
                    <TrainingType>
                      <H4>React Advanced</H4>
                      <P>
                        For React developers who need to supercharge their
                        skills
                      </P>
                      <LinkButton
                        to="/react/training/advanced/"
                        variant="secondary"
                      >
                        Find Out More
                      </LinkButton>
                    </TrainingType>
                    <TrainingType>
                      <H4>1-day Workshops</H4>
                      <P>
                        Covering specific aspects in our Curriculum so you can
                        specialise
                      </P>
                      <LinkButton
                        to="/react/training/workshops"
                        variant="secondary"
                      >
                        Find Out More
                      </LinkButton>
                    </TrainingType>
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>

          <Section>
            <Grid>
              <Row>
                <Col md={12} mdOffset={1}>
                  <H2>
                    <Link to="#what-is-react" name="what-is-react" />
                    What is React?
                  </H2>
                </Col>
                <Col md={5} mdOffset={1}>
                  <P>
                    Created by Facebook in 2015, React is a JavaScript library -
                    not a framework - that creates user interfaces. Basically,
                    it's a simpler and better way of developing apps because...
                  </P>
                  <Ul>
                    <Li>React is declarative</Li>
                    <Li>It's all about Reusable Components</Li>
                    <Li>React is SEO friendly</Li>
                    <Li>It fully embraces JavaScript</Li>
                    <Li>
                      It's growing at a fast pace and the community is
                      fantastic!
                    </Li>
                  </Ul>
                  <P>
                    <LinkButton to="/blog/top-10-reasons-to-learn-react/">
                      Blog: Why You Should Learn React Right Now
                    </LinkButton>
                  </P>
                </Col>
                <Col md={5}>
                  <Link
                    to="#should-i-learn-react"
                    name="should-i-learn-react"
                  />
                  <Video youtubeId="6hmKu1-vW-8" />
                  <P>
                    Polina Stoyanova, a software engineer from tray.io, explains
                    her experiences of learning React on our 7-day Bootcamp
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

export default ReactPage
