import React from 'react';
import Ul, { Li } from '../../layout/Ul';
import Session from './Session';

export const titleSession = 'Routing and Data Fetching';

const RoutingAndDataFetchingSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>
        React Router
        <Ul>
          <Li>Declarative routing</Li>
          <Li>Implementing a master-detail page</Li>
        </Ul>
      </Li>
      <Li>Component lifecycle using useEffect</Li>
      <Li>Data fetching</Li>
    </Ul>
  </Session>
);

export default RoutingAndDataFetchingSession;
