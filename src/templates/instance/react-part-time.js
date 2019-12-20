import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumReactPartTime'
import TargetAudienceList from 'src/components/curriculum/CurriculumReactPartTime/TargetAudienceList'
import {
  REACT_FUNDAMENTALS,
  REACT_BOOTCAMP,
  REACT_PART_TIME,
} from 'src/config/data'

export const crossSellTypes = [REACT_FUNDAMENTALS, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_PART_TIME}
    typeOfTraining="part-time React course"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
