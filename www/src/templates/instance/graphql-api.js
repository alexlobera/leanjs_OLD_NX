import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/CurriculumGraphQLAPI'
import {
  GRAPHQL_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_PART_TIME,
} from 'src/config/data'

export const crossSellTypes = [
  GRAPHQL_WORKSHOP,
  GRAPHQL_PART_TIME,
  GRAPHQL_BOOTCAMP,
]

const Page = props => (
  <BaseTemplate
    {...props}
    type={GRAPHQL_API}
    typeOfTraining="GraphQL API training"
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
