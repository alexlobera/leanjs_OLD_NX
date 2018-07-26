import React from 'react'
import Helmet from 'react-helmet'

const RedirectPage = ({ to }) => (
  <React.Fragment>
    <Helmet>
      <meta http-equiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={to} />
    </Helmet>
    <p>
      This page has moved. Click <a href={to}>here</a> to go to the new page.
    </p>
  </React.Fragment>
)

export default RedirectPage
