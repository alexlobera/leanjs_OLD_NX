import React from 'react'
import LazyLoad from 'react-lazyload';

const withLazyLoad = (defaultConfig={}) => Component => ({ lazyLoad=true, ...rest }) => {
	const element = <Component {...rest} />
	const lazyLoadConfig = lazyLoad === true ? {} : {...defaultConfig, ...lazyLoad}
	return lazyLoad ? <LazyLoad {...lazyLoadConfig}>{element}</LazyLoad> : element
}

export default withLazyLoad
