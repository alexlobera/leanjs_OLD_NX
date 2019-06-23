import React from 'react'
import Link from '../navigation/Link'
import { H2Ref, H4 } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import ES6Session from './sessions/ES6Session'
import ReactJS101Session from './sessions/ReactJS101Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/design/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import E2ESession from './sessions/E2ESession'
import HoCsRenderPropsStateReducerSession from './sessions/HoCsRenderPropsStateReducerSession'
import ReactPerformanceSession from './sessions/ReactPerformanceSession'
import Hackathon from './sessions/Hackathon'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'

import { LinkButton } from '../buttons'
import SectionCTA from './SectionCTA'
import { REACT_BOOTCAMP } from '../../config/data'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'
import { trainingDateByDay } from '../utils'

const CurriculumBootcamp = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/curriculum?tab=${REACT_BOOTCAMP}`,
  marketingCard = null,
  showLinkToCurriculum = true,
  trainings,
  showHackathon = false,
  training = {},
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = REACT_BOOTCAMP
  const commonProps = {
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen,
  }
  const trainingTime = '09:00 - 18:30'
  // TODO remove this DEPRECATED_ logic after July 2019
  const DEPRECATED_IS_JULY2019 =
    training.startDate && training.startDate === '2019-07-07T08:00:00.000Z'
  const meetupTime = DEPRECATED_IS_JULY2019 ? '16:30 - 18:30' : '18:30 - 21:00'
  const firstHalf = (
    <React.Fragment>
      <H4>Course outline:</H4>
      <Section
        {...commonProps}
        title="Evening pre-bootcamp (optional)"
        name="day0"
        subTitle={`React 101 and JS fundamentals (${trainingDateByDay({
          training,
        })}  ${meetupTime})`}
      >
        <ReactJS101Session />
      </Section>
      <Section
        {...commonProps}
        title="React Bootcamp Day 1"
        name="day1"
        subTitle={`Modern JavaScript, Thinking in React, Routing & Data Fetching (${trainingDateByDay(
          { training, day: 1 }
        )} ${trainingTime})`}
      >
        <ES6Session title="Modern JavaScript" />
        <ThinkingInReactSession title="Thinking in React" />
        <RoutingAndDataFetchingSession title="Routing and Data Fetching" />
      </Section>
      <Section
        {...commonProps}
        title="React Bootcamp Day 2"
        name="day2"
        subTitle={`Forms, Authentication, Styling in React (${trainingDateByDay(
          { training, day: 2 }
        )} ${trainingTime})`}
      >
        <FormsAndAuthSession title="Forms and Authentication" />
        <ReactFundamentalsRecapSession
          title="React Fundamentals recap, build a React app from scratch on your own to
          consolidate:"
        />
        <StylingInReactSession title="Styling in React" />
      </Section>
      {marketingCard}
      {showLinkToCurriculum && showHackathon && (
        <SectionCTA>
          <LinkButton to={`/react/curriculum?tab=${REACT_BOOTCAMP}`}>
            Full curriculum
          </LinkButton>
        </SectionCTA>
      )}
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="React Bootcamp Day 3"
        name="day3"
        subTitle={`Redux Fundamentals, Advanced Redux, and FP (${trainingDateByDay(
          { training, day: 3 }
        )} ${trainingTime})`}
      >
        <IntroReduxSession title="Redux Fundamentals" />
        <AdvancedReduxSession title="Advanced Redux" />
      </Section>
      <Section
        {...commonProps}
        title="React Bootcamp Day 4"
        name="day4"
        subTitle={`Advanced React patterns, Hooks, and performance (${trainingDateByDay(
          { training, day: 4 }
        )} ${trainingTime})`}
      >
        <HoCsRenderPropsStateReducerSession title="Functional Programming & Advanced React patterns" />
        <ReactPerformanceSession title="Performance" />
      </Section>
      <Section
        {...commonProps}
        title="React Bootcamp Day 5"
        name="day5"
        subTitle={`Real-world Testing in React (${trainingDateByDay({
          training,
          day: 5,
        })} ${trainingTime})`}
      >
        <TestingIntroSession title="Testing Foundation in JS" />
        <TestingInReactSession title="Testing in React" />
        <E2ESession title="End-to-End Testing" />
      </Section>
      {showHackathon ? (
        <Section
          type={type}
          enableToggle={true}
          title="React Bootcamp Day 6 (optional)"
          name="day6"
          subTitle={`GraphQL and final project (${trainingDateByDay({
            training,
            day: 6,
          })} ${trainingTime})`}
        >
          <Hackathon />
        </Section>
      ) : (
        <SectionCTA>
          <LinkButton to={`/react/curriculum?tab=${REACT_BOOTCAMP}`}>
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
      {selectCurriculumLayout({
        firstHalf,
        secondHalf,
        layout,
        type,
        trainings,
      })}
    </React.Fragment>
  )
}

export default CurriculumBootcamp
