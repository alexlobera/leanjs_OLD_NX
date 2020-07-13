import React from 'react';
// import { Box, Flex } from '@leanjs/ui-core';
import { Box } from './Box';
import { Flex } from './Flex';

export const Label = (props: any) => <Box box="label" {...props} />;

export const FlexLabel = (props: any) => <Flex box="label" {...props} />;

export default Label;
