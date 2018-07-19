import React from 'react'
import { Li } from '../layout/Ul'

const Session = ({ hideTitle, children, title }) =>
  hideTitle ? (
    children
  ) : (
    <Li>
      {title}
      {children}
    </Li>
  )

export default Session
