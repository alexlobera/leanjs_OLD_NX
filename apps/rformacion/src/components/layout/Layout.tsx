import React, { FunctionComponent } from 'react';

import Footer from './Footer';
import Navbar from '../navigation/Navbar';
// import Link, { LinkButton } from '../navigation/Link';
// import Link from '../navigation/Link';
// import { Ul, Li } from '.';

import Breadcrumb, { BreadcrumbPath } from '../navigation/Breadcrumb';
import Menu from '../navigation/menu';
interface LayoutProps {
  breadcrumbPaths?: BreadcrumbPath[];
  variant?: string;
}

const variantLayoutProps = {
  stack: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
    zIndex: 'sticky',
  },
};

const Layout: FunctionComponent<LayoutProps> = ({
  breadcrumbPaths,
  children,
  variant = 'absolute',
}) => {
  return (
    <React.Fragment>
      <Navbar sx={{ ...(variantLayoutProps[variant] || {}) }} menu={<Menu />}>
        {breadcrumbPaths && (
          <Breadcrumb sx={{ px: 4, py: 1 }} paths={breadcrumbPaths} />
        )}
      </Navbar>
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
