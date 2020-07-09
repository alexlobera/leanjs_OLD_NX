import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { Theme } from '@theme-ui/css';

export const ThemeProvider = ({ theme }: Theme) => {
  return <SCThemeProvider theme={theme} />;
};
