import React from 'react';
import { ThemeProvider } from '@leanjs/ui-core';
import 'normalize.css';

import './src/config/site.css';
import theme from './src/config/theme';
import Layout from './src/components/layout/Layout';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Layout>{element}</Layout>
  </ThemeProvider>
);
