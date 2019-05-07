import React from 'react'
import { graphql } from 'gatsby'

import { BOOTCAMP } from '../../images/imageNames.js'
import Layout from '../components/layout.js'
import { formatUTC } from '../components/utils'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from '../components/training'
import { Breadcrumb } from '../components/navigation'
import {
  NotBegginersIcon,
  RunFastIcon,
  TargetIcon,
  TickBadgeIcon,
  BulletIcon,
  PeopleNetWorkIcon,
} from '../components/icons'
import { Link } from '../components/navigation'
import Ul, { Li } from '../components/layout/Ul'
import { LinkButton } from '../components/buttons'
import { REACT_BOOTCAMP } from '../config/data'
import Newsletter from '../components/elements/Newsletter'

const Landing = ({ data }) => {
  const {
    country,
    city,
    url,
    paragraphs,
    youtubeId,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      {({ trainings }) => {
        const bootcampTrainings = selectUpcomingTrainings({
          trainings: trainings,
          type: REACT_BOOTCAMP,
        })
        const nextTraining =
          selectNthTraining({ trainings: bootcampTrainings }) || {}
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
              titleLines={['React Redux GraphQL', `training in ${city}`]}
              subtitle={`Take your dev career to the next level in ${city}, ${country} - by mastering<br />React, Redux, and GraphQL`}
              bgImageName={BOOTCAMP}
            />
            <TopSection>
              <Section xsBgDark>
                <Grid>
                  <Card bg="dark">
                    <Row>
                      <Col xs={12} md={6} lg={4} lgOffset={1}>
                        <Video youtubeId={youtubeId} />
                      </Col>
                      <Col xs={12} md={6} lg={5} lgOffset={1}>
                        <H2>
                          React Redux GraphQL in {city}, {country}.
                        </H2>
                        {paragraphs.map(paragraph => (
                          <P>
                            <div
                              dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                          </P>
                        ))}
                        <Newsletter />
                      </Col>
                    </Row>
                  </Card>
                </Grid>
              </Section>
            </TopSection>
            <Section>
              <Grid>
                <Row>
                  <Col md={5}>
                    <Video youtubeId="6hmKu1-vW-8" />
                    <P>
                      Listen to Polina Stoyanova, a software engineer from
                      tray.io who attended our last bootcamp, on her experience
                      at the bootcamp.
                    </P>
                    <Link to="https://www.youtube.com/channel/UC8eG6zOgWqeIZlJ8KRgEbSQ/videos">
                      Watch further testimonials
                    </Link>
                  </Col>
                  <Col md={5} mdOffset={1}>
                    <H2>Is this React training right for me?</H2>
                    <Ul unstyled>
                      <Li>
                        <BulletIcon icon={RunFastIcon} />
                        Extremely rapid, intense learning
                      </Li>
                      <Li>
                        <BulletIcon icon={NotBegginersIcon} />
                        Ideal for experienced programmers familiar with good
                        practices. Not for beginners!
                      </Li>
                      <Li>
                        <BulletIcon icon={TickBadgeIcon} />
                        Small classes with expert developer coaches - roughly
                        one for every four students
                      </Li>
                      <Li>
                        <BulletIcon icon={TargetIcon} />
                        Hands-on project-based training - most of the time
                        you'll be coding.
                      </Li>
                      <Li>
                        <BulletIcon icon={PeopleNetWorkIcon} />
                        Join a growing network of alumni for advice, knowledge
                        and social fun!
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
                <Card>
                  <Row>
                    <Col xs={12} lg={12}>
                      <H2>Trusted by industry leaders</H2>
                      <TrustedByLogoList />
                    </Col>
                  </Row>
                </Card>
              </Grid>
            </Section>
            <Section>
              <Grid>
                <Card white border="shadow">
                  <CurriculumBootcamp listTwoCol />
                </Card>
              </Grid>
            </Section>

            <UpcomingTrainingSection trainings={trainings} />
          </React.Fragment>
        )
      }}
    </Layout>
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
