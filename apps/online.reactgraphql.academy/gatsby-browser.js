import React from 'react';
import { ThemeProvider } from '@leanjs/ui-core';
import 'normalize.css';

import theme from './src/config/theme';
import './src/config/site.css';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
