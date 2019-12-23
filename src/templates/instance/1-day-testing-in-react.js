import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/workshops/CurriculumTestingInReact'
import TargetAudienceList from 'src/components/curriculum/workshops/CurriculumTestingInReact/TargetAudienceList'

import {
  REACT_WORKSHOP,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
} from 'src/config/data'

export const crossSellTypes = [ADVANCED_REACT, GRAPHQL_BOOTCAMP, REACT_WORKSHOP]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_WORKSHOP}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
    curriculumProps={{
      section: { isOpen: true },
    }}
  />
)

export default Page
