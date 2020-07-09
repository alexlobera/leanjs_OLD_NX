import React from 'react';
import { Box, BoxProps } from '../box';

const px = (n) => (typeof n === 'number' ? n + 'px' : n);

const widthToColumns = (width) =>
  Array.isArray(width)
    ? width.map(widthToColumns)
    : !!width && `repeat(auto-fit, minmax(${px(width)}, 1fr))`;

const countToColumns = (n) =>
  Array.isArray(n)
    ? n.map(countToColumns)
    : !!n && (typeof n === 'number' ? `repeat(${n}, 1fr)` : n);

type Column = string | number | string[] | number[];
type ColumnWidth = { minWidth: Column };
interface GridProps extends BoxProps {
  columns?: Column | ColumnWidth;
  gap?: number;
}

export const Grid = React.forwardRef(
  ({ columns = 3, gap = 3, ...props }: GridProps, ref) => {
    const gridTemplateColumns =
      typeof columns === 'object'
        ? widthToColumns((columns as ColumnWidth).minWidth)
        : countToColumns(columns);

    return (
      <Box
        ref={ref}
        {...props}
        sx={{
          display: 'grid',
          gridGap: gap,
          gridTemplateColumns,
        }}
      />
    );
  }
);
