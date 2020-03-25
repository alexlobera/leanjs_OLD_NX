import React from 'react'

function Icon({ width = 24, color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 24 24">
      <path fill={color} d="M5 3l3.057-3L20 12 8.057 24 5 21l9-9z"></path>
    </svg>
  )
}

export default Icon
