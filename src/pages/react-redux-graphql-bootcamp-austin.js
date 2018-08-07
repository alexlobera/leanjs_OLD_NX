import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingTrainingSection } from '../components/training'

const BootcampAustin = () => (
  <React.Fragment>
    <Header
      titleLines={['React Redux GraphQL Bootcamp', 'Training in Austin']}
      subtitle="Take your dev career to the next level in Austin -Texas- by mastering<br />React, Redux, and GraphQL - in just 7 days!"
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
              <Video youtubeID="Th32gt1XeEI" />
            </Col>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <H2>React Redux GraphQL in Austin, Texas, USA.</H2>
              <P>
                Join us for our first addition of the React, Redux GraphQL
                bootcamp Austin, Texas. Over 6 days we'll cover everything you
                need to know to become an expert in the react ecosystem with our
                accelerated learning format.
              </P>
              <P>
                We've worked with JS Guru and Austin native Kyle Simpson in one
                of our previous bootcamps, who'll also join us for the first day
                in Austin. Here what he had to say about our bootcamps and
                teaching style
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

export default BootcampAustin
