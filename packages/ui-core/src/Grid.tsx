import React from 'react';
import { Box, BoxProps, As } from './Box';

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

interface GridProps {
  columns?: Column | ColumnWidth;
  gap?: number;
}

export const Grid = <T extends As = 'div'>(props: BoxProps<T, GridProps>) => {
  const { columns = 3, gap = 3 } = props;
  const gridTemplateColumns =
    typeof columns === 'object'
      ? widthToColumns((columns as ColumnWidth).minWidth)
      : countToColumns(columns);

  return (
    <Box
      {...props}
      columns={null}
      gap={null}
      __themeKey="grids"
      __sx={{
        display: 'grid',
        gridGap: gap,
        gridTemplateColumns,
      }}
    />
  );
};

// 🎉 works well, fff fails
// const B = (props) => <Button fff id="aad" onClick={(e) => {}} />;
// ❌ this doesn't work since it doesnt fail when spreading {...props}
// interface P {
//   a: boolean;
// }
// const B = ({a, ...rest}: P) => <Grid fssff {...rest} sx={{ m: 1 }} />;
