import React from 'react'
import { LinkButton } from '../buttons'
import { H2Ref } from '../text'
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
import { PART_TIME } from '../../config/data'
import SectionCTA from './SectionCTA'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'

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
  isOpen,
  enableToggle,
  toggleNavigateTo = `/curriculum?tab=${PART_TIME}`,
  showCallToActionBottom = false,
  marketingCard = null,
  layout,
  showLinkToCurriculum = true,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = PART_TIME
  const commonProps = {
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen,
  }
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
      {showLinkToCurriculum && (
        <SectionCTA>
          <LinkButton secondary to={`/curriculum?tab=${PART_TIME}`}>
            Full curriculum >>
          </LinkButton>
        </SectionCTA>
      )}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout != LIST_TWO_COL && 1}>
            <H2Ref>
              Part-time course curriculum{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumLayout({ firstHalf, secondHalf, layout, type })}
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
