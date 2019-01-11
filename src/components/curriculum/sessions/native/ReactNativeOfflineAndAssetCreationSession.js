import React from 'react'
import Ul, { Li } from '../../../layout/Ul'
import Session from '../Session'

const ReactNativeOfflineAndAssetCreationSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Assets Tool recommendations</Li>
      <Li>App icons</Li>
      <Li>Splash screen for iOS and Android</Li>
      <Li>Other assets per platform</Li>
      <Li>Using Netinfo</Li>
      <Li>Handling offline requests</Li>
      <Li>Notifying the user of their connection status</Li>
    </Ul>
  </Session>
)

export default ReactNativeOfflineAndAssetCreationSession
