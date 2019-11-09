import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/CurriculumGraphQLBootcamp'
import {
  GRAPHQL_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_PARTIME,
} from 'src/config/data'

export const crossSellTypes = [GRAPHQL_WORKSHOP, GRAPHQL_PARTIME, GRAPHQL_API]

const Page = props => (
  <BaseTemplate
    {...props}
    type={GRAPHQL_BOOTCAMP}
    typeOfTraining="GraphQL Bootcamp"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
