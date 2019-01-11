import React from 'react'
import LazyLoad from 'react-lazyload';

const withLazyLoad = ({defaultConfig={}, lazyLoadByDefault=true} = {}) => Component => ({ lazyLoad=lazyLoadByDefault, ...rest }) => {
	const element = <Component {...rest} />
	const lazyLoadConfig = lazyLoad === true ? defaultConfig : {...defaultConfig, ...lazyLoad}
	return lazyLoad ? <LazyLoad {...lazyLoadConfig}>{element}</LazyLoad> : element
}

export default withLazyLoad
