import React from 'react'

import Section from './CurriculumSection'
import Curriculum from './Curriculum'
import { TECH_GRAPHQL } from 'src/config/data'
const workshopBasePath = '/graphql/training/workshops/'

const tech = TECH_GRAPHQL

const CurriculumGraphQLWorkshops = ({ section = {}, ...rest }) => {
  const sectionProps = {
    ...section,
    tech,
  }
  return (
    <Curriculum
      title="GraphQL Workshops"
      curriculumTitle="Workshop offerings"
      tech={tech}
      {...rest}
      firstHalf={
        <React.Fragment>
          <Section
            {...sectionProps}
            title="GraphQL Apollo Client"
            subTitle="Create production-ready React applications with the most community-driven GraphQL client"
            toggleNavigateTo={`${workshopBasePath}apollo-client/`}
          />
          <Section
            {...sectionProps}
            title="GraphQL Relay Modern"
            subTitle="A JavaScript framework created and used by Facebook for building data-driven React apps with GraphQL"
            toggleNavigateTo={`${workshopBasePath}interest-form#details`}
          />
          <Section
            {...sectionProps}
            title="GraphQL with Prisma"
            subTitle="Build GraphQL auto-generated and type-safe database clients. Replace traditional ORMs with Prisma"
            toggleNavigateTo={`${workshopBasePath}interest-form#details`}
          />
        </React.Fragment>
      }
    />
  )
}

export default CurriculumGraphQLWorkshops
