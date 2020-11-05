import React from 'react';
import LazyLoad from 'react-lazyload';

const withLazyLoad = ({
  defaultConfig = {},
  lazyLoadByDefault = true,
} = {}) => (Component) => ({
  lazyLoad = lazyLoadByDefault,
  placeholderHeight = '390px',
  ...rest
}) => {
  const element = <Component {...rest} />;
  const lazyLoadConfig =
    lazyLoad === true ? defaultConfig : { ...defaultConfig };
  return lazyLoad ? (
    <LazyLoad height={placeholderHeight} {...lazyLoadConfig}>
      {element}
    </LazyLoad>
  ) : (
    element
  );
};

export default withLazyLoad;
