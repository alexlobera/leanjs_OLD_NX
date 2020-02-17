import React from 'react'

const LinkedinIcon = props => {
  const { fill = '#FFF' } = props
  return (
    <svg focusable="false" width={20} height={20} fill={fill} {...props}>
      <path d="M20 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2zM6 8H3v9h3zm.3-3.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8.8 1.8 1.8 1.8 1.8-.8 1.8-1.8zM17 11.3c0-1.9-1.6-3.5-3.5-3.5-.9 0-2 .6-2.5 1.4V8H8v9h3v-5.3c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V17h3z" />
    </svg>
  )
}
LinkedinIcon.title = 'LinkedIn'

export default LinkedinIcon
