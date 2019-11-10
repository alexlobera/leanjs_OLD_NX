import React from 'react'
import { Li } from '../layout/Ul'

import { GRAPHQL_API } from '../../config/data'
import Curriculum, { renderSection } from './Curriculum'
import { sessionsFirstHalf } from './CurriculumGraphQLBootcamp'

const type = GRAPHQL_API

const CurriculumGraphQLAPI = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${type}`,
  training,
  section = {},
  ...rest
}) => {
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  const renderSectionArgs = {
    training,
    initialDayOffset: 1,
    sectionProps,
    preEvening: true,
  }

  return (
    <Curriculum
      title="GraphQL API Curriculum"
      training={training}
      type={type}
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
