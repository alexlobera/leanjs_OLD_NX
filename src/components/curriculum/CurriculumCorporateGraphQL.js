import React from 'react'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import { LinkButton } from '../buttons'
import { GRAPHQL_BOOTCAMP } from '../../config/data'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'
import { curriculumCommonPropTypes } from './'

const CurriculumCorporateGraphQL = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/graphql/curriculum?tab=${GRAPHQL_BOOTCAMP}`,
  marketingCard = null,
  showLinkToCurriculum = false,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = GRAPHQL_BOOTCAMP
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
        title="Day 1 - GraphQL API Fundamentals"
        name="day1"
        subTitle="Nodejs and GraphQL fundamentals"
      />
      <Section
        {...commonProps}
        title="Day 2 - Advanced GraphQL API"
        name="day2"
        subTitle="Implement a GraphQL API, Advanced Schema, Performance"
      />
      <Section
        {...commonProps}
        title="Day 3 - Real-world GraphQL API"
        name="day3"
        subTitle="Data sources and GraphQL in production considerations"
      />
      <Section
        {...commonProps}
        title="Day 4 - Production-ready GraphQL & React"
        name="day4"
        subTitle="Testing GraphQL, replacing redux with GraphQL and production tooling"
      />
      {marketingCard}
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="GraphQL & React"
        name="day5"
        subTitle="Apollo Client, Advanced Queries and mutations"
      />
      <LinkButton mt={2} to="#contact-us" children="Contact Us" />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0} />
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumLayout({
        firstHalf,
        secondHalf,
        layout,
        type,
        corpTrainingFacts: true,
      })}
    </React.Fragment>
  )
}

CurriculumCorporateGraphQL.propTypes = curriculumCommonPropTypes

export default CurriculumCorporateGraphQL
