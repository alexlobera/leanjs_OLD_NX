import React, { FunctionComponent } from 'react';
import { ThemeProvider as SCThemeProvider, useTheme } from 'styled-components';
import { Theme } from '@theme-ui/css';
import deepmerge from 'deepmerge';

interface ThemeProviderProps {
  theme: Theme;
  mergeKeys?: string[];
}

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

export { useTheme };

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const outerTheme = useTheme() || {};
  const mergedTheme = deepmerge(outerTheme, theme, {
    arrayMerge: overwriteMerge,
  });
  //   console.log('aaaaa 333', theme);
  //   console.log('aaaaa 222', outerTheme);
  //   console.log('aaaaa 111', mergedTheme);
  return <SCThemeProvider theme={mergedTheme} children={children} />;
};
