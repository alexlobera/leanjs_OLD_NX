import React from 'react';
import { Helmet } from 'react-helmet';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title={data && data.site && data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data && data.site && data.site.siteMetadata.description,
          },
        ]}
        link={[
          {
            rel: 'icon',
            type: 'image/x-icon',
            href: `${favicon}`,
          },
        ]}
      ></Helmet>
      {children}
      {/* <Footer />
      <AcceptCookies /> */}
    </React.Fragment>
  );
}

export default Layout;
