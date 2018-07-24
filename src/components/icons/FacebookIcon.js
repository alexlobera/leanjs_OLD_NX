import React from 'react'

const FacebookIcon = props => {
  const { colour = '#FFF' } = props
  return (
    <svg width={34} height={34} {...props}>
      <g fillRule="nonzero" fill="none">
        <path
          d="M31.234 33c.975 0 1.766-.79 1.766-1.766V2.766C33 1.791 32.21 1 31.234 1H2.766C1.791 1 1 1.79 1 2.766v28.468C1 32.209 1.79 33 2.766 33h28.468z"
          stroke={colour}
        />
        <path
          d="M23.087 33V20.684h4.128l.618-4.8h-4.746V12.82c0-1.39.386-2.337 2.375-2.337H28V6.188C27.561 6.131 26.055 6 24.302 6c-3.659 0-6.164 2.237-6.164 6.345v3.54H14v4.799h4.138V33h4.95z"
          fill={colour}
        />
      </g>
    </svg>
  )
}

export default FacebookIcon
