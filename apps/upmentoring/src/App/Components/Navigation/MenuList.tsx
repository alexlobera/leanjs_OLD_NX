import React from 'react';
import styled from 'styled-components';
import { Props } from '../../Types/React';

import { Ul } from '../Text/Ul';

const StyledMenuList = styled(Ul)`
  margin-left: 0.8rem;
  margin-bottom: 0rem;
`;

const MenuList: React.FunctionComponent<Props> = (props) => {
  return <StyledMenuList>{props.children}</StyledMenuList>;
};

export default MenuList;
