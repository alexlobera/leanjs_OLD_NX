import React from 'react'
import { graphql } from 'gatsby'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumReactFundamentalsPartTime'
import TargetAudienceList from 'src/components/curriculum/CurriculumReactFundamentals/TargetAudienceList'
import {
  // REACT_FUNDAMENTALS,
  REACT_BOOTCAMP,
  // REACT_PART_TIME,
  PART_TIME,
  TRAINING_TYPE_HALF_CURRICULUM,
} from 'src/config/data'

export const crossSellTypes = [REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    // type={REACT_PART_TIME}
    // trialTrainingId="5e3854d66bfd23000238647f"
    // typeOfTraining="part-time React training"
    trainingInstanceTypeName={PART_TIME}
    trainingType={TRAINING_TYPE_HALF_CURRICULUM}
    trialTrainingId="5e3854d66bfd23000238647f"
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
          # this image should come from UM traning instance
          regex: "/pages/react/training/part-time/remote.png/"
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
