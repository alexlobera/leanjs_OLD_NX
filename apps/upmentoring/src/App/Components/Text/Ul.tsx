import styled from 'styled-components';
import Box from '../Layout/Box';

const Ul = styled(Box)`
  list-style: none;
`;
Ul.defaultProps = {
  box: 'ul',
};

const Ol = styled(Box)``;
Ol.defaultProps = {
  box: 'ol',
  fontFamily: 'serif',
};

const Li = styled(Box)``;
Li.defaultProps = {
  box: 'li',
  fontFamily: 'serif',
};

export { Ul, Ol, Li };
