import React from 'react'

const InstagramIcon = props => {
  const { fill = '#FFF' } = props
  return (
    <svg focusable="false" width={24} height={24} fill={fill} {...props}>
      <path d="M20 5.96v8.08A5.96 5.96 0 0 1 14.04 20H5.96A5.96 5.96 0 0 1 0 14.04V5.96A5.96 5.96 0 0 1 5.96 0h8.08A5.96 5.96 0 0 1 20 5.96zm-2.01 8.08V5.96A3.95 3.95 0 0 0 14.04 2H5.96A3.95 3.95 0 0 0 2 5.96v8.08A3.95 3.95 0 0 0 5.96 18h8.08A3.95 3.95 0 0 0 18 14.04zm-4.05-9.17a1.24 1.24 0 1 1 2.48 0 1.24 1.24 0 0 1-2.48 0zm-.6 5.31a3.16 3.16 0 1 0-6.32 0 3.16 3.16 0 0 0 6.32 0zm2.01 0A5.18 5.18 0 1 1 5 10.17a5.18 5.18 0 0 1 10.35.01z" />
    </svg>
  )
}
InstagramIcon.title = 'Instagram'

export default InstagramIcon
