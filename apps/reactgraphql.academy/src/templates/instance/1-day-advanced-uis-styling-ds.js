import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from './baseTemplate';
import Curriculum from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI';
import TargetAudienceList from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI/TargetAudienceList';
import LearningObjectives from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI/LearningObjectivesList';
import {
  REACT_WORKSHOP,
  ADVANCED_REACT,
  REACT_BOOTCAMP,
  TRAINING_TYPE_WORKSHOP,
  REACT_WORKSHOP_DESIGN_SYSTEMS_ID,
} from 'src/config/data';

export const crossSellTypes = [ADVANCED_REACT, REACT_BOOTCAMP, REACT_WORKSHOP];

const Page = (props) => (
  <BaseTemplate
    {...props}
    trainingId={REACT_WORKSHOP_DESIGN_SYSTEMS_ID}
    trainingType={TRAINING_TYPE_WORKSHOP}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    learningObjectives={LearningObjectives}
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
