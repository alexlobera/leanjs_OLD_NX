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
  GRAPHQL_TRIAL_ID,
  TECH_GRAPHQL,
} from 'src/config/data'
import Feedback from 'src/components/training/FeedbackGQL'

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
    trialTrainingId={GRAPHQL_TRIAL_ID}
    tech={TECH_GRAPHQL}
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
          regex: "/pages/graphql/training/part-time/remote.png/"
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
