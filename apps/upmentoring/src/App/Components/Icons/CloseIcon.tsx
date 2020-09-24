import React from 'react';
import SvgIcon from './SvgIcon';
import { Props } from '../../Types/React';

const CloseIcon: React.FunctionComponent<Props> = props => (
  <SvgIcon viewBox="0 0 18 18" width={18} height={18} {...props}>
    <path d="M18 3.879L14.12 0 9.001 5.121 3.88 0 0 3.879l5.123 5.124L0 14.121 3.88 18l5.121-5.121L14.12 18 18 14.121l-5.12-5.118z" />
  </SvgIcon>
);

export default CloseIcon;
