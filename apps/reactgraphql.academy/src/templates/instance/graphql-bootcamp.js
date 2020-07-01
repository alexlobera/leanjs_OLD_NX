import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from './baseTemplate';
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/CurriculumGraphQLBootcamp';
import {
  GRAPHQL_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_BOOTCAMP,
} from 'src/config/data';

export const crossSellTypes = [GRAPHQL_WORKSHOP, GRAPHQL_API];

const Page = (props) => (
  <BaseTemplate
    {...props}
    type={GRAPHQL_BOOTCAMP}
    typeOfTraining="GraphQL Bootcamp"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
);

export const query = graphql`
  query($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`;
export default Page;
