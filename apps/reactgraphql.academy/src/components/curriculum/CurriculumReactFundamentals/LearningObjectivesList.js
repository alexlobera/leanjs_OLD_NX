import React from 'react';
import { Li } from '../../layout/Ul';

const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>
      Understand how the most popular libraries to build React applications work
      under the hood:{' '}
      <code>react, react-dom, react-router, redux, react-redux</code>
    </Li>
    <Li>
      Learn the React principles, such as declarative programming and the React
      composition model, to build React applications the right way.
    </Li>
    <Li>
      Understand the different state management approaches in the React
      ecosystem.
    </Li>
    <Li>
      Create a solid foundation to understand advanced React techniques as you
      progress in your career as React developer.
    </Li>
  </React.Fragment>
);

export default LearningObjectivesList;
