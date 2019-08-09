import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/CurriculumReactBootcamp'
import {
  REACT_FUNDAMENTALS,
  PART_TIME,
  REACT_BOOTCAMP,
  ADVANCED_REACT,
} from 'src/config/data'

export const crossSellTypes = [REACT_FUNDAMENTALS, PART_TIME, ADVANCED_REACT]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_BOOTCAMP}
    typeOfTraining="React bootcamp"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
