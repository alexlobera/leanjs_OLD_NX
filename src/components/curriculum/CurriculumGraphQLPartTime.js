import React from 'react'
import { Li } from '../layout/Ul'
import NodejsSession from './sessions/graphql/server/NodejsSession'
import ThinkingInGraphQLSession from './sessions/graphql/server/ThinkingInGraphQLSession'
import SchemaDesignSession from './sessions/graphql/server/SchemaDesignSession'
import ErrorAndSecuritySession from './sessions/graphql/server/ErrorAndSecuritySession'
import GraphQLServerRecapSession from './sessions/graphql/server/GraphQLServerRecapSession'
import GraphQLClientFundamentalsSession from './sessions/graphql/client/GraphQLClientFundamentalsSession'
import AdvGQLQueryMutationSession from './sessions/graphql/client/AdvGQLQueryMutationSession'
import GraphQLClientRecapSession from './sessions/graphql/client/GraphQLClientRecapSession'
import { GRAPHQL_PART_TIME } from '../../config/data'
import Curriculum from './Curriculum'
import renderPartTimeSection from './renderPartTimeSession'

const defaultSessionsFirstHalf = [
  { Comp: NodejsSession, group: 1 },
  { Comp: ThinkingInGraphQLSession, group: 1 },
  { Comp: SchemaDesignSession, group: 2 },
  { Comp: ErrorAndSecuritySession, group: 2 },
]
const defaultSessionsSecondHalf = [
  { Comp: GraphQLServerRecapSession, group: 3 },
  { Comp: GraphQLClientFundamentalsSession, group: 3 },
  { Comp: AdvGQLQueryMutationSession, group: 4 },
  { Comp: GraphQLClientRecapSession, group: 4 },
]

const CurriculumPartTime = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${GRAPHQL_PART_TIME}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  sessionsSecondHalf = defaultSessionsSecondHalf,
  ...rest
}) => {
  const type = GRAPHQL_PART_TIME
  const initialIndex = 0

  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  const renderSectionWithProps = renderPartTimeSection({
    sectionProps,
    training,
  })

  return (
    <Curriculum
      title="GraphQL Part-time course curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(initialIndex))}
      secondHalf={sessionsSecondHalf.map(
        renderSectionWithProps(sessionsSecondHalf.length + initialIndex)
      )}
    />
  )
}

export const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>
      Master React principles, such as the React composition model and the
      one-way explicit data flow, to leverage React's full potential.
    </Li>
    <Li>
      Understand how the most popular libraries to build React applications work
      under the hood:{' '}
      <code>
        react, react-dom, react-router, redux, react-redux, jest,
        styled-components
      </code>
    </Li>
    <Li>
      Create a solid foundation so in future you can quickly learn advanced
      patterns and techniques as you progress in your career as React developer.
    </Li>
    <Li>
      Understand the different state management approaches in the React
      ecosystem.
    </Li>
    <Li>Learn how to style React applications in an idiomatic way.</Li>
  </React.Fragment>
)

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      A developer{' '}
      <strong>
        interested in progressively shifting towards front-end development in
        React
      </strong>
      .
    </Li>
    <Li>
      You won't have to make critical decisions on your own in the React
      projects you will work on.
    </Li>
    <Li>
      You are interested in intense training for extremely rapid learning but
      you don't want to cut into valuable work-days.
    </Li>
    <Li>
      You learn by doing. This is a hands-on project-based training - most of
      the time you'll be coding.
    </Li>
    <Li>
      You think code reviews and pair programming are useful and you are
      interested in getting feedback on your coding.
    </Li>
  </React.Fragment>
)

CurriculumPartTime.LearningObjectivesList = LearningObjectivesList
CurriculumPartTime.TargetAudienceList = TargetAudienceList

export default CurriculumPartTime
