import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2 } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import Link from '../components/navigation/Link'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingBootcampsSection } from '../components/training'

const BootcampAustin = () => (
  <React.Fragment>
    <Header
      titleLines={['React Redux GraphQL Training']}
      subtitle="Full list of trainings by ReactJS Academy"
      bgImg="training-event"
    />
    <TopSection>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col xs={12} lg={10} lgOffset={1}>
              <H2>We've trained developers from a range of companies</H2>
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
              <Ul>
                <Li>
                  <Link to="/react-redux-graphql-bootcamp-austin">
                    React Redux GraphQL training Austin
                  </Link>
                </Li>
                <Li>
                  <Link to="/react-redux-graphql-bootcamp-lisbon">
                    React Redux GraphQL training Lisbon
                  </Link>
                </Li>
                <Li>
                  <Link to="/react-redux-graphql-bootcamp-nyc">
                    React Redux GraphQL training NYC
                  </Link>
                </Li>
                <Li>
                  <Link to="/react-redux-training-amsterdam">
                    React Redux GraphQL training Amsterdam
                  </Link>
                </Li>
                <Li>
                  <Link to="/react-redux-training-barcelona">
                    React Redux GraphQL training Barcelona
                  </Link>
                </Li>
                <Li>
                  <Link to="/react-redux-training-berlin">
                    React Redux GraphQL training Berlin
                  </Link>
                </Li>
                <Li>
                  <Link to="/react-redux-training-brussels">
                    React Redux GraphQL training Brussels
                  </Link>
                </Li>
                <Li>
                  <Link to="/react-redux-training-paris">
                    React Redux GraphQL training Paris
                  </Link>
                </Li>
                <Li>
                  <Link to="/react-redux-training-sydney">
                    React Redux GraphQL training Sydney
                  </Link>
                </Li>
                <Li>
                  <Link to="/full-stack-js-react-graphql-node-mongo-bootcamp">
                    1-Week Full-stack JS Bootcamp
                  </Link>
                </Li>
                <Li>
                  <Link to="/community">Community</Link>
                </Li>
              </Ul>
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>

    <UpcomingBootcampsSection />
  </React.Fragment>
)

export default BootcampAustin
