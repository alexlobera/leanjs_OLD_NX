import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import Section, { List } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import ES6Session from './sessions/ES6Session'
import IntroReactSession from './sessions/IntroReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import GraphQLSession from './sessions/GraphQLSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import HoCsAndRenderPropsSession from './sessions/HoCsAndRenderPropsSession'
import CompoundCompAndContextSession from './sessions/CompoundCompAndContextSession'
import ServerSideRenderingSession from './sessions/ServerSideRenderingSession'
import Hackathon from './sessions/Hackathon'

const CurriculumBootcamp = ({ showTitle = true, list, showToggle }) => {
  const firstHalf = (
    <React.Fragment>
      <Section
        showToggle={showToggle}
        title="React Bootcamp Day 1"
        name="day1"
        subTitle="ES6 & ESNEXT, Thinking in React, Routing & Data Fetching"
      >
        <ES6Session title="ES6 and ESNEXT" />
        <IntroReactSession title="Thinking in React" />
        <RoutingAndDataFetchingSession title="Routing and Data Fetching" />
      </Section>
      <Section
        showToggle={showToggle}
        title="React Bootcamp Day 2"
        name="day2"
        subTitle="Forms, Authentication, Styling in React"
      >
        <FormsAndAuthSession title="Forms and Authentication" />
        <ReactFundamentalsRecapSession
          title="React Fundamentals recap, build a React app from scratch on your own to
          consolidate:"
        />
        <StylingInReactSession title="Styling in React" />
      </Section>
      <Section
        showToggle={showToggle}
        name="day3"
        title="React Bootcamp Day 3"
        subTitle="Redux, and Testing Principles"
      >
        <IntroReduxSession title="Introduction to Redux" />
        <TestingIntroSession title="Testing Principales" />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        showToggle={showToggle}
        name="day4"
        title="React Bootcamp Day 4"
        subTitle="Functional Programming, Advanced Patterns I, GraphQL, and Advanced Redux"
      >
        <HoCsAndRenderPropsSession title="FP & Advanced React Patterns I" />
        <GraphQLSession title="GraphQL and Apollo client" />
        <AdvancedReduxSession title="Advanced Redux" />
      </Section>
      <Section
        showToggle={showToggle}
        name="day5"
        title="React Bootcamp Day 5"
        subTitle="Testing in React, Advanced React Patterns II, Server-side Rendering"
      >
        <TestingInReactSession title="Testing in React" />
        <CompoundCompAndContextSession
          title="Advanced React patterns to create even more reusable
          UIs"
        />
        <ServerSideRenderingSession title="Server Side Rendering (SSR) with React" />
      </Section>
      <Section
        showToggle={showToggle}
        name="day6"
        title="React Bootcamp Day 6"
        subTitle="Hackathon"
      >
        <Hackathon
          title="Last day real-world React challenge. We'll implement an app
          in teams from scratch"
        />
      </Section>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={1}>
            <H2Ref>
              React Bootcamp Curriculum{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
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
      {/* <Row>
      <Col style={{ paddingTop: '25px', paddingBottom: '25px' }} xs={12} md={12} lg={10} lgOffset={1}>
        <LinkButton secondary to="/curriculum">
          Full curriculum>>
        </LinkButton>
      </Col>
    </Row> */}
    </React.Fragment>
  )
}

export default CurriculumBootcamp
