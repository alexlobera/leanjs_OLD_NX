import React from 'react';
import {
  ADVANCED_REACT_ID,
  PART_TIME,
  TECH_REACT,
  TRAINING_TYPE_HALF_CURRICULUM,
} from '../../config/data';
import Curriculum from './Curriculum';
import renderPartTimeSection from './renderPartTimeSession';

import StylingInReactSession from './sessions/StylingInReactSession';
import TestingIntroSession from './sessions/TestingIntroSession';
import TestingInReactSession2 from './sessions/TestingInReactSession2';
import AdvancedReactPatternsSession from './sessions/AdvancedReactPatternsSession';
import AdvancedHooksAndPerfSession from './sessions/AdvancedHooksAndPerfSession';
import DesignSystemSession from './sessions/DesignSystemSession';

export const defaultSessionsFirstHalf = [
  {
    title: 'Functional Programming and advanced patterns',
    Comp: AdvancedReactPatternsSession,
  },
  {
    title: 'Advanced Hooks and peformance',
    Comp: AdvancedHooksAndPerfSession,
  },
  {
    title: 'Testing in JavaScript',
    Comp: TestingIntroSession,
  },
  {
    title: 'Real-World Testing in React',
    Comp: TestingInReactSession2,
  },
  {
    title: 'CSS-in-JS and theming',
    Comp: StylingInReactSession,
  },
  {
    title: 'Design Systems in React',
    Comp: DesignSystemSession,
  },
];

const trainingInstanceTypeName = PART_TIME;
const tech = TECH_REACT;
const trainingType = TRAINING_TYPE_HALF_CURRICULUM;
const trainingId = ADVANCED_REACT_ID;

const CurriculumAdvancedReactPartTime = ({
  toggleNavigateTo = `/react/curriculum?tab=${trainingId}${trainingInstanceTypeName}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  ...rest
}) => {
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    trainingInstanceTypeName,
    tech,
    trainingType,
    trainingId,
  };

  const renderSectionWithProps = renderPartTimeSection({
    sectionProps,
    training,
    hours: 4,
  });

  return (
    <Curriculum
      title="Advanced React Part-time Training Outline"
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      trainingId={trainingId}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(0))}
    />
  );
};

export default CurriculumAdvancedReactPartTime;
