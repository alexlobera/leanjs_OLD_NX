import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumOneDayReactReason'
import {
  ADVANCED_REACT,
  REACT_BOOTCAMP,
  TRAINING_TYPE_WORKSHOP,
  REACT_WORKSHOP_REACT_REASON_ID,
} from 'src/config/data'

export const crossSellTypes = [ADVANCED_REACT, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    trainingId={REACT_WORKSHOP_REACT_REASON_ID}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
    trainingType={TRAINING_TYPE_WORKSHOP}
    typeOfTraining="1-day ReasonML workshop"
    perfectStudentLink={false}
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
