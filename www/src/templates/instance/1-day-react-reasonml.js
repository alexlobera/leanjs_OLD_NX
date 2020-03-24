import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumOneDayReactReason'
import {
  ADVANCED_REACT,
  REACT_BOOTCAMP,
  TRAINING_TYPE_WORKSHOP,
} from 'src/config/data'

export const crossSellTypes = [ADVANCED_REACT, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
    trainingType={TRAINING_TYPE_WORKSHOP}
    typeOfTraining="1-day ReasonML workshop"
    perfectStudentLink={false}
    curriculumProps={{
      section: { isOpen: true },
    }}
  />
)

export default Page
