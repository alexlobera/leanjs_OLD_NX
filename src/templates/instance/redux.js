import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumOneDayRedux'

export const Page = props => (
  <BaseTemplate
    {...props}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
