import React from 'react';

import SvgIcon from './SvgIcon';
import { Props } from '../../Types/React';

const ExclamationIcon: React.FunctionComponent<Props> = (props) => (
  <SvgIcon viewBox="0 0 18 18" width={18} height={18} {...props}>
    <path d="M6 0a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm-.93 1.8h1.863a.24.24 0 0 1 .239.267l-.546 4.92a.24.24 0 0 1-.239.213h-.77a.24.24 0 0 1-.238-.212L4.83 2.067a.24.24 0 0 1 .238-.267zm.93 9c-.664 0-1.2-.536-1.2-1.2 0-.664.536-1.2 1.2-1.2s1.2.536 1.2 1.2c0 .664-.536 1.2-1.2 1.2z" />
  </SvgIcon>
);

export default ExclamationIcon;
