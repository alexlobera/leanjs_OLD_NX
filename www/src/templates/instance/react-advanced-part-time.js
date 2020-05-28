import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumAdvancedReactPartTime'
import TargetAudienceList from 'src/components/curriculum/CurriculumAdvancedReact/TargetAudienceList'
import {
  REACT_WORKSHOP,
  TRAINING_TYPE_HALF_CURRICULUM,
  REACT_BOOTCAMP,
  PART_TIME,
  ADVANCED_REACT_ID,
} from 'src/config/data'

export const crossSellTypes = [REACT_WORKSHOP, REACT_BOOTCAMP]

const Page = (props) => (
  <BaseTemplate
    {...props}
    trainingId={ADVANCED_REACT_ID}
    trainingInstanceTypeName={PART_TIME}
    trainingType={TRAINING_TYPE_HALF_CURRICULUM}
    typeOfTraining="advanced part-time React training"
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
