import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P, H3 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
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
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'React Training | React GraphQL Academy',
  description:
    'Looking for a React training? Look no more - take your development career to the next level with our React training. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const TrainingPage = () => (
  <Layout>
    {({ trainings }) => {
      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
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
            titleLines={['React Training']}
            subtitle="Take your development career to the next level with our React training"
            bgImageName={BOOTCAMP}
            showCoursesCTA
            links={[
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
              <Card border="shadow">
                <FullCurriculumsReact trainings={trainings} />
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={5} mdOffset={1}>
                  <AttendeeQuote
                    small
                    quote="I've been a developer for 4 years... [After the React course] my manager is in the works to getting me a promotion. I'm happy with how things have turned out!"
                    fullname="Lara Ramey"
                    job="Software Developer"
                    company="Meredith Corporation"
                    videoUrl="er9ttTCS86U"
                  />
                </Col>
                <Col md={5} mdOffset={1}>
                  <Link to="#student-outcomes" name="student-outcomes" />
                  <H2>What developers get from our courses</H2>
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
