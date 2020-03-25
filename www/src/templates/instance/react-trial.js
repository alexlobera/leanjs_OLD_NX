import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
  LearningObjectives,
} from 'src/components/curriculum/workshops/CurriculumReactTrial'

import { REACT_WORKSHOP } from 'src/config/data'

const Page = props => (
  <BaseTemplate
    {...props}
    trialOfTheTrainingId="5aa2ab2a7dcc782348ea2011"
    type={REACT_WORKSHOP}
    typeOfTraining="React trial"
    targetAudienceList={TargetAudienceList}
    learningObjectives={LearningObjectives}
    curriculum={Curriculum}
    curriculumProps={{
      section: { isOpen: true },
    }}
  />
)

export default Page
