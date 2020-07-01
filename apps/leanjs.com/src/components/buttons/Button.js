import styled from 'styled-components';
import {
  FONT_FAMILY,
  DARKGREY,
  WHITE,
  MUSTARD,
  SPACING_SMALL,
  SPACING_STANDARD,
} from '../../config/styles';

import { SCREEN_SM_MAX } from '../utils';

const getBackgroundColor = (props) => (props.dark ? DARKGREY : MUSTARD);
const getBoxshadowOpacity = (props) => (props.dark ? `0.24` : `0.45`);
export const getForegroundColor = (props) => (props.dark ? WHITE : DARKGREY);

const setColours = (props) => `
  	background-color:${getBackgroundColor(props)};
  	color:${getForegroundColor(props)} !important;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, ${getBoxshadowOpacity(
      props
    )}), 0 0 2px 0 rgba(0, 0, 0, 0.12);
`;
const allowArrows = (props) =>
  props.hasArrows ? `&:after { content: " "}` : ``;
const allowShrinkWrapOnMobile = (props) =>
  `${
    props.shrinkWrapOnMobile
      ? `
  @media (max-width:${SCREEN_SM_MAX}) {
    width:auto;
  }
`
      : null
  }`;

export const DEFAULT_BUTTON_STYLES = (props) => `
	${FONT_FAMILY}
	border-radius: 2px;
	border: solid 1px transparent;
	margin: ${SPACING_STANDARD} 0;
	padding: ${SPACING_SMALL} ${SPACING_STANDARD};
	cursor:pointer;
  width:auto;
  @media (max-width:${SCREEN_SM_MAX}) {
    margin-left: 0;
    margin-right: 0;
    display:block;
  }
  ${allowShrinkWrapOnMobile(props)};
	${setColours(props)};
	${allowArrows(props)};
`;

const Button = styled.button`
  ${DEFAULT_BUTTON_STYLES};
  &:active {
    transform: translate(1px, 1px);
  }
`;

export default Button;
