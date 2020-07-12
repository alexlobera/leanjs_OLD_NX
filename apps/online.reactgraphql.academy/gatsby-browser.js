import React from 'react';
import { ThemeProvider } from '@leanjs/ui-core';

import { theme } from 'src/config/styles';
import Layout from './src/components/layout';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
