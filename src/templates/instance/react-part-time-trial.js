import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
  LearningObjectives,
} from 'src/components/curriculum/workshops/CurriculumReactPartTimeTrial'

import { REACT_WORKSHOP } from 'src/config/data'

const Page = props => (
  <BaseTemplate
    {...props}
    trialOfTheTrainingId="5aa2ab2a7dcc782348ea2011"
    type={REACT_WORKSHOP}
    typeOfTraining="React trial"
    targetAudienceList={TargetAudienceList}
    learningObjectives={LearningObjectives}
    curriculum={Curriculum}
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
          regex: "/pages/graphql/training/workshops/graphql-part-time-trial/online.png/"
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
