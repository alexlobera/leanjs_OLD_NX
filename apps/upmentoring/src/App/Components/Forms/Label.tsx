import styled from 'styled-components';
import Box from '../Layout/Box';
import Flex from '../Layout/Flex';

const defaultProps = {
  box: 'label',
  mt: 3,
  mb: 1,
};

const Label = styled(Box)``;
Label.defaultProps = defaultProps;
Label.displayName = 'Label';

export const FlexLabel = styled(Flex)``;
FlexLabel.defaultProps = defaultProps;
FlexLabel.displayName = 'FlexLabel';

export default Label;
