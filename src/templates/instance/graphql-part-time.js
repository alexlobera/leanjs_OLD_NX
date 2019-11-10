import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/CurriculumGraphQLPartTime'
import {
  GRAPHQL_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_PART_TIME,
} from 'src/config/data'

export const crossSellTypes = [GRAPHQL_WORKSHOP, GRAPHQL_BOOTCAMP, GRAPHQL_API]

const Page = props => (
  <BaseTemplate
    {...props}
    type={GRAPHQL_PART_TIME}
    typeOfTraining="GraphQL part-time course"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
