import React from 'react'
import { Li } from '../../../layout/Ul'
import { LearningObjectives } from '../../sessions/ReactGraphQLIntroSession'

const LearningObjectivesList = ({ showAll = false }) => (
  <React.Fragment>
    <LearningObjectives showAll={showAll} />
    <Li>
      Be able to test complex React applications writing tests that enforce code
      quality and good programming principles.
    </Li>
    <Li>Foster critical thinking about what and how to test</Li>
  </React.Fragment>
)

export default LearningObjectivesList
