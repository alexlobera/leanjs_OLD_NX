import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactNative'
import { REACT_WORKSHOP, ADVANCED_REACT } from 'src/config/data'

export const crossSellTypes = [ADVANCED_REACT, REACT_WORKSHOP]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_WORKSHOP}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
