import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumGraphQLApollo'
import {
  GRAPHQL_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_PART_TIME,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_WORKSHOP_APOLLO_CLIENT_ID,
} from 'src/config/data'

export const crossSellTypes = [GRAPHQL_API, GRAPHQL_PART_TIME, GRAPHQL_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    trainingId={GRAPHQL_WORKSHOP_APOLLO_CLIENT_ID}
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

export const query = graphql`
  query($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`
export default Page
