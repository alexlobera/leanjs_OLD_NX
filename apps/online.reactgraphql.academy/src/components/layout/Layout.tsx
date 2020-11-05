import React, { FunctionComponent } from 'react';
import { AcceptCookiesBanner } from '@leanjs/ui-academy';

import Footer from './Footer';
import Navbar from '../navigation/Navbar';
import Link from '../navigation/Link';
import AuthLink from '../auth/AuthLink';
import { Ul, Li } from '.';

import { setCookie, getCookie, getURLParameter } from '../../utils';
// import { BreadcrumbProps } from '../navigation/Breadcrumb';
// TODO include in teaching material BreadcrumbPath vs BreadcrumbProps. See comments below
import Breadcrumb, { BreadcrumbPath } from '../navigation/Breadcrumb';
interface LayoutProps {
  // breadcrumb?: React.FunctionComponent<BreadcrumbProps>;
  // TODO include in teaching material passing breadcrumbPaths (data) vs breadcrumb (data + component). How often the data changes vs the component in the entire app?
  // breadcrumb?: JSX.Element;
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
  React.useEffect(() => {
    const utm_source_cookie = getCookie('utm_source');
    const utm_source_url = getURLParameter('utm_source');
    if (!utm_source_cookie && utm_source_url) {
      setCookie('utm_source', utm_source_url);
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar
        sx={{ ...(variantLayoutProps[variant] || {}) }}
        menu={
          <Ul
            variant="inline"
            sx={{
              ml: 'auto',
              display: 'flex',
              li: { alignItems: 'center', display: 'flex' },
            }}
          >
            <Li>
              <AuthLink />
            </Li>
            <Li>
              <Link to="https://reactgraphql.academy/blog/">Blog</Link>
            </Li>
          </Ul>
        }
      >
        {breadcrumbPaths && (
          <Breadcrumb sx={{ px: 4, py: 0 }} paths={breadcrumbPaths} />
        )}
      </Navbar>
      {children}
      <Footer />

      <AcceptCookiesBanner />
    </React.Fragment>
  );
};

export default Layout;
