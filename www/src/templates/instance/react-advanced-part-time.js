import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumAdvancedReactPartTime'
import TargetAudienceList from 'src/components/curriculum/CurriculumAdvancedReact/TargetAudienceList'
import { REACT_WORKSHOP, ADVANCED_REACT, REACT_BOOTCAMP } from 'src/config/data'

export const crossSellTypes = [REACT_WORKSHOP, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    type={ADVANCED_REACT}
    typeOfTraining="advanced part-time React training"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
