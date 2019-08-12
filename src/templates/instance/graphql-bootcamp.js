import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/CurriculumGraphQLBootcamp'
import {
  GRAPHQL_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_BOOTCAMP,
} from 'src/config/data'

export const crossSellTypes = [GRAPHQL_WORKSHOP, GRAPHQL_BOOTCAMP, GRAPHQL_API]

const Page = props => (
  <BaseTemplate
    {...props}
    type={GRAPHQL_BOOTCAMP}
    typeOfTraining="GraphQL API training"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page
