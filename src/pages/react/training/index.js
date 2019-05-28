import React from 'react'
import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P, H3 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CallToActionRow } from '../../../components/layout/CallToActionNextTrainings'
import { FullCurriculumsReact } from '../../../components/curriculum'
import Header from 'src/components/layout/Header'
import {
  AttendeeQuote,
  TrustedBySection,
  UpcomingTrainingSection,
} from 'src/components/training'
import { Card } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { REACT_BOOTCAMP, CONVINCE_THE_BOSS_PDF } from 'src/config/data'

const TrainingPage = () => (
  <Layout>
    {({ trainings }) => {
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
                to: '#curriculum',
              },
              {
                text: 'Upcoming Courses',
                to: '#upcoming-courses',
              },
              {
                text: 'Free Learning Resources',
                to: '#free-learning-resources',
              },
              {
                text: 'Corporate Training',
                to: '#corporate-training',
              },
              {
                text: 'Student Outcomes',
                to: '#student-outcomes',
              },
            ]}
            type={REACT_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <CallToActionRow>
                <Col xs={12} sm={4}>
                  <LinkButton
                    variant="primary"
                    to="/react/training/bootcamp"
                    children="1-Week Bootcamp"
                  />
                </Col>
                <Col xs={12} sm={4}>
                  <LinkButton
                    to="/react/training/workshops"
                    children="1-Day Workshops"
                    variant="secondary"
                  />
                </Col>

                <Col xs={12} sm={4}>
                  <LinkButton
                    variant="secondary"
                    to="/react/training/corporate"
                    children="Corporate Training"
                  />
                </Col>
              </CallToActionRow>
              <Card border="shadow">
                <FullCurriculumsReact trainings={trainings} />
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={5}>
                  <AttendeeQuote
                    small
                    quote="I'd been self-teaching myself, but I needed something more concrete so taking this course was the best thing I could do."
                    fullname="Bogdan Stanciu"
                    job="Lead Front End Developer"
                    company="Kaizen"
                    videoUrl="E_4eQQHjc7A"
                  />
                </Col>
                <Col md={5} mdOffset={1}>
                  <Link to="#student-outcomes" name="student-outcomes" />
                  <H2>What students get from a our training</H2>
                  <Ul>
                    <Li>
                      <strong>Build production ready</strong> React apps.
                    </Li>
                    <Li>
                      Discuss <strong>real-world projects</strong>.
                    </Li>
                    <Li>
                      Learn <strong>best practices</strong>.
                    </Li>
                    <Li>
                      <strong>Mentoring</strong> by our expert coaches.
                    </Li>
                    <Li>
                      <strong>Stay tech-relevent</strong> in modern development.
                    </Li>
                  </Ul>
                  <LinkButton pdf to={CONVINCE_THE_BOSS_PDF}>
                    Download: Why Devs Should Learn With Us
                  </LinkButton>
                  <H3>Not for beginner devs!</H3>
                  <P>
                    <strong>We do not run learn-to-code bootcamps</strong>. If
                    you want to learn to code, we recommend checking out{' '}
                    <Link to="https://learn.freecodecamp.org/front-end-libraries/react/">
                      Free Code camps
                    </Link>
                    .
                  </P>
                  <Link to="/blog/are-you-the-perfect-react-graphql-student/">
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
