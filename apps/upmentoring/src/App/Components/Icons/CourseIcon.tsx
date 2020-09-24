import React from 'react';

import SvgIcon from './SvgIcon';
import { Props } from '../../Types/React';

const CourseIcon: React.FunctionComponent<Props> = (props) => (
  <SvgIcon viewBox="0 0 22 22" width={22} height={22} {...props}>
    <path
      fillRule="evenodd"
      d="M16,4.54736842 L16,18.6947368 C16,18.9730358 15.77539,19.2 15.5,19.2 L2.5,19.2 C1.125,19.2 0,18.0631579 0,16.6736842 L0,2.52631579 C0,1.13684211 1.125,0 2.5,0 L14.5,0 C14.7754,0 15,0.226974316 15,0.505263158 L15,3.03157895 C15,3.69966316 14,3.70064842 14,3.03157895 L14,1.01052632 L2.5,1.01052632 C0.517575,1.01052632 0.51465,4.04210526 2.5,4.04210526 L15.5,4.04210526 C15.7754,4.04210526 16,4.26907958 16,4.54736842 Z"
    />
  </SvgIcon>
);

export default CourseIcon;
