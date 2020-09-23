import * as React from 'react';
import { Grid, Row, Col as FlexboxCol } from 'react-styled-flexboxgrid';
import { Props } from '../../Types/React';

interface ColProps extends Props {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  center?: number;
  end?: number;
  style?: object;
  order?: number;
}

const Col: React.SFC<ColProps> = ({
  xs,
  sm,
  md,
  lg,
  center,
  end,
  style = {},
  order,
  children,
  ...rest
}) => {
  const sizes = {
    xs: xs || 12,
    sm: sm || xs || 12,
    md: md || sm || xs || 12,
    lg: lg || md || sm || xs || 12,
  };

  return <FlexboxCol {...rest} {...sizes} children={children} style={style} />;
};

export { Row, Col, Grid };

export default Grid;
