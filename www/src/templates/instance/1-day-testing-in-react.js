import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/workshops/CurriculumTestingInReact'
import TargetAudienceList from 'src/components/curriculum/workshops/CurriculumTestingInReact/TargetAudienceList'
import LearningObjectives from 'src/components/curriculum/workshops/CurriculumTestingInReact/LearningObjectivesList'

import {
  REACT_WORKSHOP,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  TRAINING_TYPE_WORKSHOP,
} from 'src/config/data'

export const crossSellTypes = [ADVANCED_REACT, GRAPHQL_BOOTCAMP, REACT_WORKSHOP]

const Page = props => (
  <BaseTemplate
    {...props}
    trainingType={TRAINING_TYPE_WORKSHOP}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    learningObjectives={LearningObjectives}
    curriculum={Curriculum}
    curriculumProps={{
      section: { isOpen: true },
    }}
  />
)

export default Page
