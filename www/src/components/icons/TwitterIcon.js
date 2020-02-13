import React from 'react'

const TwitterIcon = ({ fill = '#FFF', width = 24, height = 24, ...rest }) => (
  <svg focusable="false" width={width} height={height} fill={fill} {...rest}>
    <path d="M22.46 5.63c0-.21 0-.43-.02-.65 1-.71 1.87-1.6 2.56-2.61-.92.4-1.9.67-2.95.8a5.08 5.08 0 0 0 2.26-2.8c-1 .58-2.09 1-3.26 1.23a5.16 5.16 0 0 0-8.87 3.45c0 .4.04.78.13 1.15A14.64 14.64 0 0 1 1.74.92a4.98 4.98 0 0 0 1.59 6.74A5.15 5.15 0 0 1 1 7.03v.07a5.07 5.07 0 0 0 4.12 4.95 5.21 5.21 0 0 1-2.32.08 5.134 5.134 0 0 0 4.8 3.51 10.4 10.4 0 0 1-7.6 2.1A14.69 14.69 0 0 0 7.86 20c9.44 0 14.6-7.7 14.6-14.37z" />
  </svg>
)

TwitterIcon.title = 'Twitter'

export default TwitterIcon
