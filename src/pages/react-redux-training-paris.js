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

const BootcampParis = () => (
  <React.Fragment>
    <Header
      titleLines={['React Redux GraphQL Bootcamp', 'Training in Paris']}
      subtitle="Take your dev career to the next level in Paris - France - by mastering<br />React, Redux, and GraphQL - in just 7 days!"
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
              <Video src="https://www.youtube.com/embed/yvROXLQ1jHg" />
            </Col>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <H2>React Redux GraphQL in Paris, France.</H2>
              <P>
                Join us for our first addition of the React, Redux, GraphQL
                bootcamp in Paris, France. Over 6 days we'll cover everything
                you need to know to become an expert in the react ecosystem with
                our accelerated learning format.
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

export default BootcampParis
