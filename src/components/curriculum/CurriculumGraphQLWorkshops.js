import React from 'react'
import Section from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import Link from '../navigation/Link'
import { GRAPHQL_WORKSHOP, GRAPHQL_CLIENT } from '../../config/data'
import { H2Ref, H4 } from '../text'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'

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
      <H4>Workshops currently available:</H4>
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

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              Design Systems & styling in React{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumLayout({
        firstHalf,
        layout,
        type,
        trainings,
      })}
    </React.Fragment>
  )
}

export default CurriculumGraphQLWorkshops
