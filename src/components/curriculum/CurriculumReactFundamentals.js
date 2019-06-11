import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
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
import AdvancedReduxSession from './sessions/AdvancedReduxSession'

import { LinkButton } from '../buttons'
import SectionCTA from './SectionCTA'
import { REACT_BOOTCAMP } from '../../config/data'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'

const CurriculumReactFundamentals = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/curriculum?tab=${REACT_BOOTCAMP}`,
  marketingCard = null,
  showLinkToCurriculum = true,
  trainings,
  showHackathon = false,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = REACT_BOOTCAMP
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
        title="Evening pre-course"
        name="day0"
        subTitle="React 101 and JS fundamentals"
      >
        <ReactJS101Session />
      </Section>
      <Section
        {...commonProps}
        title="Day 1"
        name="day1"
        subTitle="Modern JavaScript, Thinking in React, Routing & Data Fetching"
      >
        <ES6Session title="Modern JavaScript" />
        <ThinkingInReactSession title="Thinking in React" />
        <RoutingAndDataFetchingSession title="Routing and Data Fetching" />
      </Section>
      <Section
        {...commonProps}
        title="Day 2"
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
        title="Day 3"
        name="day3"
        subTitle="Redux Fundamentals, Advanced Redux, and FP"
      >
        <IntroReduxSession title="Redux Fundamentals" />
        <AdvancedReduxSession title="Advanced Redux" />
      </Section>
      <SectionCTA>
        <LinkButton to={`/react/curriculum?tab=${REACT_BOOTCAMP}`}>
          Full curriculum
        </LinkButton>
      </SectionCTA>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              React Fundamentals Curriculum{' '}
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

export default CurriculumReactFundamentals
