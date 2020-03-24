import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumReactFundamentals'
import TargetAudienceList from 'src/components/curriculum/CurriculumReactFundamentals/TargetAudienceList'
import {
  REACT_PART_TIME,
  REACT_BOOTCAMP,
  REACT_FUNDAMENTALS,
} from 'src/config/data'

export const crossSellTypes = [REACT_PART_TIME, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_FUNDAMENTALS}
    typeOfTraining="React fundamentals training"
    trialTrainingId="5e3854d66bfd23000238647f"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
