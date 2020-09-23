import React from 'react';
import SvgIcon from './SvgIcon';
import { Props } from '../../Types/React';

const TickIcon: React.FunctionComponent<Props> = props => (
  <SvgIcon viewBox="0 0 18 18" width={18} height={18} {...props}>
    <path
      d="m161 1741.22094-12.2196 11.77906-7.7804-7.4999 3.3414-3.22094 4.439 4.27897 8.8782-8.55813z"
      fill="#4d4d4d"
      fillRule="evenodd"
      transform="translate(-141 -1738)"
    />
  </SvgIcon>
);

export default TickIcon;
