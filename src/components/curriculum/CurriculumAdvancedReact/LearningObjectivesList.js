import React from 'react'
import { Li } from '../../layout/Ul'
import TestingLearningObjectives from '../workshops/CurriculumTestingInReact/LearningObjectivesList'
import StylingLearningObjectives from '../workshops/CurriculumStylingAndAdvUI/LearningObjectivesList'

const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>
      Be able to use advanced React patterns & functional programming to improve
      performance and code quality.
    </Li>
    <StylingLearningObjectives />
    <TestingLearningObjectives />
    <Li>Learn best practices to build real-world React applications.</Li>
  </React.Fragment>
)

export default LearningObjectivesList
