import React from 'react';
import { Ul, Li, Box, BoxProps, As } from '../layout';
import Link from './Link';

export interface BreadcrumbPath {
  text: string;
  path?: string;
}
export interface BreadcrumbProps {
  paths: BreadcrumbPath[];
  divider?: string | JSX.Element;
}

function Breadcrumb<T extends As = 'div'>({
  paths,
  sx = {},
  divider = '>',
  className = 'breadcrumb',
}: BoxProps<T, BreadcrumbProps>) {
  return paths && paths.length ? (
    <Box
      sx={{
        bg: 'inverseBackgroundOpacity',
        ...sx,
      }}
    >
      <Ul
        variant="inline"
        sx={{
          '> li:first-child': { pl: 0 },
          '> li:last-child': { pr: 0, display: ['none', 'inline'] },
          // '> li:nth-last-child(-n + 2)': { display: ['none', 'inline'] },
          pb: 1,
        }}
      >
        {paths.map(({ path, text }, i) => {
          const sxLi = {
            'li,a:visited,a:link,a:hover,a:active,&': {
              color: 'inverseText',
              fontSize: 1,
            },
            px: 1,
            display: 'inline',
          };

          return (
            <React.Fragment key={path + text}>
              <Li sx={sxLi}>
                {path ? (
                  <Link className={className} to={path}>
                    {text}
                  </Link>
                ) : (
                  text
                )}
              </Li>
              {paths.length > 0 && i < paths.length - 1 && (
                <Li sx={sxLi}>{divider}</Li>
              )}
            </React.Fragment>
          );
        })}
      </Ul>
    </Box>
  ) : null;
}

export default React.memo(Breadcrumb);
