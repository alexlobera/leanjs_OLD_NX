import React from 'react';

import SvgIcon from './SvgIcon';
import { Props } from '../../Types/React';

const CloseIcon: React.FunctionComponent<Props> = (props) => (
  <SvgIcon viewBox="0 0 16 18" width={16} height={18} {...props}>
    <path d="m11.119 18v-6.137h-6.598v6.137h-4.521v-11.269l7.82-6.731 7.857 6.731v11.269z" />
  </SvgIcon>
);

export default CloseIcon;
