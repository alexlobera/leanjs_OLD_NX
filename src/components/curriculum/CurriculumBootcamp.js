import React from 'react'
import { LinkButton } from '../buttons'
import { H1Ref, H2, H3 } from '../text'
import Section from './CurriculumSection'
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

const CurriculumBootcamp = ({ showTitle = true }) => (
  <React.Fragment>
    {showTitle ? (
      <Row>
        <Col xs={12} md={12} lg={10} lgOffset={1}>
          <H1Ref>
            React Bootcamp Curriculum{' '}
            <a href="#curriculum" name="curriculum">
              #
            </a>
          </H1Ref>
        </Col>
      </Row>
    ) : (
      ''
    )}
    <Row>
      <Col xs={12} md={6} lg={5} lgOffset={1}>
        <Section
          title="React Bootcamp Day 1"
          subTitle="ES6 & ESNEXT, Thinking in React, Routing & Data Fetching"
        >
          <ES6Session title="ES6 and ESNEXT" />
          <IntroReactSession title="Thinking in React" />
          <RoutingAndDataFetchingSession title="Routing and Data Fetching" />
        </Section>
        <Section
          title="React Bootcamp Day 2"
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
          title="React Bootcamp Day 3"
          subTitle="Redux, and Testing Principles"
        >
          <IntroReduxSession title="Introduction to Redux" />
          <TestingIntroSession title="Testing Principales" />
        </Section>
      </Col>
      <Col xs={12} md={6} lg={5}>
        <Section
          title="React Bootcamp Day 4"
          subTitle="Functional Programming, Advanced Patterns I, GraphQL, and Advanced Redux"
        >
          <HoCsAndRenderPropsSession title="FP & Advanced React Patterns I" />
          <GraphQLSession title="GraphQL and Apollo client" />
          <AdvancedReduxSession title="Advanced Redux" />
        </Section>
        <Section
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
        <Section title="React Bootcamp Day 6" subTitle="Hackathon">
          <Hackathon
            title="Last day real-world React challenge. We'll implement an app
          in teams from scratch"
          />
        </Section>
      </Col>
    </Row>
    {/* <Row>
      <Col style={{ paddingTop: '25px', paddingBottom: '25px' }} xs={12} md={12} lg={10} lgOffset={1}>
        <LinkButton secondary to="/curriculum">
          Full curriculum>>
        </LinkButton>
      </Col>
    </Row> */}
  </React.Fragment>
)

export default CurriculumBootcamp
