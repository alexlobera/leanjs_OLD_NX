import React from 'react';
import { Li } from '../../layout/Ul';
import TestingLearningObjectives from '../workshops/CurriculumTestingInReact/LearningObjectivesList';
import StylingLearningObjectives from '../workshops/CurriculumStylingAndAdvUI/LearningObjectivesList';
import AdvPatternsLearningObjectives from '../workshops/CurriculumAdvReactPatterns/LearningObjectivesList';

const LearningObjectivesList = () => (
  <React.Fragment>
    <AdvPatternsLearningObjectives />
    <StylingLearningObjectives />
    <TestingLearningObjectives />
    <Li>Learn best practices to build real-world React applications.</Li>
  </React.Fragment>
);

export default LearningObjectivesList;
