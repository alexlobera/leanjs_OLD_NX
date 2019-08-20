import React from 'react'
import Link from '../navigation/Link'
import './Jooble.css'

const JoobleLogo = ({ className, ...rest }) => (
  <Link
    {...rest}
    className={`${className}`}
    to="https://uk.jooble.org/jobs-developer"
    title="Jooble Developer Jobs"
  >
    <div className="jooble-logo" />
  </Link>
)

export default JoobleLogo
