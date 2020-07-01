import React from 'react';
import Section from '../../CurriculumSection';
import { TRAINING_TYPE_WORKSHOP } from '../../../../config/data';
import TestingIntroSession, {
  titleSession as introTitle,
} from '../../sessions/TestingIntroSession';
import TestingInReactSession2, {
  titleSession as reactTitle,
} from '../../sessions/TestingInReactSession2';

import Curriculum from '../../Curriculum';

const CurriculumTestingInReact = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? 'Real-World Testing in React' : ''}
    trainingType={TRAINING_TYPE_WORKSHOP}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section
          title={introTitle}
          trainingType={TRAINING_TYPE_WORKSHOP}
          {...section}
        >
          <TestingIntroSession title="" />
        </Section>
        <Section
          title={reactTitle}
          trainingType={TRAINING_TYPE_WORKSHOP}
          {...section}
        >
          <TestingInReactSession2 title="" />
        </Section>
      </React.Fragment>
    }
  />
);

export default CurriculumTestingInReact;
