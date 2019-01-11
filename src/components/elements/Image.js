import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withLazyLoad from './withLazyLoad';

const Image = styled.img`
  margin: 0;
  ${({ circle }) => (circle ? `border-radius: 50%;` : null)};
`

Image.propTypes = {
  src: PropTypes.string.isRequired,
  circle: PropTypes.bool,
}

export default withLazyLoad()(Image)
