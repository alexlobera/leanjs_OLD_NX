import React from 'react'
import { LinkButton } from '../buttons'
import { H1Ref } from '../text'
import Link from '../navigation/Link'
import Section from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import ES6Session from './sessions/ES6Session'
import IntroReactSession from './sessions/IntroReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import GraphQLSession from './sessions/GraphQLSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import HoCsAndRenderPropsSession from './sessions/HoCsAndRenderPropsSession'
import CurriculumCard from './CurriculumCard'

const PartTimeFinalProject = () => (
  <Ul>
    <Li>Discussion about architecture, features and tools</Li>
    <Li>
      Practice extreme programming and get support from the coaches and mentors
    </Li>
  </Ul>
)

const CurriculumPartTime = () => (
  <React.Fragment>
    <Col lg={10} lgOffset={1}>
      <H1Ref>
        Part-time course curriculum{' '}
        <Link to="#curriculum" name="curriculum">
          #
        </Link>
      </H1Ref>
      <Row>
        <Col xs={12} md={6}>
          <Section title="Session 1 - ES6" name="session">
            <ES6Session />
          </Section>
          <Section title="Session 2 - Thinking in React" name="session2">
            <IntroReactSession />
          </Section>
          <Section title="Session 3 - Routing & Data Fetching" name="session3">
            <RoutingAndDataFetchingSession />
          </Section>
          <Section title="Session 4 - Forms & Auth" name="session4">
            <FormsAndAuthSession />
          </Section>
          <Section title="Session 5 - Recap React Fundamentals" name="session5">
            <ReactFundamentalsRecapSession />
          </Section>
          <Section title="Session 6 - Styling in React" name="session6">
            <StylingInReactSession />
          </Section>
        </Col>
        <Col xs={12} md={6}>
          <Section title="Session 7 - Introduction to Redux" name="session7">
            <IntroReduxSession />
          </Section>
          <Section
            title="Session 8 - Introduction to Testing in JS"
            name="session8"
          >
            <TestingIntroSession />
          </Section>
          <Section title="Session 9 - Testing in React" name="session9">
            <TestingInReactSession />
          </Section>
          <Section title="Session 10 - Advanced Patterns I" name="session10">
            <HoCsAndRenderPropsSession />
          </Section>
          <Section
            title="Session 11 - GraphQL & Apollo Client"
            name="session11"
          >
            <GraphQLSession />
          </Section>
          <Section
            title="Session 12 - Last session React mini hackathon"
            name="session12"
          >
            <PartTimeFinalProject />
          </Section>
        </Col>
      </Row>
      <CurriculumCard>
        <Row>
          <Col lg={5} lgOffset={1}>
            Looking for the most complete React curriculum? Our 1-week bootcamp
            has it...
          </Col>
          <Col lg={6} center>
            <LinkButton to="/react-redux-graphql-bootcamp" secondary>
              1 week bootcamp >>
            </LinkButton>
          </Col>
        </Row>
      </CurriculumCard>
    </Col>
  </React.Fragment>
)

export default CurriculumPartTime
