import React, { FunctionComponent } from 'react';

import Footer from './Footer';

const Layout: FunctionComponent = ({ children }) => (
  <React.Fragment>
    {children}
    <Footer />

    {/*
      <AcceptCookies /> */}
  </React.Fragment>
);

export default Layout;
