import React from 'react';
import {
  TRAINING_TYPE_FULL_CURRICULUM,
  TECH_REACT,
  REACT_BOOTCAMP_ID,
  PART_TIME,
} from '../../config/data';
import Curriculum from './Curriculum';
import renderPartTimeSection from './renderPartTimeSession';
import {
  defaultSessionsFirstHalf as advDefaultSessionsFirstHalf,
  defaultSessionsSecondHalf as advDefaultSessionsSecondHalf,
} from './CurriculumAdvancedReactPartTime';
import {
  defaultSessionsFirstHalf as fundamentalsDefaultSessionsFirstHalf,
  defaultSessionsSecondHalf as fundamentalsDefaultSessionsSecondHalf,
} from './CurriculumReactFundamentalsPartTime';
export const defaultSessionsFirstHalf = [
  ...fundamentalsDefaultSessionsFirstHalf,
  ...fundamentalsDefaultSessionsSecondHalf,
];

export const defaultSessionsSecondHalf = [
  ...advDefaultSessionsFirstHalf,
  ...advDefaultSessionsSecondHalf,
];

const trainingInstanceTypeName = PART_TIME;
const tech = TECH_REACT;
const trainingType = TRAINING_TYPE_FULL_CURRICULUM;
const trainingId = REACT_BOOTCAMP_ID;

const CurriculumReactCompletePartTime = ({
  toggleNavigateTo = `/react/curriculum?tab=${trainingId}${trainingInstanceTypeName}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  sessionsSecondHalf = defaultSessionsSecondHalf,
  ...rest
}) => {
  const initialIndex = 0;

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
  });

  return (
    <Curriculum
      title="React Part-time Training Bundle Outline"
      trainingId={trainingId}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(initialIndex))}
      secondHalf={sessionsSecondHalf.map(
        renderSectionWithProps(sessionsFirstHalf.length + initialIndex)
      )}
    />
  );
};

export default CurriculumReactCompletePartTime;
