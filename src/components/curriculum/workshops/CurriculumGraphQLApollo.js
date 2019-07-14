import React from 'react'
import Section, { curriedToggleNavigateTo } from '../CurriculumSection'
import Link from '../../navigation/Link'
import { ONE_DAY_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
import GraphQLApolloClientDaySessions from '../sessions/GraphQLApolloClientDaySessions'
import selectCurriculumLayout from '../selectCurriculumLayout'

const CurriculumGraphQLApollo = ({
  showTitle = true,
  layout,
  enableToggle = true,
  isOpen = true,
  toggleNavigateTo,
  showLinkToCurriculum = false,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = ONE_DAY_WORKSHOP
  const commonProps = {
    showLinkToCurriculum,
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen,
  }

  const firstHalf = (
    <Section {...commonProps} title="GraphQL React Apollo Client">
      <GraphQLApolloClientDaySessions />
    </Section>
  )
  const secondHalf = null

  const title = showTitle ? (
    <H2Ref>
      GraphQL Apollo Client{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
      <H3>1-day workshop</H3>
    </H2Ref>
  ) : null

  return selectCurriculumLayout({ firstHalf, title, secondHalf, layout, type })
}

export default CurriculumGraphQLApollo
