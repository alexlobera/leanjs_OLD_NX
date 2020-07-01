import React from 'react';
import styled from 'styled-components';
import Link, { ScrollingLink } from '../navigation/Link';

import {
  WHITE,
  SPACING_EXTRALARGE,
  DARKGREY,
  FONT_SIZE_STANDARD,
  FONT_WEIGHT_STANDARD,
  FONT_FAMILY,
  LINE_HEIGHT_STANDARD,
} from '../../config/styles';

const addIconButtonStyles = (props) => `
	border:none;
	background:${WHITE};
  box-shadow: 0 19px 38px rgba(0,0,0,0.5), 0 15px 12px rgba(0,0,0,0.3);
	.contents {
		height:100%;
		width:100%;
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content:center;
	}

	.icon {
		background: transparent url(${props.image}) center/contain no-repeat scroll;
		height:50%;
		width:50%;
		margin:0 auto;
	}

  .text {
    color: ${DARKGREY};
  }

	width:${SPACING_EXTRALARGE};
	height:${SPACING_EXTRALARGE};

	line-height: ${LINE_HEIGHT_STANDARD};

	font-size:${FONT_SIZE_STANDARD};
	font-weight:${FONT_WEIGHT_STANDARD};
	${FONT_FAMILY};
`;

const IconButtonInner = styled.button`
  ${addIconButtonStyles};
  padding: 0;
  &:active {
    transform: translate(1px, 1px);
  }
`;

const LinkIconButtonInner = styled(({ image, isLink, scroll, ...rest }) => {
  const LinkType = scroll ? ScrollingLink : Link;
  const props = scroll ? { smooth: true, duration: 500, ...rest } : rest;
  return <LinkType {...props} />;
})`
  ${addIconButtonStyles};
  text-decoration: none;
  display: inline-block;
`;
LinkIconButtonInner.displayName = 'LinkIconButtonInner';

const Contents = (props) => (
  <div className="contents">
    <div className="icon" />
    <div className="text">{props.text}</div>
  </div>
);

const ComponentTemplate = (props) => {
  const Component = props.isLink ? LinkIconButtonInner : IconButtonInner;

  return (
    <Component {...props}>
      <Contents {...props} />
    </Component>
  );
};

export const IconButton = (props) => <ComponentTemplate {...props} />;

export const LinkIconButton = (props) => (
  <ComponentTemplate isLink={true} {...props} />
);

export default IconButton;
