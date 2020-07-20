import styled from 'styled-components';

const Z_INDEX_BG = -2;
export const TECH_REACT = 'react';
export const TECH_GRAPHQL = 'graphql';

export interface BackgroundImageProps {
  src?: string;
  top?: string;
  bottom?: string;
  left?: string;
  // right?: string; TODO use viewBox of the SVG for this
  opacity?: number;
  children?: JSX.Element;
}

export const HeaderBgImage = styled('div')<BackgroundImageProps>`
  ${({ src, top, bottom, left = null, opacity = 0.6 }: any) =>
    src &&
    `
  &:after {
    content: '';
    position: absolute;
    ${top ? `top:${top};` : ''}
    ${bottom ? `bottom:${bottom};` : ''}
    ${left ? `left:${left};` : ''}
    z-index: ${Z_INDEX_BG};
    background-image: ${src};
    opacity:${opacity};
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    width: 100%;
    height: 130%;
  }
`};
`;

export default HeaderBgImage;
