import React from 'react'
import { selectTypeColor } from '../utils'

const Tick = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="27"
    viewBox="0 0 35 27"
  >
    <polygon
      fill={`${selectTypeColor(props.type)}`}
      fill-rule="evenodd"
      points="0 14.825 3.773 9.937 13.851 18.323 30.413 0 35 4.148 14.494 27"
    />
  </svg>
)

export default Tick
