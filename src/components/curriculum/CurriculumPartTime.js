import React from 'react'
import { LinkButton } from '../buttons'
import { H2Ref, H4 } from '../text'
import Link from '../navigation/Link'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import ES6Session from './sessions/ES6Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/design/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import CurriculumCard from './CurriculumCard'
import { PART_TIME } from '../../config/data'
import SectionCTA from './SectionCTA'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'
import {
  LearningObjectivesList,
  TargetAudienceList,
} from './CurriculumReactFundamentals'

const PartTimeFinalProject = () => (
  <Ul>
    <Li>
      Consolidate your new React skills by adding Styled-Components and Redux to
      the application you built on session 5
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
  toggleNavigateTo = `/react/curriculum?tab=${PART_TIME}`,
  showCallToActionBottom = false,
  marketingCard = null,
  layout,
  showLinkToCurriculum = true,
  trainings,
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
      <H4>Course outline:</H4>

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
        title="Session 5 - Recap: build a React app from scratch"
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
      <Section {...commonProps} title="Session 7 - Redux" name="session7">
        <IntroReduxSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 8 - Testing Fundamentals in JS"
        name="session8"
      >
        <TestingIntroSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 9 - Advanced Redux"
        name="session9"
      >
        <AdvancedReduxSession />
      </Section>
      <Section
        {...commonProps}
        title="Session 10 - React Redux Real-world Project"
        name="session10"
      >
        <PartTimeFinalProject />
      </Section>
      {showLinkToCurriculum && (
        <SectionCTA>
          <LinkButton to={`/react/curriculum?tab=${PART_TIME}`}>
            Full curriculum
          </LinkButton>
        </SectionCTA>
      )}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
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
      {selectCurriculumLayout({
        firstHalf,
        secondHalf,
        layout,
        type,
        trainings,
      })}
      {showCallToActionBottom ? (
        <Row>
          <Col lg={10} lgOffset={1}>
            <CurriculumCard>
              <Row>
                <Col lg={5} lgOffset={1}>
                  Looking for the most complete React curriculum? Our React
                  bootcamp has it all...
                </Col>
                <Col lg={6} center>
                  <LinkButton to="/react/training/bootcamp">
                    React Bootcamp
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

CurriculumPartTime.LearningObjectivesList = LearningObjectivesList
CurriculumPartTime.TargetAudienceList = TargetAudienceList

export default CurriculumPartTime
