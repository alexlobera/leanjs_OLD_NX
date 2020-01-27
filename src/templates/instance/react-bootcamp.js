import React from 'react'
import { graphql } from 'gatsby'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumReactBootcamp'
import TargetAudienceList from 'src/components/curriculum/CurriculumReactBootcamp/TargetAudienceList'
import {
  REACT_FUNDAMENTALS,
  REACT_PART_TIME,
  REACT_BOOTCAMP,
  ADVANCED_REACT,
} from 'src/config/data'

export const crossSellTypes = [
  REACT_FUNDAMENTALS,
  REACT_PART_TIME,
  ADVANCED_REACT,
]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_BOOTCAMP}
    typeOfTraining="React Bootcamp"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export const query = graphql`
  query($usernames: [String!] = []) {
    allSanityPerson(filter: { username: { current: { in: $usernames } } }) {
      nodes {
        ...CoachInstance
      }
    }
  }
`

export default Page
