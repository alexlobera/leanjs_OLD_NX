import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import FullCurriculumsGraphQL from '../../../components/curriculum/FullCurriculumsGraphQL'
import Header from 'src/components/layout/Header'
import {
  AttendeeQuote,
  TrustedBySection,
  UpcomingTrainingSection,
} from 'src/components/training'

import { Segment } from 'src/components/elements'
import {
  GRAPHQL_BOOTCAMP,
  CONVINCE_THE_BOSS_PDF,
  TECH_GRAPHQL,
} from 'src/config/data'
import { createMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { GRAPHQL_PINK } from 'src/config/styles'
import { GRAPHQL_WORKSHOP } from '../../../config/data'

const metas = {
  title: 'GraphQL Training (NEW) | React GraphQL Academy',
  description:
    'Looking for a GraphQL training? Look no more - take your development career to the next level with our GraphQL training. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const TrainingPage = ({ path }) => (
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
            {createMetas(metas)}
          </Helmet>
          <Header
            titleLines={['GraphQL Training']}
            subtitle="Take your development career to the next level with our GraphQL training"
            bgImageName={BOOTCAMP}
            bgColor={GRAPHQL_PINK}
            featuredSection={
              <React.Fragment>
                <P>Our courses:</P>
                {[
                  {
                    to: '/graphql/training/part-time-course/',
                    children: 'GraphQL Part-time',
                  },
                  {
                    to: '/graphql/training/bootcamp',
                    children: 'GraphQL Bootcamp',
                    px: 3,
                  },
                  {
                    to: '/graphql/training/corporate',
                    children: 'Corporate Training',
                    variant: 'secondary',
                  },
                ].map(({ to, variant = 'primary', children, px = 4 }) => (
                  <LinkButton
                    mb={1}
                    px={px}
                    variant={variant}
                    to={to}
                    display="block"
                    textAlign="center"
                    children={children}
                    className="main-cta-buttons"
                  />
                ))}
              </React.Fragment>
            }
            links={[
              {
                text: 'Course outline',
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
            type={GRAPHQL_BOOTCAMP}
            tech={TECH_GRAPHQL}
            breadcrumbPath={[
              { to: '/', label: 'Home' },
              {
                to: '/graphql/',
                label: 'GraphQL',
              },
              {
                to: path,
                label: 'Training',
              },
            ]}
          />
          <TopSection>
            <Segment>
              <FullCurriculumsGraphQL trainings={trainings} />
            </Segment>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  type={GRAPHQL_WORKSHOP}
                  quote="I think whatever business you're in, [the courses will] enhance your work. It helped my confidence and boosted me to be in line for a promotion!"
                  fullname="Lara Ramey"
                  job="Software Developer"
                  company="Meredith Corporation"
                  youtubeId="4NY7HCRPhWA"
                />
              </Col>
              <Col md={4} mdOffset={1}>
                <Link to="#student-outcomes" name="student-outcomes" />
                <H2>What developers can expect...</H2>
                <P>
                  <strong>Not for beginner devs!</strong>{' '}
                </P>
                <P>
                  <Link
                    className="perfect-course-student"
                    to="/blog/are-you-the-perfect-react-graphql-student/"
                  >
                    Blog: Are YOU the Perfect React Student?
                  </Link>
                </P>
                <Ul>
                  <Li>
                    <strong>Build production ready</strong> apps.
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
              </Col>
            </Row>
          </Section>
          <TrustedBySection showContent />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default TrainingPage
