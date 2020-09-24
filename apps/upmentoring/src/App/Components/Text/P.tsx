import styled from 'styled-components';
import { textDefaultProps, StyledText } from './Text';

const P = styled(StyledText)``;
P.defaultProps = {
  ...textDefaultProps,
  box: 'p',
  fontSize: 2,
};

const Em = styled(StyledText)``;
Em.defaultProps = {
  ...textDefaultProps,
  box: 'em',
  fontSize: 2,
  fontWeight: 'bold',
};

const Small = styled(StyledText)``;
Small.defaultProps = {
  ...textDefaultProps,
  box: 'small',
  fontSize: 0,
};

export { P, Em, Small };
