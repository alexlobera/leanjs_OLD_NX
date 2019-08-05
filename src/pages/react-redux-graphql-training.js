import React from 'react'

import { BOOTCAMP } from '../../images/imageNames'
import Layout from '../components/layout'
import Section, { TopSection } from '../components/layout/Section'
import { Col, Row } from '../components/layout/Grid'
import { H2 } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { Segment, Video } from '../components/elements'
import Link from '../components/navigation/Link'
import { RootHeader as Header } from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingTrainingSection } from '../components/training'

const BootcampList = () => (
  <Layout>
    {({ trainings }) => {
      return (
        <React.Fragment>
          <Header
            titleLines={['React Redux GraphQL Training']}
            subtitle="Full list of trainings by React GraphQL Academy"
            bgImageName={BOOTCAMP}
          />
          <TopSection>
            <Segment>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <H2>We've trained developers from a range of companies</H2>
                  <TrustedByLogoList />
                </Col>
              </Row>
            </Segment>
          </TopSection>
          <Section variant="darkMob">
            <Segment variant="primary">
              <Row>
                <Col md={6} lg={4} lgOffset={1}>
                  <Video youtubeId="yvROXLQ1jHg" />
                </Col>
                <Col md={6} lg={5} lgOffset={1}>
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
                      <Link to="/community">Community</Link>
                    </Li>
                  </Ul>
                </Col>
              </Row>
            </Segment>
          </Section>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)
export default BootcampList
