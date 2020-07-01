import React from 'react';
import Ul, { Li } from '../../../layout/Ul';
import Session from '../Session';

const ReactNativePushNotificationSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Basic Setup using Expo</Li>
      <Li>Sending Notifications to iOS</Li>
      <Li>Sending Notifications to Android using FCM</Li>
      <Li>Third Party Services</Li>
    </Ul>
  </Session>
);

export default ReactNativePushNotificationSession;
