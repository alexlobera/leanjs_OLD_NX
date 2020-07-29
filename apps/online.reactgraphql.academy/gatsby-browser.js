import React from 'react';
import { ThemeProvider } from '@leanjs/ui-core';
import 'normalize.css';

import theme from './src/config/theme';
import './src/config/site.css';
import UserProvider from './src/components/auth/UserProvider';

export const wrapRootElement = ({ element }) => (
  <UserProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </UserProvider>
);
