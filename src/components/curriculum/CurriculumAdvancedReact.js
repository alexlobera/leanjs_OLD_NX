import React from 'react'
import Link from '../navigation/Link'
import { LinkButton } from '../buttons'
import { H2Ref } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import GraphQLSession from './sessions/GraphQLSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import ServerSideRenderingSession from './sessions/ServerSideRenderingSession'
import HoCsRenderPropsStateReducerSession from './sessions/HoCsRenderPropsStateReducerSession'
import CompoundCompAndContextSession from './sessions/CompoundCompAndContextSession'
import Hackathon from './sessions/Hackathon'
import SectionCTA from './SectionCTA'
import { ADVANCED_REACT } from '../../config/data'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'

const CurriculumAdvancedReact = ({
  showTitle = true,
  isOpen,
  enableToggle,
  toggleNavigateTo = `/curriculum?tab=${ADVANCED_REACT}`,
  marketingCard = null,
  showLinkToCurriculum = true,
  layout,
  trainings,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = ADVANCED_REACT
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
        title="Advanced React Day 1"
        name="day1"
        subTitle="Functional Programming, Advanced React patterns I, and GraphQL"
      >
        <HoCsRenderPropsStateReducerSession title="Functional Programming & Advanced React patterns I" />
        <GraphQLSession title="GraphQL and Apollo client" />
      </Section>
      {marketingCard}
      <Section
        {...commonProps}
        title="Advanced React Day 2"
        name="day2"
        subTitle="Real-world Testing in React, Advanced React Patterns II, and SSR"
      >
        <TestingInReactSession title="Testing in React" />
        <CompoundCompAndContextSession
          title="Advanced React patterns to create even more reusable
          UIs"
        />
        <ServerSideRenderingSession title="Server Side Rendering (SSR)" />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Advanced React Day 3"
        name="day3"
        subTitle="Real-world Project"
      >
        <Hackathon
          title="Last day real-world React challenge. We'll implement an app
            in teams from scratch"
        />
      </Section>
      {showLinkToCurriculum && (
        <SectionCTA>
          <LinkButton secondary to={`/curriculum?tab=${ADVANCED_REACT}`}>
            Full curriculum>>
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
              Advanced React Curriculum{' '}
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

export default CurriculumAdvancedReact
