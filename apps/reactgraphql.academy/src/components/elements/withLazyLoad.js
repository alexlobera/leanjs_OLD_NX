import React from 'react';
import LazyLoad from 'react-lazyload';

const withLazyLoad = ({
  defaultConfig = {},
  lazyLoadByDefault = true,
} = {}) => (Component) => ({
  lazyLoad = lazyLoadByDefault,
  placeholderHeight,
  ...rest
}) => {
  const element = <Component {...rest} />;
  const lazyLoadConfig =
    lazyLoad === true ? defaultConfig : { ...defaultConfig, ...lazyLoad };
  return lazyLoad ? (
    <LazyLoad height={placeholderHeight} {...lazyLoadConfig}>
      {element}
    </LazyLoad>
  ) : (
    element
  );
};

export default withLazyLoad;
