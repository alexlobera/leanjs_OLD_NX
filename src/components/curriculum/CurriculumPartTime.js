import React from 'react'
import { LinkButton } from '../buttons'
import { H1Ref } from '../text'
import Link from '../navigation/Link'
import Section, { List, curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import ES6Session from './sessions/ES6Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import HoCsAndRenderPropsSession from './sessions/HoCsAndRenderPropsSession'
import CurriculumCard from './CurriculumCard'

const PartTimeFinalProject = () => (
  <Ul>
    <Li>
      Consolidate your new React skills by building a React Redux application
      from scratch
    </Li>
    <Li>Discussion about architecture, features and tools</Li>
    <Li>
      Practice extreme programming and get support from the coaches and mentors
    </Li>
  </Ul>
)

const CurriculumPartTime = ({
  showTitle = true,
  list,
  showToggle,
  toggleNavigateTo = '/curriculum?tab=part-time',
  showCallToActionBottom = false,
  marketingCard = null,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const commonProps = { showToggle, toggleNavigateTo: toggleNavigateToSection }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Session 1 - Modern JavaScript"
        name="session1"
      >
        <ES6Session />
      </Section>
      <Section
        {...commonProps}
        title="Session 2 - Thinking in React"
        name="session2"
      >
        <ThinkingInReactSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 3 - Routing & Data Fetching"
        name="session3"
      >
        <RoutingAndDataFetchingSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 4 - Forms & Auth"
        name="session4"
      >
        <FormsAndAuthSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 5 - Recap React Fundamentals"
        name="session5"
      >
        <ReactFundamentalsRecapSession />
      </Section>
      {marketingCard}
    </React.Fragment>
  )

  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Session 6 - Styling in React"
        name="session6"
      >
        <StylingInReactSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 7 - Introduction to Redux"
        name="session7"
      >
        <IntroReduxSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 8 - Introduction to Testing in JS"
        name="session8"
      >
        <TestingIntroSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 9 - Advanced Patterns I"
        name="session9"
      >
        <HoCsAndRenderPropsSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 10 - React & Redux Real-world Project"
        name="session10"
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
                  Looking for the most complete React curriculum? Our 1-week
                  bootcamp has it all...
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
      ) : (
        ''
      )}
    </React.Fragment>
  )
}

export default CurriculumPartTime
