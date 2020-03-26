import React from 'react'
import { Li } from '../layout/Ul'

import {
  GRAPHQL_API_ID,
  TECH_GRAPHQL,
  PART_TIME,
  TRAINING_TYPE_HALF_CURRICULUM,
} from '../../config/data'
import Curriculum, { renderSection } from './Curriculum'
import { sessionsFirstHalf } from './CurriculumGraphQLBootcamp'

const trainingInstanceTypeName = PART_TIME
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
      firstHalf={sessionsFirstHalf.map(renderSection(renderSectionArgs))}
    />
  )
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      A front-end developer or full-stack developer familiar with JavaScript
      that wants to build real-world GraphQL APIs?
    </Li>
    <Li>
      Perfect for developers with 6+ months building backends and REST APIs
    </Li>
  </React.Fragment>
)

export const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>Learn the best practices to expose data using GraphQL schemas</Li>
    <Li>
      Understand how to connect GraphQL to different data sources in a secure
      way
    </Li>
    <Li>Comprehend how to effectively run a GraphQL API in production</Li>
  </React.Fragment>
)

CurriculumGraphQLAPI.LearningObjectivesList = LearningObjectivesList
CurriculumGraphQLAPI.TargetAudienceList = TargetAudienceList

export default CurriculumGraphQLAPI
