import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const StyledUl = styled(Box)`
  ${({ variant, variants = [] }) =>
    (variant === 'unstyled' || variants.find(v => v === 'unstyled')) &&
    `
    > li {
      list-style-type: none;
    }
  `}
  ${({ variant, variants = [] }) =>
    (variant === 'inline' || variants.find(v => v === 'inline')) &&
    `
    > li {
      padding: 8px;
      margin: 0;
      display: inline-block;
      :first-child {
        padding-left: 0;
      }
      :last-child {
        padding-right: 0;
      }
    }
  `};
`

const Ul = props => (
  <StyledUl
    {...(ulVariantProps[props.variant] || {})}
    {...(props.variants && props.variants.reduce
      ? props.variants.reduce(
          (acc, variant) => ({
            ...acc,
            ...(ulVariantProps[variant] || {}),
          }),
          {}
        )
      : {})}
    {...props}
  />
)
Ul.defaultProps = {
  box: 'ul',
}

const ulVariantProps = {
  inline: {
    m: 0,
    p: 0,
  },
  unstyled: {
    ml: 0,
  },
}

const Li = styled(Box)``
Li.defaultProps = {
  box: 'li',
}

export { Ul, Li }
export default Ul
