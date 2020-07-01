import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from './baseTemplate';
import Curriculum from 'src/components/curriculum/workshops/CurriculumAdvReactPatterns';
import TargetAudienceList from 'src/components/curriculum/workshops/CurriculumAdvReactPatterns/TargetAudienceList';
import LearningObjectives from 'src/components/curriculum/workshops/CurriculumAdvReactPatterns/LearningObjectivesList';
import {
  REACT_WORKSHOP,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  TRAINING_TYPE_WORKSHOP,
  REACT_WORKSHOP_ADVANCED_PATTERNS_ID,
} from 'src/config/data';

export const crossSellTypes = [
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  REACT_WORKSHOP,
];

const Page = (props) => (
  <BaseTemplate
    {...props}
    trainingId={REACT_WORKSHOP_ADVANCED_PATTERNS_ID}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    learningObjectives={LearningObjectives}
    curriculum={Curriculum}
    trainingType={TRAINING_TYPE_WORKSHOP}
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
