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
      For working developers, experience with JavaScript and npm - not for
      beginners!
    </Li>
    <Li>Perfect for developers with 1+ year building backends and REST APIs</Li>
    <Li>Build production ready apps leverging GraphQL.</Li>
  </React.Fragment>
)

export const LearningObjectivesList = () => (
  <React.Fragment>TODO</React.Fragment>
)

CurriculumGraphQLAPI.LearningObjectivesList = LearningObjectivesList
CurriculumGraphQLAPI.TargetAudienceList = TargetAudienceList

export default CurriculumGraphQLAPI
