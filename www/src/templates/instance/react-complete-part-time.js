import React from 'react'
import { graphql } from 'gatsby'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumReactCompletePartTime'
import TargetAudienceList from 'src/components/curriculum/CurriculumReactBootcamp/TargetAudienceList'
import {
  REACT_FUNDAMENTALS,
  REACT_BOOTCAMP,
  TRAINING_TYPE_FULL_CURRICULUM,
  PART_TIME,
  REACT_TRIAL_ID,
  REACT_BOOTCAMP_ID,
} from 'src/config/data'

export const crossSellTypes = [REACT_FUNDAMENTALS, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    trainingId={REACT_BOOTCAMP_ID}
    trainingInstanceTypeName={PART_TIME}
    trainingType={TRAINING_TYPE_FULL_CURRICULUM}
    trialTrainingId={REACT_TRIAL_ID}
    typeOfTraining="part-time React training"
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
