import React from 'react';
import Section from '../CurriculumSection';
import { TRAINING_TYPE_WORKSHOP, TECH_GRAPHQL } from '../../../config/data';

import GraphQLClientFundamentalsSession from '../sessions/graphql/client/GraphQLClientFundamentalsSession';
import AdvancedApolloClientSession from '../sessions/graphql/client/AdvancedApolloClientSession';
import GraphQLClientRecapSession from '../sessions/graphql/client/GraphQLClientRecapSession';
import { Li } from '../../layout/Ul';
import Curriculum from '../Curriculum';

const CurriculumGraphQLApollo = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? 'GraphQL React Apollo Client' : ''}
    trainingType={TRAINING_TYPE_WORKSHOP}
    tech={TECH_GRAPHQL}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section
          tech={TECH_GRAPHQL}
          trainingType={TRAINING_TYPE_WORKSHOP}
          {...section}
        >
          <GraphQLClientFundamentalsSession />
          <AdvancedApolloClientSession />
          <GraphQLClientRecapSession />
        </Section>
      </React.Fragment>
    }
  />
);

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>A developer with some experience developing React applications?</Li>
    <Li>
      Interested in learning how cutting-edge companies build products faster at
      scale
    </Li>
  </React.Fragment>
);

export default CurriculumGraphQLApollo;
