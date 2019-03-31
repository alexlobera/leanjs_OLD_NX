import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { Card, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import {
  UpcomingTrainingSection,
  withUpcomingTrainings,
} from '../components/training'

const FullstackBootcamp = ({ trainings }) => (
  <React.Fragment>
    <Header
      titleLines={['1-Week back-end JS Bootcamp', 'GraphQL API, Node, Mongo']}
      subtitle="Take your dev career to the next level by becoming a<br />modern back-end JS developer - in just 1 week!"
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
              <Video youtubeId="yvROXLQ1jHg" />
            </Col>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <H2>A JavaScript stack to build production-ready GraphQL APIs</H2>
              <P>
                Build modern web applications using JavaScript and{' '}
                <strong>GraphQL</strong> as the cornerstone to speed up the
                development and performance of your applications. With GraphQL
                you'll have a query language that runs on the front-end and also
                on the back-end.
              </P>
              <H3 style={{ paddingTop: '20px' }}>Curriculum</H3>
              <Ul>
                <Li>
                  Node
                  <Ul>
                    <Li>NPM</Li>
                    <Li>REPL</Li>
                    <Li>global</Li>
                  </Ul>
                </Li>
                <Li>
                  Express
                  <Ul>
                    <Li>Server</Li>
                    <Li>Middleware</Li>
                    <Li>Router</Li>
                  </Ul>
                </Li>
                <Li>
                  GraphQL API part 1
                  <Ul>
                    <Li>What makes GraphQL APIs better than REST APIs</Li>
                    <Li>GraphQL Queries and Mutations</Li>
                    <Li>Resolvers</Li>
                    <Li>GraphiQL</Li>
                    <Li>Pagination strategies and Relay Connections</Li>
                  </Ul>
                </Li>
                <Li>
                  GraphQL API part 2
                  <Ul>
                    <Li>Authentication</Li>
                    <Li>Authorization</Li>
                    <Li>Error handling</Li>
                  </Ul>
                </Li>
                <Li>
                  Mongo
                  <Ul>
                    <Li>Difference between SQL and NOSQL</Li>
                    <Li>Difference between SQL and NOSQL</Li>
                    <Li>Thinking in Documents</Li>
                    <Li>Mongoose</Li>
                  </Ul>
                </Li>
                <Li>
                  Deploy your code in the cloud
                  <Ul>
                    <Li>
                      Google Cloud Functions or Amazon Lambda Functions for your
                      GraphQL API
                    </Li>
                    <Li>Mongo Atlas for your DB</Li>
                  </Ul>
                </Li>
                <Li>
                  Consolidate your new skills, hackathon
                  <Ul>
                    <Li>Pitch your idea</Li>
                    <Li>Create teams</Li>
                    <Li>Discussion about architecture, features and tools</Li>
                    <Li>Start coding</Li>
                    <Li>
                      Practice extreme programming and get support from the
                      coaches and mentors
                    </Li>
                  </Ul>
                </Li>
              </Ul>
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>

    <UpcomingTrainingSection trainings={trainings} />
  </React.Fragment>
)

export default withUpcomingTrainings()(FullstackBootcamp)
