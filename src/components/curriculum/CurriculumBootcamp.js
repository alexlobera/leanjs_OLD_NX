import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { H1Ref, H2, H3 } from '../text'
import CurriculumSections from './CurriculumSections'
import { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import ES6Session from './ES6Session'
import IntroReactSession from './IntroReactSession'
import RoutingAndDataFetchingSession from './RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './ReactFundamentalsRecapSession'
import FormsAndAuthSession from './FormsAndAuthSession'
import StylingInReactSession from './StylingInReactSession'
import IntroReduxSession from './IntroReduxSession'
import TestingIntroSession from './TestingIntroSession'
import AdvancedReduxSession from './AdvancedReduxSession'
import GraphQLSession from './GraphQLSession'
import TestingInReact from './TestingInReact'
import HoCsAndRenderPropsSession from './HoCsAndRenderPropsSession'
import CompoundCompAndContextSession from './CompoundCompAndContextSession'
import ServerSideRenderingSession from './ServerSideRenderingSession'
import Hackathon from './Hackathon'

const CurriculumBootcamp = () => (
  <div>
    <H1Ref>
      The most complete curriculum{' '}
      <a href="#curriculum" name="curriculum">
        #
      </a>
    </H1Ref>
    <Row>
      <Col xs={12} md={6} lg={5} lgOffset={1}>
        <CurriculumSections
          title="Day 1"
          subTitle="ES6 & ESNEXT, React Fundamentals, Routing & Data Fetching"
          sessions={[
            <ES6Session title="ES6 and ESNEXT" />,
            <IntroReactSession title="Thinking in React" />,
            <RoutingAndDataFetchingSession title="Routing and Data Fetching" />,
          ]}
        />
        <CurriculumSections
          title="Day 2"
          subTitle="Forms, Authentication, Styling in React"
          sessions={[
            <FormsAndAuthSession title="Forms and Authentication" />,
            <ReactFundamentalsRecapSession
              title="React Fundamentals recap, build a React app from scratch on your own to
            consolidate:"
            />,
            <StylingInReactSession title="Styling in React" />,
          ]}
        />
        <CurriculumSections
          title="Day 3"
          subTitle="Redux, and Testing Principles"
          sessions={[
            <IntroReduxSession title="Introduction to Redux" />,
            <TestingIntroSession title="Testing Principales" />,
          ]}
        />
      </Col>
      <Col xs={12} md={6} lg={5} lgOffset={1}>
        <CurriculumSections
          title="Day 4"
          subTitle="Functional Programming, Advanced Patterns I, GraphQL, and Advanced Redux"
          sessions={[
            <HoCsAndRenderPropsSession title="FP & Advanced React Patterns I" />,
            <GraphQLSession title="GraphQL and Apollo client" />,
            <AdvancedReduxSession title="Advanced Redux" />,
          ]}
        />
        <CurriculumSections
          title="Day 5"
          subTitle="Testing in React, Advanced React Patterns II, Server-side Rendering"
          sessions={[
            <TestingInReact title="Testing in React" />,
            <CompoundCompAndContextSession
              title="Advanced React patterns to create even more reusable
            UIs"
            />,
            <ServerSideRenderingSession title="Server Side Rendering (SSR) with React" />,
          ]}
        />
        <CurriculumSections
          title="Day 6"
          subTitle="Hackathon"
          sessions={[
            <Hackathon
              title="Last day real-world React challenge. We'll implement an app
          in teams from scratch"
            />,
          ]}
        />
      </Col>
    </Row>
  </div>
)

export default CurriculumBootcamp
