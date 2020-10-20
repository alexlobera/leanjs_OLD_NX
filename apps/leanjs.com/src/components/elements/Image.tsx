import React from 'react';
import GatsbyImage from 'gatsby-image';
import { Image as LeanImage, BoxProps, As } from '@leanjs/ui-core';

interface Image {
  fluid?: any;
  fixed?: any;
}
export default function Image<T extends As>(props: BoxProps<T>) {
  return (
    <LeanImage
      {...props}
      as={props.fluid || props.fixed ? GatsbyImage : props.as || 'img'}
    />
  );
}
