import React from 'react'
import Section from '../CurriculumSection'
import { GRAPHQL_WORKSHOP } from '../../../config/data'
import GraphQLApolloClientDaySessions from '../sessions/GraphQLApolloClientDaySessions'
import { Li } from '../../layout/Ul'
import Curriculum from '../Curriculum'

const CurriculumGraphQLApollo = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? 'GraphQL React Apollo Client' : ''}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section type={GRAPHQL_WORKSHOP} {...section}>
          <GraphQLApolloClientDaySessions title="" />
        </Section>
      </React.Fragment>
    }
  />
)

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li></Li>
  </React.Fragment>
)

export default CurriculumGraphQLApollo
