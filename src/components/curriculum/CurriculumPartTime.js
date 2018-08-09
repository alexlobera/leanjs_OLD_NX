import React from 'react'
import { LinkButton } from '../buttons'
import { H1Ref } from '../text'
import Link from '../navigation/Link'
import Section, { List } from './CurriculumSection'
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

const CurriculumPartTime = ({ showTitle = true, list, showToggle, showCallToActionBottom = false }) => {
  const firstHalf = (
    <React.Fragment>
      <Section showToggle={showToggle} title="Session 1 - ES6" name="session1">
        <ES6Session />
      </Section>
      <Section showToggle={showToggle} title="Session 2 - Thinking in React" name="session2">
        <IntroReactSession />
      </Section>
      <Section showToggle={showToggle} title="Session 3 - Routing & Data Fetching" name="session3">
        <RoutingAndDataFetchingSession />
      </Section>
      <Section showToggle={showToggle} title="Session 4 - Forms & Auth" name="session4">
        <FormsAndAuthSession />
      </Section>
      <Section showToggle={showToggle} title="Session 5 - Recap React Fundamentals" name="session5">
        <ReactFundamentalsRecapSession />
      </Section>
      <Section showToggle={showToggle} title="Session 6 - Styling in React" name="session6">
        <StylingInReactSession />
      </Section>
    </React.Fragment>
  )

  const secondHalf = (
    <React.Fragment>
      <Section showToggle={showToggle} title="Session 7 - Introduction to Redux" name="session7">
        <IntroReduxSession />
      </Section>
      <Section
        showToggle={showToggle}
        title="Session 8 - Introduction to Testing in JS"
        name="session8"
      >
        <TestingIntroSession />
      </Section>
      <Section showToggle={showToggle} title="Session 9 - Testing in React" name="session9">
        <TestingInReactSession />
      </Section>
      <Section showToggle={showToggle} title="Session 10 - Advanced Patterns I" name="session10">
        <HoCsAndRenderPropsSession />
      </Section>
      <Section
        showToggle={showToggle}
        title="Session 11 - GraphQL & Apollo Client"
        name="session11"
      >
        <GraphQLSession />
      </Section>
      <Section
        showToggle={showToggle}
        title="Session 12 - Last session React mini hackathon"
        name="session12"
      >
        <PartTimeFinalProject />
      </Section>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={1}>
            <H1Ref>
              Part-time course curriculum{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H1Ref>
          </Col>
        </Row>
      ) : (
          ''
        )}

      {list ? (
        <List>
          {firstHalf}
          {secondHalf}
        </List>
      ) : (
          <Row>
            <Col md={6} lg={5} lgOffset={1}>
              {firstHalf}
            </Col>
            <Col md={6} lg={5}>
              {secondHalf}
            </Col>
          </Row>
        )}

      {showCallToActionBottom ? (
        <Row>
          <Col lg={10} lgOffset={1}>
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
        </Row>
      ) : ''}

    </React.Fragment >
  )
}

export default CurriculumPartTime
