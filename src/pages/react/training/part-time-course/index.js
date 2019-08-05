import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import { Link, Breadcrumb } from 'src/components/navigation'
import NextTrainingButton from 'src/components/training/NextTrainingButton'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  TrustedBySection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import CurriculumPartTime from 'src/components/curriculum/CurriculumPartTime'
import Header from 'src/components/layout/Header'
import { PART_TIME } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'

const metas = {
  title: 'React Part Time Course | React GraphQL Academy',
  description:
    'Interested in a React course? Learn the main libraries of the React ecosystem and become a confident React developer with our React part-time course.',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const PartTime = ({ trainings, path }) => (
  <Layout>
    {({ trainings }) => {
      const upcomingPartTimeTrainings = selectUpcomingTrainings({
        type: PART_TIME,
        trainings,
      })
      const nextTraining = selectNthTraining({
        trainings: upcomingPartTimeTrainings,
      })
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
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: path,
                label: 'Part Time Course',
              },
            ]}
          />
          <Header
            titleLines={['1-month part-time', 'React Redux course']}
            subtitle="Expert coaches work with you to help you master React<br />without having to cut into valuable work-days"
            type={PART_TIME}
            links={header.landingPageLinks.links}
          />
          <TopSection>
            <Segment>
              <CurriculumPartTime trainings={upcomingPartTimeTrainings} />
            </Segment>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="Whatever business you're in, [the courses will] enhance your work. It helped my confidence and boosted me to be in line for a promotion!"
                  fullname="Lara Ramey"
                  job="Software Developer"
                  company="Meredith Corporation"
                  youtubeId="4NY7HCRPhWA"
                />
              </Col>
              <Col md={4} mdOffset={1}>
                <Link to="#target-audience" name="target-audience" />
                <H2>Is this React part-time course right for me?</H2>
                <Ul>
                  <Li>Meaningful, collaborative learning</Li>
                  <Li>Personal mentoring rather than online learning</Li>
                  <Li>Don't miss work days or projects</Li>
                  <Li>Not for beginners!</Li>
                  <Li>Discuss real-world projects to learn best practices</Li>
                  <Li>Expert coaches with extensive React experience</Li>
                </Ul>
                <NextTrainingButton
                  type="part-time course"
                  training={nextTraining}
                />
              </Col>
            </Row>
          </Section>

          <TrustedBySection />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default PartTime
