import styled from 'styled-components';
import { Box } from '@leanjs/ui-core';

const Ribbon = styled(Box)`
  font-size: 1rem;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
  border: solid 3px ${({ theme }) => theme.colors.primary};
  padding: 2px 15px;
  display: inline-block;
  position: absolute;
  top: 30px;
  right: -6px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default Ribbon;
