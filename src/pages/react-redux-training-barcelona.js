import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingTrainingSection } from '../components/training'
import { Link, Breadcrumb } from '../components/navigation'

const BootcampBarcelona = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/react-redux-graphql-part-time-course', label: 'Part-time' },
        { to: '/react-redux-training-barcelon', label: 'Barcelona' },
      ]}
    />
    <Header
      titleLines={['React Redux GraphQL Bootcamp', 'Training in Barcelona']}
      subtitle="Take your dev career to the next level in Barcelona - Spain - by mastering<br />React, Redux, and GraphQL - in just 7 days!"
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
              <H2>React Redux GraphQL in Barcelona, Spain.</H2>
              <P>
                Join us for our first addition of the React, Redux, GraphQL
                bootcamp in Barcelona, Spain. Over 6 intense days we'll cover
                everything you need to know to become an expert in the react
                ecosystem with our accelerated learning format.
              </P>
              <P>
                Our head coach <Link to="/about-us">Alex</Link> is a Barcelona
                native and our React Native Specialist Horacio works from
                Barcelona and runs the popular{' '}
                <Link to="https://www.meetup.com/JavaScript-Barcelona/">
                  JavaScript Barcelona Meetup
                </Link>
                .
              </P>
              <P>
                Check out the 3 minute video on the left to get a feel for our
                bootcamps and here what some of our preivous students think
                about the experience :-)
              </P>
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

export default BootcampBarcelona
