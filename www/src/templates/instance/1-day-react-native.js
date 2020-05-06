import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactNative3Day'
import {
  REACT_WORKSHOP,
  ADVANCED_REACT,
  TRAINING_TYPE_WORKSHOP,
  REACT_WORKSHOP_REACT_NATIVE_ID,
} from 'src/config/data'

export const crossSellTypes = [ADVANCED_REACT, REACT_WORKSHOP]

const Page = props => (
  <BaseTemplate
    {...props}
    trainingId={REACT_WORKSHOP_REACT_NATIVE_ID}
    trainingType={TRAINING_TYPE_WORKSHOP}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
    typeOfTraining="3-day React Native workshop"
    curriculumProps={{
      section: { isOpen: true },
    }}
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
