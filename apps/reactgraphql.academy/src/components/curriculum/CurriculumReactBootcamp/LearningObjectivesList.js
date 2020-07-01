import React from 'react';
import { Li } from '../../layout/Ul';
import AdvLearningObjectivesList from '../CurriculumAdvancedReact/LearningObjectivesList';

export const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>
      Understand how the most popular libraries to build React applications work
      under the hood:{' '}
      <code>
        react, react-router, storybook, redux, react-redux, styled-components,
        styled-system, jest, react testing library
      </code>
    </Li>
    <Li>
      Master the React principles, such as declarative programming and the React
      composition model, to build React applications the right way.
    </Li>
    <Li>
      Understand the different state management approaches in the React
      ecosystem.
    </Li>
    <AdvLearningObjectivesList />
  </React.Fragment>
);

export default LearningObjectivesList;
