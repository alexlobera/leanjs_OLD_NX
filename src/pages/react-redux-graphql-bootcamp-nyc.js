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

const BootcampNYC = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/react-redux-graphql-bootcamp', label: 'React bootcamp' },
        { to: '/react-redux-graphql-bootcamp-nyc', label: 'NYC' },
      ]}
    />
    <Header
      titleLines={['React Redux GraphQL Bootcamp', 'Training in NYC']}
      subtitle="Take your dev career to the next level in New York City - USA- by mastering<br />React, Redux, and GraphQL - in just 1 week!"
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
              <H2>React Redux GraphQL in New York, USA.</H2>
              <P>
                Join us for our first addition of the React, Redux GraphQL
                bootcamp NYC. Over 6 days we'll cover everything you need to
                know to become an expert in the react ecosystem with our
                accelerated learning format.
              </P>
              <P>
                We have been working with local partners to organize a great
                venue which is easy to reach for East-coast based devs. In a
                hurry to do the bootcamp? We don't have a date yet for NYC but
                check out our upcoming{' '}
                <Link to="/react-redux-graphql-bootcamp-london">
                  London bootcamp
                </Link>{' '}
                in a few weeks time.
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

export default BootcampNYC
