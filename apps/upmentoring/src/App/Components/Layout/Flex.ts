import styled from 'styled-components';
import {
  flexWrap,
  FlexWrapProps,
  flexDirection,
  FlexDirectionProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  flexGrow,
} from 'styled-system';

import Box from '../Layout/Box';
import { themed } from '../../Utils';

interface AriaProps {
  ariaLabel?: string;
}

export type FlexProps = FlexWrapProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps &
  AriaProps;

const Flex = styled(Box)<FlexProps>(
  {
    display: 'flex',
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  flexGrow,
  themed('Flex'),
);

export default Flex;
