import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumReactFundamentals'
import TargetAudienceList from 'src/components/curriculum/CurriculumReactFundamentals/TargetAudienceList'
import {
  REACT_PART_TIME,
  REACT_BOOTCAMP,
  REACT_FUNDAMENTALS,
  REACT_TRIAL_ID,
  REACT_FUNDAMENTALS_ID,
} from 'src/config/data'

export const crossSellTypes = [REACT_PART_TIME, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_FUNDAMENTALS}
    trainingId={REACT_FUNDAMENTALS_ID}
    typeOfTraining="React fundamentals training"
    trialTrainingId={REACT_TRIAL_ID}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
