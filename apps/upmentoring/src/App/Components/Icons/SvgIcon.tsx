import React from 'react';

import { Props } from '../../Types/React';
import { addDefaultProps } from '../../Utils/react';

const StyledSvgIcon: React.FunctionComponent<Props> = ({
  children,
  ...wrapperProps
}) => <svg {...wrapperProps}>{children}</svg>;

const defaultProps = {
  viewBox: '0 0 18 18',
};

const SvgIcon = addDefaultProps(StyledSvgIcon, defaultProps);
export default SvgIcon;
