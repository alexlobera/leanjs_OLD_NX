import React, { FunctionComponent } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { Theme } from '@theme-ui/css';

interface ThemeProviderProps {
  theme: Theme;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return <SCThemeProvider theme={theme} children={children} />;
};
