import React from 'react'
import { graphql } from 'gatsby'

import { BOOTCAMP } from '../../images/imageNames'
import { formatUTC } from '../components/utils'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import CurriculumReactBootcamp from '../components/curriculum/CurriculumReactBootcamp'
import { Segment, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  REACT_BOOTCAMP_ID,
  FULL_TIME_REACT_ID,
} from '../components/training'
import { Breadcrumb } from '../components/navigation'
import { Link } from '../components/navigation'
import Ul, { Li } from '../components/layout/Ul'
import { LinkButton } from '../components/buttons'
// import { REACT_BOOTCAMP } from '../config/data'
import Newsletter from '../components/elements/Newsletter'

const Landing = ({ data, trainings }) => {
  const {
    country,
    city,
    url,
    paragraphs,
    youtubeId,
  } = data.markdownRemark.frontmatter

  const bootcampTrainings = selectUpcomingTrainings({
    trainings: trainings,
    trainingId: REACT_BOOTCAMP_ID,
    trainingTypeId: FULL_TIME_REACT_ID,
  })
  const nextTraining = selectNthTraining({ trainings: bootcampTrainings }) || {}
  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          {
            to: '/react-redux-graphql-training/',
            label: 'List of trainings',
          },
          { to: `${url}`, label: `${city}` },
        ]}
      />
      <Header
        titleLines={['React Redux', `training in ${city}`]}
        subtitle={`Take your dev career to the next level in ${city}, ${country} - by mastering<br />React, Redux, and GraphQL`}
        bgImageName={BOOTCAMP}
      />
      <TopSection>
        <Section variant="darkMob">
          <Grid>
            <Segment variant="primary">
              <Row>
                <Col md={6} lg={4} lgOffset={1}>
                  <Video youtubeId={youtubeId} />
                </Col>
                <Col md={6} lg={5} lgOffset={1}>
                  <H2>
                    React Redux GraphQL in {city}, {country}.
                  </H2>
                  {paragraphs.map(paragraph => (
                    <P>
                      <div dangerouslySetInnerHTML={{ __html: paragraph }} />
                    </P>
                  ))}
                  <Newsletter />
                </Col>
              </Row>
            </Segment>
          </Grid>
        </Section>
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
              <H2>Is this React training right for me?</H2>
              <Ul>
                <Li>Extremely rapid, intense learning</Li>
                <Li>
                  Ideal for experienced programmers familiar with good
                  practices. Not for beginners!
                </Li>
                <Li>
                  Small classes with expert developer coaches - roughly one for
                  every four students
                </Li>
                <Li>
                  Hands-on project-based training - most of the time you'll be
                  coding.
                </Li>
                <Li>
                  Join a growing network of alumni for advice, knowledge and
                  social fun!
                </Li>
              </Ul>
              <P>
                <LinkButton variant="primary" to={nextTraining.toPath}>
                  Next bootcamp:{' '}
                  {nextTraining &&
                    formatUTC(
                      nextTraining.startDate,
                      nextTraining.utcOffset,
                      'D MMM'
                    )}
                  , {nextTraining && nextTraining.city}
                </LinkButton>
              </P>
            </Col>
          </Row>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Segment>
            <Row>
              <Col>
                <H2>Trusted by industry leaders</H2>
                <TrustedByLogoList />
              </Col>
            </Row>
          </Segment>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Segment white sx={{ border: 'shadow' }}>
            <CurriculumReactBootcamp listTwoCol />
          </Segment>
        </Grid>
      </Section>

      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  query LandingQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        country
        city
        url
        paragraphs
        youtubeId
      }
    }
  }
`

export default Landing
