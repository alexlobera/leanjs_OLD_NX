import React from 'react';
import Ul, { Li } from '../../layout/Ul';
import Session from './Session';

export const titleSession = 'Modern JavaScript';

const ES6Session = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>Destructuring, rest, and spread operator</Li>
      <Li>Modules, let, const, and var</Li>
      <Li>Iterators and intro to functional programming in JS</Li>
      <Li>Arrow functions, template literals</Li>
      <Li>Promises and async code</Li>
      <Li>Modern JavaScript for React - Babel, ES6 and beyond</Li>
    </Ul>
  </Session>
);

export default ES6Session;
