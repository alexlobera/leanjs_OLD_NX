import React from 'react';
import { Link as LinkScroll, scroller } from 'react-scroll';
import { Link as LeanLink } from '@leanjs/ui-core';
import { Link as RRLink } from 'react-router-dom';

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
    return <LeanLink to={toHref} as={RRLink} {...rest} />;
  }
}

export default Link;

// import React from 'react';
// import styled from 'styled-components';
// import { Link as RouterLink, Route } from 'react-router-dom';
// import { Link as DefaultLinkScroll } from 'react-scroll';

// import Box, { BoxProps } from '../Layout/Box';
// import { StyledButton, buttonDefaultProps } from '../Buttons/Button';
// import colors from '../../Config/colors';

// export const DEFAULT_SCROLL_OFFSET = 0;

// interface LinkScrollProps {
//   to: string;
// }

// export interface LinkProps extends BoxProps {
//   onClick?: any;
//   target?: any;
//   button?: any;
//   disabled?: boolean;
//   to?: any;
//   href?: any;
//   variant?: any;
//   className?: string;
// }

// export const StyledLink = styled(Box)`
//   color: ${(props) => (props.white ? `white` : `${colors.GREY_DARK};`)};
//   ${({ onClick }) => onClick && `cursor: pointer;`}
// `;

// const LinkScroll: React.FunctionComponent<LinkScrollProps> = ({
//   to,
//   ...rest
// }) => (
//   <DefaultLinkScroll
//     smooth={true}
//     duration={500}
//     offset={DEFAULT_SCROLL_OFFSET}
//     to={to && to.slice(1, to.length)}
//     {...rest}
//   />
// );

// function removeTrailingSlash(url: string) {
//   return url ? url.replace(/\/$/, '') : '';
// }

// const Link: React.FunctionComponent<LinkProps> = ({
//   button = false,
//   disabled,
//   to: rawTo = '',
//   children = '',
//   ...rest
// }) => {
//   const to = disabled ? undefined : rawTo;
//   const toHref = disabled ? undefined : to || rest.href;
//   const GenericLink = button ? StyledButton : StyledLink;
//   const buttonProps = button ? buttonDefaultProps : {};
//   const extendedProps = {
//     ...rest,
//     ...buttonProps,
//     disabled,
//     role: button ? 'button' : undefined,
//   };

//   if (toHref && toHref.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
//     const { target = '_blank' } = rest;

//     return (
//       <GenericLink {...extendedProps} box="a" target={target} href={toHref}>
//         {children}
//       </GenericLink>
//     );
//   } else if (to && to[0] === '#') {
//     const { onClick, ...restLinkScrollProps } = extendedProps;

//     return (
//       <Route
//         render={({ history }) => (
//           <GenericLink
//             {...restLinkScrollProps}
//             box={LinkScroll}
//             onClick={() => {
//               history.push(to);
//               onClick && onClick();
//             }}
//             to={to}
//           >
//             {children}
//           </GenericLink>
//         )}
//       />
//     );
//   } else if (!to) {
//     return (
//       <GenericLink {...extendedProps} box="a">
//         {children}
//       </GenericLink>
//     );
//   } else {
//     const dest = removeTrailingSlash(to);

//     return (
//       <GenericLink {...extendedProps} box={RouterLink} to={dest}>
//         {children}
//       </GenericLink>
//     );
//   }
// };

// export default Link;
