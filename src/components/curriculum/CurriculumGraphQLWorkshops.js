import React from 'react'
import Section from './CurriculumSection'
import { GRAPHQL_WORKSHOP, GRAPHQL_CLIENT } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'
import { curriculumCommonPropTypes } from './'

const CurriculumGraphQLWorkshops = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/graphql/training/workshops`,
  showLinkToCurriculum = false,
  trainings,
}) => {
  const type = [GRAPHQL_CLIENT, GRAPHQL_WORKSHOP]
  const commonProps = {
    showLinkToCurriculum,
    enableToggle,
    toggleNavigateTo,
    type,
    isOpen,
    trainings,
  }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="GraphQL Apollo Client"
        name="apollo"
        subTitle="Create production-ready React applications with the most community-driven GraphQL client"
        showLinkToCurriculum
      />

      <Section
        {...commonProps}
        title="GraphQL Relay Modern"
        name="relay"
        subTitle="A JavaScript framework created and used by Facebook for building data-driven React apps with GraphQL"
        showLinkToCurriculum
      />
      <Section
        {...commonProps}
        title="GraphQL with Prisma"
        name="prisma"
        subTitle="Build GraphQL auto-generated and type-safe database clients. Replace traditional ORMs with Prisma"
        showLinkToCurriculum
      />
    </React.Fragment>
  )
  const title = showTitle ? null : null // TODO

  return selectCurriculumLayout({
    firstHalf,
    layout,
    type,
    title,
    trainings,
    curriculumTo: showLinkToCurriculum ? toggleNavigateTo : undefined,
  })
}

CurriculumGraphQLWorkshops.propsTypes = curriculumCommonPropTypes

export default CurriculumGraphQLWorkshops
