import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum_TEMP from 'src/components/curriculum/CurriculumReactBootcamp_TEMP'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/CurriculumReactBootcamp'
import {
  REACT_FUNDAMENTALS,
  REACT_PART_TIME,
  REACT_BOOTCAMP,
  ADVANCED_REACT,
} from 'src/config/data'

export const crossSellTypes = [
  REACT_FUNDAMENTALS,
  REACT_PART_TIME,
  ADVANCED_REACT,
]

const Page = props => {
  const CurriculumComp =
    props.pageContext.city === 'London' ? Curriculum_TEMP : Curriculum
  return (
    <BaseTemplate
      {...props}
      type={REACT_BOOTCAMP}
      typeOfTraining="React Bootcamp"
      crossSellTypes={crossSellTypes}
      targetAudienceList={TargetAudienceList}
      curriculum={CurriculumComp}
    />
  )
}

export default Page
