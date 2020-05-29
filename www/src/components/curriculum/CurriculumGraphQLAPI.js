import React from 'react'
import { Li } from '../layout/Ul'

import LearningObjectivesUl from './LearningObjectivesUl'
import {
  GRAPHQL_API_ID,
  TECH_GRAPHQL,
  FULL_TIME,
  TRAINING_TYPE_HALF_CURRICULUM,
} from '../../config/data'
import Curriculum, { renderSection } from './Curriculum'
import SpecificationSession, {
  LearningObjectives as SpecsLearningObjectives,
} from './sessions/graphql/server/SpecificationSession'
import ThinkingInGraphQLSession, {
  LearningObjectives as ThinkingInLearningObjectives,
} from './sessions/graphql/server/ThinkingInGraphQLSession'
import SchemaDesignSession, {
  LearningObjectives as SchemaDesignLearningObjectives,
} from './sessions/graphql/server/SchemaDesignSession'
import GraphQLServerConsoliationOneSession from './sessions/graphql/server/GraphQLServerConsoliationOneSession'
import GraphQLServerConsoliationTwoSession from './sessions/graphql/server/GraphQLServerConsoliationTwoSession'
import FederationSession, {
  LearningObjectives as FederationLearningObjectives,
} from './sessions/graphql/server/FederationSession'
import ToolingAndPracticesSession, {
  LearningObjectives as ToolingAndPracticesSessionLearningObjectives,
} from './sessions/graphql/server/ToolingAndPracticesSession'
import HasuraSession, {
  LearningObjectives as HasuraLearningObjectives,
} from './sessions/graphql/server/HasuraSession'

export const sessions = [
  {
    subTitle: ' Thinking in GraphQL, and GraphQL Specs',
    comps: [ThinkingInGraphQLSession, SpecificationSession],
  },
  {
    subTitle: 'Consolidation part 1, Schema design, and Apollo Federation',
    comps: [
      GraphQLServerConsoliationOneSession,
      SchemaDesignSession,
      FederationSession,
    ],
  },
  {
    subTitle: 'Consolidation part 2, Hasura, and Advanced tooling & practices',
    comps: [
      GraphQLServerConsoliationTwoSession,
      HasuraSession,
      ToolingAndPracticesSession,
    ],
  },
]

const trainingInstanceTypeName = FULL_TIME
const tech = TECH_GRAPHQL
const trainingType = TRAINING_TYPE_HALF_CURRICULUM
const trainingId = GRAPHQL_API_ID

const CurriculumGraphQLAPI = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${trainingId}${trainingInstanceTypeName}`,
  training,
  section = {},
  ...rest
}) => {
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    trainingInstanceTypeName,
    tech,
    trainingType,
    trainingId,
  }
  const renderSectionArgs = {
    training,
    initialDayOffset: 0,
    sectionProps,
  }

  return (
    <Curriculum
      title="GraphQL API Training Outline"
      training={training}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      trainingId={trainingId}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessions.map(renderSection(renderSectionArgs))}
    />
  )
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>Learn the best practices to expose data using GraphQL schemas</Li>
    <Li>
      Understand how to connect GraphQL to different data sources in a secure
      way
    </Li>
    <Li>Comprehend how to effectively run a GraphQL API in production</Li>
    <Li>
      You are JS developer interested in building modern APIs that enable faster
      product development at scale.
    </Li>
  </React.Fragment>
)

export const learningObjectives = [
  <ThinkingInLearningObjectives />,
  <SpecsLearningObjectives />,
  <SchemaDesignLearningObjectives />,
  <FederationLearningObjectives />,
  <HasuraLearningObjectives />,
  <ToolingAndPracticesSessionLearningObjectives />,
]

export const LearningObjectivesList = (props) => (
  <LearningObjectivesUl {...props}>{learningObjectives}</LearningObjectivesUl>
)

CurriculumGraphQLAPI.LearningObjectivesList = LearningObjectivesList
CurriculumGraphQLAPI.TargetAudienceList = TargetAudienceList

export default CurriculumGraphQLAPI
