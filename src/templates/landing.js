import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingTrainingSection } from '../components/training'
import { Breadcrumb } from '../components/navigation'

const Landing = ({ data }) => {
  const { country, city, url, paragraphs } = data.markdownRemark.frontmatter
  console.log('data', data)
  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: '/react-redux-graphql-part-time-course', label: 'Part-time' },
          { to: `${url}`, label: `${country}` },
        ]}
      />
      <Header
        titleLines={['React Redux GraphQL Bootcamp', `Training in ${city}`]}
        subtitle={`Take your dev career to the next level in ${city} - ${country} - by mastering<br />React, Redux, and GraphQL - in just 1 week!`}
        bgImg="training-event"
      />
      <TopSection>
        <Grid>
          <Card border="shadow">
            <Row>
              <Col xs={12} lg={10} lgOffset={1}>
                <H2>Trusted by industry leaders</H2>
                <TrustedByLogoList />
              </Col>
            </Row>
          </Card>
        </Grid>
      </TopSection>
      <Section xsBgDark>
        <Grid>
          <Card bg="dark">
            <Row>
              <Col xs={12} md={6} lg={4} lgOffset={1}>
                <Video youtubeID="yvROXLQ1jHg" />
              </Col>
              <Col xs={12} md={6} lg={5} lgOffset={1}>
                <H2>
                  React Redux GraphQL in {city}, {country}.
                </H2>
                {paragraphs.map(paragraph => <P>{paragraph}</P>)}
              </Col>
            </Row>
          </Card>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Card white border="shadow">
            <CurriculumBootcamp />
          </Card>
        </Grid>
      </Section>

      <UpcomingTrainingSection />
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
      }
    }
  }
`

export default Landing
