import React from 'react'
import { ADVANCED_REACT } from '../../config/data'
import { Li } from '../layout/Ul'
import { sessionsSecondHalf as sessionsSecondHalfBootcamp } from './CurriculumReactBootcamp'
import Curriculum, { renderSection } from './Curriculum'

const CurriculumAdvancedReact = ({
  toggleNavigateTo = `/react/curriculum?tab=${ADVANCED_REACT}`,
  training,
  section = {},
  ...rest
}) => {
  const halfWayThough = Math.floor(sessionsSecondHalfBootcamp.length / 2)
  const sessionsFirstHalf = sessionsSecondHalfBootcamp.slice(0, halfWayThough)
  const sessionsSecondHalf = sessionsSecondHalfBootcamp.slice(
    halfWayThough,
    sessionsSecondHalfBootcamp.length
  )
  const type = ADVANCED_REACT
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  const initialIndex = 1
  const titlePrefix = 'Advanced React Day'
  return (
    <Curriculum
      title="Advanced React Curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(
        renderSection({
          initialIndex,
          training,
          sectionProps,
          titlePrefix,
        })
      )}
      secondHalf={sessionsSecondHalf.map(
        renderSection({
          initialIndex: sessionsFirstHalf.length + initialIndex,
          training,
          sectionProps,
          titlePrefix,
        })
      )}
    />
  )
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      Ready to take a step forward to{' '}
      <strong>become a senior React developer/ architect</strong> able to make
      critical decisions about the architecture of real-world React projects.
    </Li>
    <Li>
      You are interested in intense training for extremely rapid learning by
      focusing on one thing during 3 days.
    </Li>
    <Li>
      Want to discuss your complex React challenges with other advanced React
      developers from different companies and countries.
    </Li>
    <Li>
      Ideal for{' '}
      <strong>React developers with 1+ year of profesional experience</strong>.
      Not for React beginners!
    </Li>
  </React.Fragment>
)

const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>
      Be able to test complex React applications writing tests that promote code
      quality and best programming practices.
    </Li>
    <Li>
      Learn how to style React applications in an idiomatic way and encourage
      design consistency using design systems.
    </Li>
    <Li>
      Comprehend modern front-end JavaScript using Functional Programming (FP)
    </Li>
    <Li>
      Understand the best practices and patterns for building real-world
      performant applications using advanced React.
    </Li>
  </React.Fragment>
)

CurriculumAdvancedReact.LearningObjectivesList = LearningObjectivesList
CurriculumAdvancedReact.TargetAudienceList = TargetAudienceList

export default CurriculumAdvancedReact
