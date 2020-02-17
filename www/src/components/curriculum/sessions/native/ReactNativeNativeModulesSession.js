import React from 'react'
import Ul, { Li } from '../../../layout/Ul'
import Session from '../Session'

const ReactNativeNativeModulesSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Detach from expo</Li>
      <Li>Setup</Li>
      <Li>iOS calendar module example</Li>
      <Li>Sending events from iOS to JavaScript</Li>
      <Li>Android Toast module example</Li>
      <Li>Sending events from Android to JavaScript</Li>
    </Ul>
  </Session>
)

export default ReactNativeNativeModulesSession
