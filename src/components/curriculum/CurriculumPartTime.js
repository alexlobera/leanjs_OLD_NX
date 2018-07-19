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
import GraphQLSession from './GraphQLSession'
import TestingInReact from './TestingInReact'
import HoCsAndRenderPropsSession from './HoCsAndRenderPropsSession'

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
        <CurriculumSections
          subTitle="Session 1 - ES6"
          sessions={[<ES6Session />]}
        />
        <CurriculumSections
          subTitle="Session 2 - Introduction to React"
          sessions={[<IntroReactSession />]}
        />
        <CurriculumSections
          subTitle="Session 3 - Routing & Data Fetching"
          sessions={[<RoutingAndDataFetchingSession />]}
        />
        <CurriculumSections
          subTitle="Session 4 - Forms & Auth"
          sessions={[<FormsAndAuthSession />]}
        />
        <CurriculumSections
          subTitle="Session 5 - Recap React Fundamentals"
          sessions={[<ReactFundamentalsRecapSession />]}
        />
        <CurriculumSections
          subTitle="Session 6 - Styling in React"
          sessions={[<StylingInReactSession />]}
        />
      </Col>
      <Col xs={12} md={6} lg={5} lgOffset={1}>
        <CurriculumSections
          subTitle="Session 7 - Introduction to Redux"
          sessions={[<IntroReduxSession />]}
        />
        <CurriculumSections
          subTitle="Session 8 - Introduction to Testing in JS"
          sessions={[<TestingIntroSession />]}
        />
        <CurriculumSections
          subTitle="Session 9 - Testing in React"
          sessions={[<TestingInReact />]}
        />
        <CurriculumSections
          subTitle="Session 10 - Advanced Patterns I"
          sessions={[<HoCsAndRenderPropsSession />]}
        />
        <CurriculumSections
          subTitle="Session 11 - GraphQL & Apollo Client"
          sessions={[<GraphQLSession />]}
        />
        <CurriculumSections
          subTitle="Session 12 - Last session React mini hackathon"
          sessions={[<PartTimeFinalProject />]}
        />
      </Col>
    </Row>
  </div>
)

export default CurriculumPartTime
