import React from 'react';
import Ul, { Li } from '../../../layout/Ul';
import Session from '../Session';

const ReactNativeProductionSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>iOS and Android Developer Account setup</Li>
      <Li>Build the app for production to iOS and submit to App Store</Li>
      <Li>Build Android app to production and Upload app</Li>
      <Li>Over the Air Updates</Li>
      <Li>Introducing fastlane & Using CI to build your apps</Li>
    </Ul>
  </Session>
);

export default ReactNativeProductionSession;
