import React from 'react';
import Ul, { Li } from '../../layout/Ul';
import Session from './Session';

const HooksSession = ({ title = 'Hooks beyond the basics' }) => (
  <Session title={title}>
    <Ul>
      <Li>useRef</Li>
      <Li>useImperativeHandle</Li>
      <Li>useContext</Li>
      <Li>You'll build a Modal and VideoPlayer components</Li>
    </Ul>
  </Session>
);

export default HooksSession;
