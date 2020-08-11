import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from './baseTemplate';
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/CurriculumGraphQLAPI';
import {
  GRAPHQL_API_ID,
  TECH_GRAPHQL,
  GRAPHQL_TRIAL_ID,
} from 'src/config/data';

const Page = (props) => (
  <BaseTemplate
    {...props}
    tech={TECH_GRAPHQL}
    trainingId={GRAPHQL_API_ID}
    typeOfTraining="GraphQL API training"
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
    trialTrainingId={GRAPHQL_TRIAL_ID}
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
