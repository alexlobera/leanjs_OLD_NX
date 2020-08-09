import React from 'react';
import Section from '../CurriculumSection';
import Curriculum from '../Curriculum';
import { TRAINING_TYPE_TRIAL } from '../../../config/data';
import ThinkingInReactSession, {
  LearningObjectives as ThinkingInLearningObjectives,
} from '../sessions/ThinkingInReactSession';
import TargetAudienceList from '../CurriculumReactFundamentals/TargetAudienceList';

const CurriculumReactTrial = ({ showTitle = true, section = {}, ...rest }) => (
  <Curriculum
    title={showTitle ? 'React Trial Outline' : ''}
    trainingType={TRAINING_TYPE_TRIAL}
    defaultLearningObjectivesIsOpen
    {...rest}
    firstHalf={
      <Section trainingType={TRAINING_TYPE_TRIAL} {...section}>
        <ThinkingInReactSession title="" />
      </Section>
    }
  />
);

export { TargetAudienceList };

export const LearningObjectives = () => (
  <ThinkingInLearningObjectives showAll />
);

export default CurriculumReactTrial;
