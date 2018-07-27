import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingBootcampsSection } from '../components/training'

const BootcampAustin = () => (
  <React.Fragment>
    <Header
      titleLines={['Community']}
      subtitle="The ReactJS Academy supports the JavaScript community<br /> by providing free workshops and talks. Many of them are about<br />the React ecosystem, although we are interested in any JavaScript topic."
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
              <H2>The value of giving to our community</H2>
              <H3>Feedback</H3>
              <P>
                The JavaScript community is very active, and the React ecosystem
                evolves very fast. We need to keep our curriculum up to date,
                adding new topics and exercises. We test our curriculum in our
                community. They tell us what works and what doesn't work, it
                helps us to continuously improve it.
              </P>
              <H3 style={{ paddingTop: '20px' }}>Practise makes perfect</H3>
              <P>
                The more we explain something, the better we become at teaching
                it. If cutting-edge JavaScript moves that fast then we can't
                stop practising. By teaching the community, we are exposed to a
                lot of developers, with different backgrounds, experiences and
                challenges. We learn from teaching them.
              </P>
              <H3 style={{ paddingTop: '20px' }}>Word of mouth</H3>
              <P>
                The community is open, and it spreads the word of what they
                think it's good. We help the community, we do a great job, and
                they talk about us.
              </P>
              <H3 style={{ paddingTop: '20px' }}>Networking</H3>
              <P>
                Organising events for the community connects us deeply with the
                community. It opens extraordinary opportunities for business,
                recruitment, learning and working on cool projects.
              </P>
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>

    <UpcomingBootcampsSection />
  </React.Fragment>
)

export default BootcampAustin
