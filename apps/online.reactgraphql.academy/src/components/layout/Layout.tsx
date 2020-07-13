import React, { FunctionComponent } from 'react';

import Footer from './Footer';
import Navbar from '../navigation/Navbar';

const Layout: FunctionComponent = ({ children }) => (
  <React.Fragment>
    <Navbar>asdfasdf</Navbar>
    {children}
    <Footer />

    {/*
      <AcceptCookies /> */}
  </React.Fragment>
);

export default Layout;
