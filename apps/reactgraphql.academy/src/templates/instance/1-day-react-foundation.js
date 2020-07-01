import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from './baseTemplate';
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactFoundation';
import {
  REACT_FUNDAMENTALS,
  REACT_BOOTCAMP,
  TRAINING_TYPE_WORKSHOP,
  REACT_WORKSHOP_FOUNDATION_ID,
} from 'src/config/data';

export const crossSellTypes = [REACT_FUNDAMENTALS, REACT_BOOTCAMP];

const Page = (props) => (
  <BaseTemplate
    {...props}
    trainingId={REACT_WORKSHOP_FOUNDATION_ID}
    crossSellTypes={crossSellTypes}
    trainingType={TRAINING_TYPE_WORKSHOP}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
    curriculumProps={{
      section: { isOpen: true },
    }}
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
