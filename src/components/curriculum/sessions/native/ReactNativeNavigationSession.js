import React from 'react'
import Ul, { Li } from '../../../layout/Ul'
import Session from '../Session'

export const titleSession = 'React Native Navigation'

const ReactNativeNavigationSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>Types of navigations</Li>
      <Li>react-navigation</Li>
    </Ul>
  </Session>
)

export default ReactNativeNavigationSession
