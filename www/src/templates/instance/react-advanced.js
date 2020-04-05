import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumAdvancedReact'
import TargetAudienceList from 'src/components/curriculum/CurriculumAdvancedReact/TargetAudienceList'
import {
  REACT_WORKSHOP,
  ADVANCED_REACT,
  REACT_BOOTCAMP,
  ADVANCED_REACT_ID,
} from 'src/config/data'

export const crossSellTypes = [REACT_WORKSHOP, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    trainingId={ADVANCED_REACT_ID}
    type={ADVANCED_REACT}
    typeOfTraining="advanced React training"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
