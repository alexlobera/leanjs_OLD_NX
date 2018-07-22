import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.img`
  margin: 0;
`

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image
