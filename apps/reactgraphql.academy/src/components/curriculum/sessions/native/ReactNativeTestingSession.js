import React from 'react';
import Ul, { Li } from '../../../layout/Ul';
import Session from '../Session';

const ReactNativeTestingSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>What to test</Li>
      <Li>Organizing tests</Li>
      <Li>Types of tests in RN</Li>
      <Li>End to End testing with Detox</Li>
    </Ul>
  </Session>
);

export default ReactNativeTestingSession;
