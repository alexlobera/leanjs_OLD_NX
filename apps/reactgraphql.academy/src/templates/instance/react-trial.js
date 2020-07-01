import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from './baseTemplate';
import Curriculum, {
  TargetAudienceList,
  LearningObjectives,
} from 'src/components/curriculum/workshops/CurriculumReactTrial';

import { TRAINING_TYPE_TRIAL, REACT_TRIAL_ID } from 'src/config/data';

const Page = (props) => (
  <BaseTemplate
    {...props}
    trainingType={TRAINING_TYPE_TRIAL}
    trainingId={REACT_TRIAL_ID}
    typeOfTraining="React trial"
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
