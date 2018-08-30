import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import Section, { List, curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import GraphQLSession from './sessions/GraphQLSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import HoCsAndRenderPropsSession from './sessions/HoCsAndRenderPropsSession'
import CompoundCompAndContextSession from './sessions/CompoundCompAndContextSession'
import ServerSideRenderingSession from './sessions/ServerSideRenderingSession'
import Hackathon from './sessions/Hackathon'

const CurriculumAdvancedReact = ({
  showTitle = true,
  list,
  showToggle,
  toggleNavigateTo = '/curriculum?tab=advanced-react',
  marketingCard = null,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const commonProps = { showToggle, toggleNavigateTo: toggleNavigateToSection }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Advanced React Day 1"
        name="day1"
        subTitle="Testing in React, Advanced React Patterns II, Server-side Rendering"
      >
        <HoCsAndRenderPropsSession title="Functional Programming & Advanced React patterns I" />
        <GraphQLSession title="GraphQL and Apollo client" />
        <ServerSideRenderingSession title="Server Side Rendering (SSR)" />
      </Section>
      {marketingCard}
      <Section
        {...commonProps}
        title="Advanced React Day 2"
        name="day2"
        subTitle="Functional Programming, Advanced Patterns I, GraphQL, and Advanced Redux"
      >
        <TestingInReactSession title="Testing in React" />
        <CompoundCompAndContextSession
          title="Advanced React patterns to create even more reusable
          UIs"
        />
        <AdvancedReduxSession title="Functional programming & advanced Redux" />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <Section
      {...commonProps}
      title="Advanced React Day 3"
      name="day3"
      subTitle="Hackathon"
    >
      <Hackathon
        title="Last day real-world React challenge. We'll implement an app
          in teams from scratch"
      />
    </Section>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={1}>
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
    </React.Fragment>
  )
}

export default CurriculumAdvancedReact
