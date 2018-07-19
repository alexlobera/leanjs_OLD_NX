import React from 'react'
import { Li } from '../layout/Ul'

const Session = ({ children, title }) =>
  !title ? (
    children
  ) : (
    <Li>
      {title}
      {children}
    </Li>
  )

export default Session
