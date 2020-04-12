import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumReactFundamentals'
import TargetAudienceList from 'src/components/curriculum/CurriculumReactFundamentals/TargetAudienceList'
import {
  REACT_PART_TIME,
  REACT_BOOTCAMP,
  TRAINING_TYPE_HALF_CURRICULUM,
  REACT_TRIAL_ID,
  REACT_FUNDAMENTALS_ID,
  FULL_TIME,
} from 'src/config/data'

export const crossSellTypes = [REACT_PART_TIME, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    trainingInstanceTypeName={FULL_TIME}
    trainingType={TRAINING_TYPE_HALF_CURRICULUM}
    trainingId={REACT_FUNDAMENTALS_ID}
    typeOfTraining="React Fundamentals training"
    trialTrainingId={REACT_TRIAL_ID}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
