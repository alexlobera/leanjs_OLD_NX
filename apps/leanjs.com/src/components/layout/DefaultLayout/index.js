import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from './favicon.ico';
import Footer from '../Footer';
import './index.css';
import './reset.css';
// import 'normalize.css';

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet
      title="Optimize software for change, reduce waste, move faster | LeanJS "
      meta={[
        {
          name: 'description',
          content:
            'LeanJS is a boutique of excellence focused on Lean, JavaScript, Agile, and people. We help companies reduce waste & speed up their development process',
        },
      ]}
      link={[{ rel: 'icon', type: 'image/x-icon', href: `${favicon}` }]}
    />

    {children}
    <Footer />
  </React.Fragment>
);

export default Layout;
