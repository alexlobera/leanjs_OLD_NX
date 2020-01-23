import React from 'react'
import Section from '../CurriculumSection'
import { GRAPHQL_WORKSHOP } from '../../../config/data'

import GraphQLClientFundamentalsSession from '../sessions/graphql/client/GraphQLClientFundamentalsSession'
import IntermediateApolloClientSession from '../sessions/graphql/client/IntermediateApolloClientSession'
import GraphQLClientRecapSession from '../sessions/graphql/client/GraphQLClientRecapSession'
import { Li } from '../../layout/Ul'
import Curriculum from '../Curriculum'

const CurriculumGraphQLApollo = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? 'GraphQL React Apollo Client' : ''}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section type={GRAPHQL_WORKSHOP} {...section}>
          <GraphQLClientFundamentalsSession />
          <IntermediateApolloClientSession />
          <GraphQLClientRecapSession />
        </Section>
      </React.Fragment>
    }
  />
)

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>A developer with some experience developing React applications?</Li>
    <Li>
      Interested in learning how cutting-edge companies build products faster at
      scale
    </Li>
  </React.Fragment>
)

export default CurriculumGraphQLApollo
