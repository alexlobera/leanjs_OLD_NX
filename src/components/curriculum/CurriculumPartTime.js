import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { H1Ref, H2, H3 } from '../text'
import CurriculumSections from './CurriculumSections'
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

const PartTimeFinalProject = () => (
  <Ul>
    <Li>Discussion about architecture, features and tools</Li>
    <Li>
      Practice extreme programming and get support from the coaches and mentors
    </Li>
  </Ul>
)

const CurriculumPartTime = () => (
  <div>
    <H1Ref>
      The most progressive curriculum{' '}
      <a href="#curriculum" name="curriculum">
        #
      </a>
    </H1Ref>
    <Row>
      <Col xs={12} md={6} lg={5} lgOffset={1}>
        <CurriculumSections subTitle="Session 1 - ES6">
          <ES6Session />
        </CurriculumSections>
        <CurriculumSections subTitle="Session 2 - Thinking in React">
          <IntroReactSession />
        </CurriculumSections>
        <CurriculumSections subTitle="Session 3 - Routing & Data Fetching">
          <RoutingAndDataFetchingSession />
        </CurriculumSections>
        <CurriculumSections subTitle="Session 4 - Forms & Auth">
          <FormsAndAuthSession />
        </CurriculumSections>
        <CurriculumSections subTitle="Session 5 - Recap React Fundamentals">
          <ReactFundamentalsRecapSession />
        </CurriculumSections>
        <CurriculumSections subTitle="Session 6 - Styling in React">
          <StylingInReactSession />
        </CurriculumSections>
      </Col>
      <Col xs={12} md={6} lg={5} lgOffset={1}>
        <CurriculumSections subTitle="Session 7 - Introduction to Redux">
          <IntroReduxSession />
        </CurriculumSections>
        <CurriculumSections subTitle="Session 8 - Introduction to Testing in JS">
          <TestingIntroSession />
        </CurriculumSections>
        <CurriculumSections subTitle="Session 9 - Testing in React">
          <TestingInReactSession />
        </CurriculumSections>
        <CurriculumSections subTitle="Session 10 - Advanced Patterns I">
          <HoCsAndRenderPropsSession />
        </CurriculumSections>
        <CurriculumSections subTitle="Session 11 - GraphQL & Apollo Client">
          <GraphQLSession />
        </CurriculumSections>
        <CurriculumSections subTitle="Session 12 - Last session React mini hackathon">
          <PartTimeFinalProject />
        </CurriculumSections>
      </Col>
    </Row>
  </div>
)

export default CurriculumPartTime
