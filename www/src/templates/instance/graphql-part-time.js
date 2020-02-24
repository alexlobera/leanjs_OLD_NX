import React from 'react'
import { graphql } from 'gatsby'
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
import Feedback from 'src/components/training/Feedback'

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
    feedback={
      <Feedback
        trialPath="/graphql/training/workshops/graphql-part-time-trial/remote/"
        articlePath="/graphql/how-aligned-is-graphql-to-your-business-needs/"
      />
    }
    typeOfTraining="GraphQL Part-time Training"
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
          regex: "/pages/graphql/training/part-time-course/remote.png/"
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
