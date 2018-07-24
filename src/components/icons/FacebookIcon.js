import React from 'react'

const FacebookIcon = props => {
  const { fill = '#FFF' } = props
  return (
    <svg focusable="false" width={24} height={24} fill={fill} {...props}>
      <path d="M17.3 0H2.7A2.7 2.7 0 0 0 0 2.7v14.6A2.7 2.7 0 0 0 2.7 20h7.2l.01-7.15H8.06a.44.44 0 0 1-.44-.43l-.01-2.3c0-.25.2-.45.44-.45H9.9V7.45c0-2.59 1.58-4 3.88-4h1.9c.24 0 .43.2.43.45v1.94c0 .24-.2.44-.44.44h-1.16c-1.25 0-1.5.6-1.5 1.47v1.92h2.76c.26 0 .47.23.44.5l-.28 2.3a.44.44 0 0 1-.43.38h-2.47L13.02 20h4.28a2.7 2.7 0 0 0 2.7-2.7V2.7A2.7 2.7 0 0 0 17.3 0z" />
    </svg>
  )
}

export default FacebookIcon
