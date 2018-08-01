import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import CallToActionRow from '../components/layout/CallToActionRow'
import { UpcomingBootcampsSection } from '../components/training'
import Link from '../components/navigation/Link'

const BootcampAmsterdam = () => (
  <React.Fragment>
    <Header
      titleLines={['React Redux GraphQL Bootcamp', 'Training in Amsterdam']}
      subtitle="Take your dev career to the next level in Amsterdam - Holland - by mastering<br />React, Redux, and GraphQL - in just 7 days!"
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
              <Video yourubeID="yvROXLQ1jHg" />
            </Col>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <H2>React Redux GraphQL in Amsterdam, Holland.</H2>
              <P>
                Join us for our first addition of the React, Redux GraphQL
                bootcamp in Amsterdam, Holland. Over the 6 days you'll learn all
                the essentials to build production applications with confidence
                within the react ecosystem. The date is currently, TBD but watch
                this space :-)
              </P>
              <P>
                We have run several private trainings with local companies and
                run the popular{' '}
                <Link to="https://www.meetup.com/JavaScript-Amsterdam/">
                  JavaScript Amserdam meetup group
                </Link>
                , we'd love to see you in the next one!
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

    <UpcomingBootcampsSection />
  </React.Fragment>
)

export default BootcampAmsterdam
