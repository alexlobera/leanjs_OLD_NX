import React from 'react'
import { graphql } from 'gatsby'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumReactPartTime'
import TargetAudienceList from 'src/components/curriculum/CurriculumReactPartTime/TargetAudienceList'
import {
  REACT_FUNDAMENTALS,
  REACT_BOOTCAMP,
  REACT_PART_TIME,
} from 'src/config/data'

export const crossSellTypes = [REACT_FUNDAMENTALS, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_PART_TIME}
    trialTrainingId="5e3854d66bfd23000238647f"
    typeOfTraining="part-time React course"
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
          regex: "/pages/react/training/part-time-course/online.png/"
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
