import React from 'react';
import styled from 'styled-components';

const defaultSize = 2;
const defaultBorderWidth = 2 / 9;

const CircleOuter = styled.div`
  border-radius: 100%;
  height: ${(props) => (props.size ? props.size : defaultSize)}rem;
  width: ${(props) => (props.size ? props.size : defaultSize)}rem;
  padding: ${(props) => (props.hasPadding ? `0.5rem` : `0`)};
  ${(props) => (props.bg ? `background: ${props.bg}` : null)};
  border: ${(props) =>
    props.hasBorder
      ? `${
          props.borderWidth ? props.borderWidth : defaultBorderWidth
        }rem solid ${props.color}`
      : `none`};
  box-sizing: border-box;
`;

const CircleInner = styled.div`
  ${(props) =>
    props.backgroundImage
      ? `background: transparent url(${props.backgroundImage}) center/contain no-repeat scroll;`
      : null};
  ${(props) =>
    props.backgroundSize ? `background-size:${props.backgroundSize}` : null};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const Circle = (props) => (
  <CircleOuter {...props}>
    <CircleInner {...props}>{props.children}</CircleInner>
  </CircleOuter>
);

export default Circle;
