import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactFoundation'
import { REACT_FUNDAMENTALS, REACT_BOOTCAMP } from 'src/config/data'

export const crossSellTypes = [REACT_FUNDAMENTALS, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
