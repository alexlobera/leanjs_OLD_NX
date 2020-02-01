import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/CurriculumGraphQLPartTime'
import {
  GRAPHQL_WORKSHOP,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_API,
  GRAPHQL_PART_TIME,
  GRAPHQL_PART_TIME_TRIAL,
} from 'src/config/data'

export const crossSellTypes = [
  GRAPHQL_WORKSHOP,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_API,
  GRAPHQL_PART_TIME,
  GRAPHQL_PART_TIME_TRIAL,
]

const Page = props => (
  <BaseTemplate
    {...props}
    trialTrainingId="5e349275778e880002113474"
    type={GRAPHQL_PART_TIME}
    typeOfTraining="GraphQL part-time course"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export const query = graphql`
  query($usernames: [String!] = []) {
    instanceImage: allFile(
      filter: {
        relativePath: {
          # this image should come from UM API traning instance
          regex: "/pages/graphql/training/part-time-course/online.png/"
        }
      }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 600) {
            src
          }
        }
      }
    }
    allSanityPerson(filter: { username: { current: { in: $usernames } } }) {
      nodes {
        ...CoachInstance
      }
    }
  }
`

export default Page
