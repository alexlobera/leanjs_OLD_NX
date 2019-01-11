import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload';

const Image = styled.img`
  margin: 0;
  ${({ circle }) => (circle ? `border-radius: 50%;` : null)};
`

Image.propTypes = {
  src: PropTypes.string.isRequired,
  circle: PropTypes.bool,
}

const withLazyLoad = Component => ({ lazyLoad=true, ...rest }) => {
	const element = <Component {...rest} />
	const lazyLoadConfig = lazyLoad === true ? {} : lazyLoad
	return lazyLoad ? <LazyLoad {...lazyLoadConfig}>{element}</LazyLoad> : element
}

export default withLazyLoad(Image)
