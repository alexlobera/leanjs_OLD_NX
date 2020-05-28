import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumAdvancedReact'
import TargetAudienceList from 'src/components/curriculum/CurriculumAdvancedReact/TargetAudienceList'
import {
  REACT_WORKSHOP,
  ADVANCED_REACT,
  REACT_BOOTCAMP,
  ADVANCED_REACT_ID,
  FULL_TIME,
  TRAINING_TYPE_HALF_CURRICULUM,
} from 'src/config/data'

export const crossSellTypes = [REACT_WORKSHOP, REACT_BOOTCAMP]

const Page = (props) => (
  <BaseTemplate
    {...props}
    trainingInstanceTypeName={FULL_TIME}
    trainingId={ADVANCED_REACT_ID}
    trainingType={TRAINING_TYPE_HALF_CURRICULUM}
    type={ADVANCED_REACT}
    typeOfTraining="advanced React training"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export const query = graphql`
  query($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`
export default Page
