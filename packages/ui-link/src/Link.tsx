import React from 'react';
import { Link as LinkScroll, scroller } from 'react-scroll';
import { Link as LeanLink } from '@leanjs/ui-core';
import { Link as GatsbyLink } from 'gatsby';

export function Link(props) {
  const { duration = 500, offset = -125 } = props;

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash.substr(1);
    const key = props.name || props.id;

    if (hash && hash === key) {
      setTimeout(() => {
        scroller.scrollTo(hash, {
          smooth: true,
          duration,
          offset,
        });
      }, 100);
    }
  }, []);

  const { to = '', ...rest } = props;
  const toHref = to || rest.href || '';

  if (toHref && toHref.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
    const { target = '_blank' } = rest;
    rest.rel = target === '_blank' ? 'noopener' : undefined;
    return <LeanLink target={target} href={toHref} {...rest} />;
  } else if (toHref && toHref[0] === '#') {
    const { onClick, ...restLinkScrollProps } = rest;
    return (
      <LeanLink
        onClick={(e) => {
          onClick && onClick(e);
        }}
        to={toHref.substr(1)}
        href={toHref}
        as={LinkScroll}
        duration={duration}
        offset={offset}
        smooth
        {...restLinkScrollProps}
      />
    );
  } else if (!toHref) {
    return <LeanLink {...rest} />;
  } else {
    // The destination URLs need to have trailing slashes for Gatsby prefetching to happen
    const dest =
      toHref.slice(-1) === '/' ||
      toHref.indexOf('?') > -1 ||
      toHref.indexOf('#') > -1
        ? toHref
        : toHref + '/';

    return <LeanLink to={dest} as={GatsbyLink} {...rest} />;
  }
}
