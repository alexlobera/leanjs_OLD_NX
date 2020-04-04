import React from 'react'
import { graphql } from 'gatsby'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
  LearningObjectives,
} from 'src/components/curriculum/CurriculumGraphQLTrial'
import {
  TRAINING_TYPE_TRIAL,
  TECH_GRAPHQL,
  GRAPHQL_TRIAL_ID,
} from 'src/config/data'

const Page = props => (
  <BaseTemplate
    {...props}
    trainingId={GRAPHQL_TRIAL_ID}
    trialOfTheTrainingId="5dc6f35fce62530002bd3e92"
    typeOfTraining="GraphQL trial"
    targetAudienceList={TargetAudienceList}
    learningObjectives={LearningObjectives}
    curriculum={Curriculum}
    tech={TECH_GRAPHQL}
    trainingType={TRAINING_TYPE_TRIAL}
    curriculumProps={{
      section: { isOpen: true },
    }}
  />
)

export const query = graphql`
  query($usernames: [String!] = []) {
    instanceImage: allFile(
      filter: {
        relativePath: {
          # this image should come from UM traning instance
          regex: "/pages/graphql/training/workshops/graphql-part-time-trial/remote.png/"
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
