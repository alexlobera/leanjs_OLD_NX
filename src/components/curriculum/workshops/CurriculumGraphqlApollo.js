import React from 'react'
import Section, { curriedToggleNavigateTo } from '../CurriculumSection'
import { Col, Row } from '../../layout/Grid'
import Link from '../../navigation/Link'
import { ONE_DAY_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
import selectCurriculumCorpLayout, {
  LIST_TWO_COL,
} from '../selectCurriculumCorpLayout'

const CurriculumGraphqlApollo = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/curriculum?tab=${ONE_DAY_WORKSHOP}`,
  marketingCard = null,
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
    <React.Fragment>
      <Section
        {...commonProps}
        title="Apollo Client fundamentals"
        subTitle="Apollo Client, Query and Mutation principles"
      />
      <Section
        {...commonProps}
        title="Advanced GraphQL Queries"
        subTitle="Query co-location, Fragment composition"
      />
      <Section
        {...commonProps}
        title="Advanced Mutations"
        subTitle="Error handling, 
        Optimistic UI, 
        Updating cached queries"
      />
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Performance"
        subTitle="Prefetching data,
        Query batching"
      />
      <Section
        {...commonProps}
        title="Testing queries and mutations"
        subTitle="Integration tests,
        Mocking"
      />
      <Section
        {...commonProps}
        title="GraphQL Tooling to speed up front-end development"
      />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              GraphQL Apollo Client{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
              <H3>1 day workshop</H3>
            </H2Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumCorpLayout({ firstHalf, secondHalf, layout, type })}
    </React.Fragment>
  )
}

export default CurriculumGraphqlApollo
