import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const ReactNativeGesturesSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>JSResponder</Li>
      <Li>PanGestureHandler</Li>
      <Li>RotationGestureHandler</Li>
      <Li>PinchGestureHandler</Li>
      <Li>Gestures Lifecycle</Li>
      <Li>Composing Handlers</Li>
      <Li>react-native-gesture-handler limitations</Li>
    </Ul>
  </Session>
)

export default ReactNativeGesturesSession
