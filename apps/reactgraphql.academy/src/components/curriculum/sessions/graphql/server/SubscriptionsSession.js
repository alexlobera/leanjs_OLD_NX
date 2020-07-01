import React from 'react';
import Ul, { Li } from '../../../../layout/Ul';
import Session from '../../Session';

const SubscriptionsSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>WebSocket overview</Li>
      <Li>Adding subscription support to Apollo Server</Li>
      <Li>Connecting and disconnecting subscriptions</Li>
      <Li>Publishing subscription data</Li>
      <Li>useSubscription Hook with React & Apollo Client</Li>
      <Li>Working with subscriptions at scale</Li>
    </Ul>
  </Session>
);

export const LearningObjectives = ({ showAll = true }) => (
  <>
    <Li>Learn to set up subscription support with Apollo Server</Li>
    {showAll && (
      <>
        <Li>
          Add real-time features to user interfaces with @apollo/react-hooks
        </Li>
        <Li>
          Gain an understanding of how to incorporate subscriptions in
          real-world applications
        </Li>
      </>
    )}
  </>
);

SubscriptionsSession.defaultProps = {
  title: 'GraphQL Subscriptions',
};
// TODO remove this when training instance unit is fetched from the API
SubscriptionsSession.coachName = 'Eve Porcello';

export default SubscriptionsSession;
