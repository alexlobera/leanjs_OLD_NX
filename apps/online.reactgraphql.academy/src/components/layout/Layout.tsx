import React, { FunctionComponent } from 'react';

import Footer from './Footer';
import Navbar from '../navigation/Navbar';
import Link from '../navigation/Link';
import { Ul, Li } from '.';

const Layout: FunctionComponent = ({ children }) => (
  <React.Fragment>
    <Navbar>
      <Ul variant="inline" sx={{ ml: 'auto' }}>
        <Li>
          <Link to="/online-courses">Online courses</Link>
        </Li>
        <Li>
          <Link to="/online-conferences">Online conferences</Link>
        </Li>
        <Li>
          <Link to="/login">Login</Link>
        </Li>
        <Li>
          <Link to="https://reactgraphql.academy/blog/">Blog</Link>
        </Li>
      </Ul>
    </Navbar>
    {children}
    <Footer />

    {/*
      <AcceptCookies /> */}
  </React.Fragment>
);

export default Layout;
