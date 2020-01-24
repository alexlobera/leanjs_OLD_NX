import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const HasuraSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>TBD</Li>
    </Ul>
  </Session>
)

HasuraSession.defaultProps = {
  title: 'Hasura',
}
// TODO remove this when training instance unit is fetched from the API
HasuraSession.coachName = 'Vladimir Novick'

export default HasuraSession
