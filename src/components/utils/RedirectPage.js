import React from 'react'
import Helmet from 'react-helmet'

import Link from '../navigation/Link'

const RedirectPage = ({ to }) => (
  <React.Fragment>
    <Helmet>
      <meta http-equiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={to} />
    </Helmet>
    <p>
      This page has moved. Click <Link to={to}>here</Link> to go to the new
      page.
    </p>
  </React.Fragment>
)

export default RedirectPage
