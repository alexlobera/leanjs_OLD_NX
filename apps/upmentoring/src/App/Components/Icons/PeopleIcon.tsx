import React from 'react';
import SvgIcon from './SvgIcon';
import { Props } from '../../Types/React';

const PeopleIcon: React.FunctionComponent<Props> = (props) => (
  <SvgIcon viewBox="0 0 20 18" width={20} height={18} {...props}>
    <g fillRule="evenodd" transform="translate(.085161)">
      <path d="m6 7.479c2.0618 0 3.739-1.67734 3.739-3.739 0-2.0624-1.67734-3.7398-3.739-3.7398s-3.739 1.67734-3.739 3.739c0 2.0624 1.67734 3.7398 3.739 3.7398z" />
      <path d="m9.4664 7.407c-.90546.85704-2.1242 1.38672-3.4664 1.38672s-2.561-.52968-3.4664-1.38594c-1.37812.3914-2.3914 1.65782-2.3914 3.1594v7.4328h11.7156v-7.4328c0-1.50234-1.01328-2.7688-2.3914-3.1602z" />
    </g>
  </SvgIcon>
);

export default PeopleIcon;
