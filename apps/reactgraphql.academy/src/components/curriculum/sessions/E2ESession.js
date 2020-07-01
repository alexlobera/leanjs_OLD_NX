import React from 'react';
import Ul, { Li } from '../../layout/Ul';
import Session from './Session';

export const titleSession = 'End-to-End Testing';

const E2ESession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>End-to-End (E2E) testing principles</Li>
      <Li>E2E testing with Cypress</Li>
    </Ul>
  </Session>
);

export default E2ESession;
