import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumGraphQLApollo'
import {
  GRAPHQL_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_PARTIME,
  GRAPHQL_BOOTCAMP,
} from 'src/config/data'

export const crossSellTypes = [GRAPHQL_API, GRAPHQL_PARTIME, GRAPHQL_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    type={GRAPHQL_WORKSHOP}
    typeOfTraining="GraphQL client workshop"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
    curriculumProps={{
      section: { isOpen: true },
    }}
  />
)

export default Page
